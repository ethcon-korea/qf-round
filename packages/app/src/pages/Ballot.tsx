import React, { useCallback, useEffect, useState, useMemo } from "react";
import {
  Container,
  Image,
  VStack,
  Grid,
  GridItem,
  Flex,
  Text,
  Heading,
  Button,
  useColorModeValue,
  useToast,
  FormControl,
  FormHelperText,
  Input,
  Tooltip,
  useMediaQuery,
  AspectRatio,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  RadioGroup,
  Radio,
} from "@chakra-ui/react";

import { MagikButton } from "@qfi/ui";
import { getProject, getRecipientIdbyId } from "../data";
import { Option } from "../propTypes";
import { BallotOption } from "../components/prague/BallotOption";
import { Hero } from "../components/Hero";
import { BallotExplainer } from "../components/prague/BallotExplainer";
import { Link, useSearchParams } from "react-router-dom";
import { useDappState } from "../context/DappContext";
import {
  Keypair,
  PubKey,
  PrivKey,
  PCommand,
  Message,
} from "../jubjublib/domainobjs/domainobjs";
import { genRandomSalt } from "../jubjublib/crypto";
import { useWallet, WalletProvider } from "@qfi/hooks";
import { JubjubFactory__factory } from "../typechain/factories/contracts/JubjubFactory__factory";
import {
  Jubjub__factory,
  JubjubLibraryAddresses,
} from "../typechain/factories/contracts/Jubjub__factory";
import { Jubjub } from "../typechain/contracts/Jubjub";
import { BigNumber, ethers } from "ethers";
import { getStateIndex } from "../quickBallotConfig";
import { useTranslation } from "react-i18next";
import { Libs, TicketAddress, JubjubFactoryAddress } from "./Address";
import { MdBorderColor } from "react-icons/md";

const isMaciPrivKey = (key: string): boolean => {
  if (
    (key.length === 71 || key.length === 70 || key.length === 69) &&
    key.startsWith("macisk.")
  ) {
    console.log("key is valid maci key");
    const pubKey = new Keypair(PrivKey.unserialize(key)).pubKey.serialize();
    return true;
  }

  return false;
};

interface SubmitBallotButtonProps {
  isConnected: boolean;
  disableSubmitButton: boolean;
  my?: number;
  isSignUp: boolean;
  isEligible: boolean;
  onSubmit: () => React.ReactNode;
  onOpen: () => void;
  t: (arg: string) => any;
}

const SubmitBallotButton = ({
  isConnected,
  disableSubmitButton,
  my = 0,
  isSignUp,
  isEligible,
  onSubmit,
  onOpen,
  t,
}: SubmitBallotButtonProps) =>
  isConnected ? (
    <Tooltip
      isDisabled={!disableSubmitButton}
      label={t(
        "Unregistered MACI Keypair: Enter a valid MACI key to continue."
      )}
      placement="top"
      shouldWrapChildren
    >
      <Button
        m="auto"
        maxWidth={{ md: "150px" }}
        width="100%"
        h={10}
        backgroundColor="#F1EDE4"
        display="block"
        disabled={disableSubmitButton}
        onClick={async () => {
          if (isEligible == true && isSignUp == false) {
            return onOpen();
          } else {
            return onSubmit();
          }
        }}
        fontSize={{ base: "md", xl: "lg" }}
        color="black"
        _hover={{
          transform: "scale(1.03)",
        }}
      >
        <Text whiteSpace="break-spaces">{t("SUBMIT BALLOT")}</Text>
      </Button>
    </Tooltip>
  ) : (
    <VStack my={my} textAlign="center" w="full">
      <Text
        display={isConnected ? "none" : "flex"}
        fontSize="xs"
        fontWeight="extrabold"
      >
        {t("Not Connected: Sign in to continue")}
      </Text>
    </VStack>
  );

const headerYourBallotLogo = {
  en: "your_ballot_EN.svg",
  es: "your_ballot_ES.svg",
};

export const Ballot = () => {
  const backgroundColor = useColorModeValue("gray.100", "#000000");
  const colorModeSwitch = useColorModeValue(true, false);
  const [isViewportMd] = useMediaQuery("(min-width: 768px)");
  const [searchParams] = useSearchParams();
  const { i18n, t } = useTranslation();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const btnRef = React.useRef(null);
  const toast = useToast();

  const currLang = i18n.language;

  const { provider, address, isConnected, isSignUp, isEligible, signUp } =
    useWallet();

  const voteOptions = useMemo(() => {
    return searchParams.getAll("option");
  }, [searchParams]);

  //TODO: IDs of all the projects on the users ballot according to recipient registry
  const recipientRegistryIds = useMemo(() => {
    return voteOptions
      .filter((s) => !isNaN(parseInt(s)))
      .map((s) => parseInt(s));
  }, [voteOptions]);

  const displayOptions: boolean = useMemo(() => {
    return recipientRegistryIds.length > 0;
  }, [recipientRegistryIds]);
  const color = useColorModeValue("gray.800", "gray.700");
  const [ballotOptions, setBallotOptions] = useState<number[]>([]);
  const [ballotData, setBallotData] = useState<Option[]>([]);
  const [voiceCreditBalance, setVoiceCreditBBalance] = useState(0);

  const isEmptyBallot = useMemo(
    () =>
      ballotOptions.reduce((p, option) => {
        return p && isNaN(option);
      }, true) === false,
    [ballotOptions]
  );

  //ballot option 1 number of votes
  const [ballotOption1Votes, setBallotOption1Votes] = useState(0);
  const [ballotOption2Votes, setBallotOption2Votes] = useState(0);
  const [ballotOption3Votes, setBallotOption3Votes] = useState(0);
  const [ballotOption4Votes, setBallotOption4Votes] = useState(0);
  const [ballotOption5Votes, setBallotOption5Votes] = useState(0);
  const [ballotOption6Votes, setBallotOption6Votes] = useState(0);
  const [ballotOption7Votes, setBallotOption7Votes] = useState(0);
  const [ballotOption8Votes, setBallotOption8Votes] = useState(0);

  //TODO: number of votes per vote option, lines up with recipientRegistryIds
  //TODO: take this data along with recipientRegistryIds and use it to populate messages, then submit
  const votes = useMemo(
    () => [
      ballotOption1Votes,
      ballotOption2Votes,
      ballotOption3Votes,
      ballotOption4Votes,
      ballotOption5Votes,
      ballotOption6Votes,
      ballotOption7Votes,
      ballotOption8Votes,
    ],
    [
      ballotOption1Votes,
      ballotOption2Votes,
      ballotOption3Votes,
      ballotOption4Votes,
      ballotOption5Votes,
      ballotOption6Votes,
      ballotOption7Votes,
      ballotOption8Votes,
    ]
  );

  const resetAllVotes = useCallback(() => {
    setBallotOption1Votes(0);
    setBallotOption2Votes(0);
    setBallotOption3Votes(0);
    setBallotOption4Votes(0);
    setBallotOption5Votes(0);
    setBallotOption6Votes(0);
    setBallotOption7Votes(0);
    setBallotOption8Votes(0);
  }, [
    setBallotOption1Votes,
    setBallotOption2Votes,
    setBallotOption3Votes,
    setBallotOption4Votes,
    setBallotOption5Votes,
    setBallotOption6Votes,
    setBallotOption7Votes,
    setBallotOption8Votes,
  ]);

  const addBallotOption1Votes = useCallback(() => {
    if (
      voiceCreditBalance +
        ballotOption1Votes ** 2 -
        (ballotOption1Votes + 1) ** 2 <
      0
    ) {
      return setBallotOption1Votes(0);
    }
    if (ballotOption1Votes < 9) {
      return setBallotOption1Votes(ballotOption1Votes + 1);
    }
    return setBallotOption1Votes(0);
  }, [ballotOption1Votes, voiceCreditBalance]);
  const addBallotOption2Votes = useCallback(() => {
    if (
      voiceCreditBalance +
        ballotOption2Votes ** 2 -
        (ballotOption2Votes + 1) ** 2 <
      0
    ) {
      return setBallotOption2Votes(0);
    }
    if (ballotOption2Votes < 9) {
      return setBallotOption2Votes(ballotOption2Votes + 1);
    }
    return setBallotOption2Votes(0);
  }, [ballotOption2Votes, voiceCreditBalance]);
  const addBallotOption3Votes = useCallback(() => {
    if (
      voiceCreditBalance +
        ballotOption3Votes ** 2 -
        (ballotOption3Votes + 1) ** 2 <
      0
    ) {
      return setBallotOption3Votes(0);
    }
    if (ballotOption3Votes < 9) {
      return setBallotOption3Votes(ballotOption3Votes + 1);
    }
    return setBallotOption3Votes(0);
  }, [ballotOption3Votes, voiceCreditBalance]);
  const addBallotOption4Votes = useCallback(() => {
    if (
      voiceCreditBalance +
        ballotOption4Votes ** 2 -
        (ballotOption4Votes + 1) ** 2 <
      0
    ) {
      return setBallotOption4Votes(0);
    }
    if (ballotOption4Votes < 9) {
      return setBallotOption4Votes(ballotOption4Votes + 1);
    }
    return setBallotOption4Votes(0);
  }, [ballotOption4Votes, voiceCreditBalance]);
  const addBallotOption5Votes = useCallback(() => {
    if (
      voiceCreditBalance +
        ballotOption5Votes ** 2 -
        (ballotOption5Votes + 1) ** 2 <
      0
    ) {
      return setBallotOption5Votes(0);
    }
    if (ballotOption5Votes < 9) {
      return setBallotOption5Votes(ballotOption5Votes + 1);
    }
    return setBallotOption5Votes(0);
  }, [ballotOption5Votes, voiceCreditBalance]);
  const addBallotOption6Votes = useCallback(() => {
    if (
      voiceCreditBalance +
        ballotOption6Votes ** 2 -
        (ballotOption6Votes + 1) ** 2 <
      0
    ) {
      return setBallotOption6Votes(0);
    }
    if (ballotOption6Votes < 9) {
      return setBallotOption6Votes(ballotOption6Votes + 1);
    }
    return setBallotOption6Votes(0);
  }, [ballotOption6Votes, voiceCreditBalance]);
  const addBallotOption7Votes = useCallback(() => {
    if (
      voiceCreditBalance +
        ballotOption7Votes ** 2 -
        (ballotOption7Votes + 1) ** 2 <
      0
    ) {
      return setBallotOption7Votes(0);
    }
    if (ballotOption7Votes < 9) {
      return setBallotOption7Votes(ballotOption7Votes + 1);
    }
    return setBallotOption7Votes(0);
  }, [ballotOption7Votes, voiceCreditBalance]);
  const addBallotOption8Votes = useCallback(() => {
    if (
      voiceCreditBalance +
        ballotOption8Votes ** 2 -
        (ballotOption8Votes + 1) ** 2 <
      0
    ) {
      return setBallotOption8Votes(0);
    }
    if (ballotOption8Votes < 9) {
      return setBallotOption8Votes(ballotOption8Votes + 1);
    }
    return setBallotOption8Votes(0);
  }, [ballotOption8Votes, voiceCreditBalance]);
  //wrap all the votes into an array

  const totalVoiceCredits = useMemo(() => {
    return votes.reduce((acc, curr) => acc + curr ** 2, 0);
  }, [votes]);
  const updateVotes = [
    addBallotOption1Votes,
    addBallotOption2Votes,
    addBallotOption3Votes,
    addBallotOption4Votes,
    addBallotOption5Votes,
    addBallotOption6Votes,
    addBallotOption7Votes,
    addBallotOption8Votes,
  ];
  useEffect(() => {
    const intialBallotOptions = [NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN];
    const options = voteOptions
      .filter((s) => !isNaN(parseInt(s)))
      .map((s) => parseInt(s));

    const initialVoiceCreditBalance = 99;
    resetAllVotes();
    setVoiceCreditBBalance(initialVoiceCreditBalance);

    setBallotOptions(options.length === 0 ? intialBallotOptions : options);
  }, [voteOptions, resetAllVotes]);

  useEffect(() => {
    const newBallotData = ballotOptions?.map((optionId) => {
      return getProject(String(optionId));
    });
    setBallotData(newBallotData);
  }, [ballotOptions]);

  useEffect(() => {
    const totalVoiceCreditsUsed = votes.reduce(
      (acc, curr) => acc + curr ** 2,
      0
    );
    const newVoiceCreditBalance = 99 - totalVoiceCreditsUsed;
    setVoiceCreditBBalance(newVoiceCreditBalance);
  }, [votes]);

  const [txLoading, setTxLoading] = useState<boolean>(false);
  const disableSubmitButton = !isConnected || txLoading;
  function createMessage(
    userStateIndex: number,
    userKeypair: Keypair,
    coordinatorPubKey: PubKey,
    voteOptionIndex: number | null,
    voteWeight: number | null,
    nonce: number
  ): [Message, PubKey] {
    const salt = genRandomSalt();

    const quadraticVoteWeight = voteWeight ?? 0;
    const pubkey = userKeypair.pubKey;

    // TODO:amsterdam
    // /stateIndex: BigInt,
    // newPubKey: PubKey,
    // voteOptionIndex: BigInt,
    // newVoteWeight: BigInt,
    // nonce: BigInt,
    // pollId: BigInt,
    const command = new PCommand(
      BigInt(userStateIndex),
      pubkey,
      BigInt(voteOptionIndex || 0),
      BigInt(quadraticVoteWeight),
      BigInt(nonce),
      BigInt(0),
      salt
    );

    const signature = command.sign(userKeypair.privKey);
    const message = command.encrypt(
      signature,
      Keypair.genEcdhSharedKey(userKeypair.privKey, coordinatorPubKey)
    );
    return [message, userKeypair.pubKey];
  }

  const handleSubmit = async () => {
    let maciKey;
    let userStateIndex: number;
    try {
      const response = await fetch(
        "https://ethcon-worker.boss195.workers.dev",
        {
          method: "POST",
          body: JSON.stringify({ request_type: "read", eoa: address }),
        }
      );

      const data = await response.json();
      maciKey = data.data[0].maci_private;
      userStateIndex = data.data[0].state_index;

      console.log("retreived maciKey from worker:");
      console.log("maciKey", maciKey);
      console.log("userStateIndex", userStateIndex);

      //
    } catch (error) {
      console.log("failed to fetch whitelist: ", error);
    }

    if (isMaciPrivKey(maciKey)) {
      toast({
        title: t("Verify Maci Key"),
        description: t("You have MACI key"),
        status: "success",
        duration: 6000,
        isClosable: true,
      });

      const signer = provider.getSigner(address);

      let JubjubTemplateFactory: Jubjub__factory;
      JubjubTemplateFactory = new Jubjub__factory(Libs, signer);
      const jubjubFactory = new ethers.Contract(
        JubjubFactoryAddress,
        JubjubFactory__factory.abi,
        signer
      );
      const jubjubInstance = JubjubTemplateFactory.attach(
        await jubjubFactory.currentJubjub()
      );
      setTxLoading(true);
      console.log("-----------------------------------------------------");
      const txData: [Message, PubKey][] = recipientRegistryIds.map(
        (projectId, index) => {
          try {
            const recipientVoteOptionIndex = getRecipientIdbyId(
              projectId.toString()
            );
            console.log("recipientVoteOptionIndex", recipientVoteOptionIndex);
            let maciKeyPair: Keypair;
            let serializedMaciPublicKey: string;
            let nonce: number;
            let voteWeight: number;

            if (isMaciPrivKey(maciKey)) {
              maciKeyPair = new Keypair(PrivKey.unserialize(maciKey));
              serializedMaciPublicKey = maciKeyPair.pubKey.serialize();
              console.log("serializedMaciPublicKey", serializedMaciPublicKey);
              console.log("stateIndex", userStateIndex);
              nonce = index;
              voteWeight = votes[index];
            }
            if (isMaciPrivKey(maciKey)) {
              console.log(
                "User is registered, signing ballot with private key"
              );
              // const coordinatorKey = PubKey.unserialize(
              //   "macipk.ec4173e95d2bf03100f4c694d5c26ba6ab9817c0a5a0df593536a8ee2ec7af04"
              // );
              const coordinatorKey = PubKey.unserialize(
                "macipk.9347da6e39ff8e40ff7087f56926c45c420cb016ac3c668bca6a979d7bbd268a"
              );

              const [message, encPubKey] = createMessage(
                userStateIndex,
                maciKeyPair,
                coordinatorKey,
                recipientVoteOptionIndex,
                voteWeight,
                nonce
              );
              return [message, encPubKey];
            } else {
              console.log("user is not registered, throw message");
              throw new Error("User is not registered");
            }
          } catch (e) {
            return [null, null];
          }
        }
      );
      const messages: Message[] = [];
      const encPubKeys: PubKey[] = [];
      const messagesJubJub: Jubjub.MessageStruct[] = [];
      const encPubKeyJubJub: Jubjub.PubKeyStruct[] = [];

      for (const [message, encPubKey] of txData) {
        var tempMsg: Jubjub.MessageStruct = {} as Jubjub.MessageStruct;
        var tempEncPub: Jubjub.PubKeyStruct = {} as Jubjub.PubKeyStruct;
        tempMsg.msgType = BigNumber.from(message.asContractParam().msgType);
        tempMsg.data = [];
        for (const _data of message.data) {
          tempMsg.data.push(BigNumber.from(_data));
        }
        tempEncPub = encPubKey.asContractParam();

        messagesJubJub.push(tempMsg);
        encPubKeyJubJub.push(tempEncPub);
      }

      console.log(messages);
      console.log(encPubKeys);
      try {
        const gasPrice = await provider.getGasPrice();
        const gasLimit = ethers.utils.hexlify(10000000);
        const signer = provider.getSigner(address);

        const tx = await jubjubInstance
          .connect(signer)
          .publishMessageBatch(messagesJubJub, encPubKeyJubJub, {
            gasPrice: gasPrice,
            gasLimit,
          });
        await tx.wait();
        toast({
          title: t("Ballot Submitted"),
          description: t(
            "You have submitted your ballot! Feel free to resubmit if you change your mind."
          ),
          status: "success",
          duration: 10000,
          isClosable: true,
        });
      } catch (e) {
        setTxLoading(false);
        console.log(e);
      }
      setTxLoading(false);
      console.log("debug log", txData);
    } else {
      throw new Error("Invalid MACI key");
    }
  };

  return (
    <Flex
      as="main"
      h="full"
      w="full"
      bg={backgroundColor}
      alignItems="center"
      flexDir="column"
      borderRightColor={color}
      borderRightWidth={1}
      backgroundColor="#DB008E"
      overflowY="scroll"
      fontFamily={"Noto Sans KR"}
      sx={{
        scrollbarColor: "green",
        "::-webkit-scrollbar": {
          width: "0px",
        },

        "::-webkit-scrollbar-track": {
          boxShadow: "inset 0 0 0px grey",
          borderRadius: "0px",
        },

        "::-webkit-scrollbar-thumb": {
          background: "transparent",
          borderRadius: "0px",
        },
      }}
    >
      <Container style={{ marginTop: 150, maxWidth: 1042 }}>
        <Flex w="full" alignItems="center" flexDirection="column">
          {!isConnected || isEligible == null ? (
            <></>
          ) : isEligible == true ? (
            <div
              style={{
                width: "100%",
                fontSize: 20,
                backgroundColor: "#00a5cf",
              }}
            >
              <Text textAlign={{ base: "center" }}>
                You are elligible to vote
              </Text>
            </div>
          ) : (
            <div
              style={{
                width: "100%",
                fontSize: 20,
                backgroundColor: "#e63946",
              }}
            >
              <Text textAlign={{ base: "center" }}>
                Your wallet is not elligible to vote, please connect the wallet
                with Ethcon NFT ticket on Optimism
              </Text>
            </div>
          )}

          <Modal
            onClose={onClose}
            finalFocusRef={btnRef}
            isOpen={isOpen}
            scrollBehavior={"inside"}
            size={"sm"}
            isCentered
          >
            <ModalOverlay bg="blackAlpha.300" backdropFilter="blur(10px)" />
            <ModalContent
              backgroundColor={"white"}
              color="black"
              fontSize={"20"}
            >
              <ModalHeader>📌 QF Notice 📌</ModalHeader>
              <ModalCloseButton />
              <ModalBody textAlign={{ base: "center" }}>
                <Text textAlign="justify">
                  {t(
                    "You can vote for your desired projects. The total number of voice credit you can cast is 99, and when you vote for a project more than once, it requires the number of credits to be squared."
                  )}{" "}
                  <br />
                  {t(
                    "For example, if you want to vote for a project once, it will consume 1 credit. for the same project twice, it will consume 4 credits (2^2). If you want to vote for the same project three times, it will consume 9 credits (3^2), and so on."
                  )}{" "}
                  <br />
                  {t(
                    "Please keep this in mind while distributing your votes among the projects."
                  )}{" "}
                  <br />
                  <br />
                  ❗️
                  {t(
                    "To participate in anonymous voting, you need to sign up. This process involves sending a transaction."
                  )}{" "}
                  ❗️
                </Text>
                <Button
                  style={{ marginTop: 30, textAlign: "center" }}
                  backgroundColor={"#3F0FFF"}
                  onClick={signUp}
                  color="white"
                  _hover={{ transform: "scale(1.05)" }}
                  fontFamily={"Noto Sans KR"}
                >
                  SignUp
                </Button>
              </ModalBody>
              <ModalFooter></ModalFooter>
            </ModalContent>
          </Modal>
          <MagikButton style={{ marginTop: 0 }} borderRadius={"8px"} mt={6} />
        </Flex>

        <VStack spacing={2} alignItems="flex-start" w="full">
          <Heading
            fontFamily={"Noto Sans KR"}
            style={{ marginTop: 56 }}
            textAlign={{ base: "center" }}
          >
            Voting Ballot
          </Heading>
          <Text 
            fontSize={"22"}
            >
             이곳에서 여러개의 프로젝트에 투표할 수 있습니다
          </Text>
          <BallotExplainer />
          <Heading
            fontFamily={"Noto Sans KR"}
            style={{ marginTop: 56 }}
            textAlign={{ base: "center" }}
          >
            {t("VOICE CREDIT BALANCE")}: {voiceCreditBalance}
          </Heading>
          <Text 
            fontSize={"18"}
            >
             투표 트랜잭션을 보내셨다면 투표가 정상적으로 완료된 것입니다
          </Text>
          <Text 
            fontSize={"16"}
            >
             If you sent a voting transaction, the vote completed successfully
          </Text>
          <Text px={"1px"}
            style={{ marginTop: 56 }}
          >
            {t("Voice Credits spent")}: {ballotOption1Votes ** 2} +{" "}
            {ballotOption2Votes ** 2} + {ballotOption3Votes ** 2} +
            {ballotOption4Votes ** 2} + {ballotOption5Votes ** 2} +{" "}
            {ballotOption6Votes ** 2} + {ballotOption7Votes ** 2} +{" "}
            {ballotOption8Votes ** 2} = {totalVoiceCredits}
          </Text>
        </VStack>
        {displayOptions ? (
          <VStack
            spacing={0}
            alignItems="flex-start"
            style={{ marginTop: 48 }}
            w="full"
            display={isEmptyBallot ? "flex" : "none"}
          >
            {ballotData.map((project, index) => (
              <BallotOption
                key={index}
                lastOption={index === ballotOptions.length - 1 ? true : false}
                ballotOption={project}
                votes={votes[index]}
                onClick={updateVotes[index]}
                to={`/${project.id}`}
              />
            ))}
          </VStack>
        ) : (
          <VStack style={{ marginTop: 48 }} alignItems="flex-start" w="full">
            <Button
              as={Link}
              fontSize={{ base: "lg", xl: "xl" }}
              w="full"
              to={`/?${searchParams.toString()}`}
              backgroundColor="#F1EDE4"
              color={"black"}
              _hover={{
                transform: "scale(1.03)",
              }}
            >
              {t("CHECK OUT THE PROJECTS")}
            </Button>
          </VStack>
        )}
        <VStack
          spacing={3}
          py={8}
          alignItems={"flex-start"}
          justifyContent={"center"}
          w="full"
        >
          {/* <Grid
            w="full"
            minH={180}
            mt={8}
            gridTemplateColumns={{
              base: "repeat(1, minmax(0, 1fr))",
              md: "repeat(10, minmax(0, 1fr))",
            }}
            templateRows={{
              base: "repeat(1, minmax(0, 1fr))",
              md: "repeat(2, minmax(0, 1fr))",
            }}
          ></Grid> */}
          {isEligible == true ? (
            <>
              <form style={{ width: "100%" }}>
                <SubmitBallotButton
                  disableSubmitButton={disableSubmitButton}
                  isConnected={isConnected}
                  my={6}
                  isSignUp={isSignUp}
                  isEligible={isEligible}
                  onSubmit={handleSubmit}
                  onOpen={onOpen}
                  t={t}
                />
              </form>
            </>
          ) : (
            <></>
          )}
        </VStack>
      </Container>
    </Flex>
  );
};
