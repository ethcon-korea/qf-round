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
} from "@chakra-ui/react";

import { MagikButton } from "@qfi/ui";
import { getProject, getRecipientIdbyId } from "../data";
import { Option } from "../propTypes";
import { BallotOption } from "../components/prague/BallotOption";
import { Hero } from "../components/Hero";
import { BallotExplainer } from "../components/prague/BallotExplainer";
import { Link, useSearchParams } from "react-router-dom";
import { useDappState } from "../context/DappContext";
import { utils, Contract } from "ethers";
import {
  Keypair,
  PubKey,
  PrivKey,
  PCommand,
  Message,
} from "../jubjublib/domainobjs/domainobjs";
import { genRandomSalt } from "../jubjublib/crypto";
import { useWallet } from "@qfi/hooks";
import { JubjubFactory__factory } from "../typechain/factories/contracts/JubjubFactory__factory";
import {
  Jubjub__factory,
  JubjubLibraryAddresses,
} from "../typechain/factories/contracts/Jubjub__factory";
import { Jubjub } from "../typechain/contracts/Jubjub";
import { BigNumber, ethers } from "ethers";
import { getStateIndex } from "../quickBallotConfig";
import { useTranslation } from "react-i18next";
import { createClient } from "@supabase/supabase-js";
import { Alchemy, Network } from "alchemy-sdk";
import { ALCHEMY_KEY, SUPABASE_SERVICE_KEY } from "./key";

const settings = {
  apiKey: ALCHEMY_KEY,
  network: Network.OPT_MAINNET,
};
const supabaseUrl = "https://lkrcjryaynygdvgtmumc.supabase.co";
const supabaseKey = SUPABASE_SERVICE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

const isMaciPrivKey = (key: string): boolean => {
  if ((key.length === 71 || key.length === 70) && key.startsWith("macisk.")) {
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
  onSubmit: () => React.ReactNode;
  t: (arg: string) => any;
}

const SubmitBallotButton = ({
  isConnected,
  disableSubmitButton,
  my = 0,
  onSubmit,
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
        my={my}
        maxWidth={{ md: "150px" }}
        width="100%"
        h={20}
        display="block"
        disabled={disableSubmitButton}
        onClick={onSubmit}
        variant={"amsterdam"}
        fontSize={{ base: "md", xl: "lg" }}
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
  const [key, setKey] = useState<string>();
  const [isInvalid, setIsInvalid] = useState(false);
  const [signUp, setsignUp] = useState(false);
  const { maciKey, setMaciKey } = useDappState();
  const [searchParams] = useSearchParams();
  const { i18n, t } = useTranslation();
  const toast = useToast();

  const currLang = i18n.language;

  const isValidMaciKey = useMemo(() => {
    return isMaciPrivKey(maciKey);
  }, [maciKey]);

  const { provider, address, isConnected } = useWallet();
  const handleInputChange = (e) => {
    setKey(String(e.target.value).trim());
  };

  const handleComplete = (value: string) => {
    console.log("complete");
    try {
      if (isMaciPrivKey(value)) {
        setMaciKey(value);

        toast({
          title: t("New Maci Key"),
          description: t(
            "You have updated your MACI key, and are registered to vote."
          ),
          status: "success",
          duration: 6000,
          isClosable: true,
        });
        console.log("changed");
        console.log(new Keypair(PrivKey.unserialize(value)).pubKey.serialize());
      } else {
        throw new Error("Invalid MACI key");
      }
    } catch (e) {
      toast({
        title: t("Invalid Maci Key"),
        description: t(
          "The MACI Key you have provided is either incorrect or not registered"
        ),
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      console.log(e.message);
    }
  };

  const numChars = useMemo(() => {
    if (key) {
      return key.length;
    }
  }, [key]);
  const isError = useMemo(() => {
    return key && !isMaciPrivKey(key);
  }, [key]);

  const handleSubmitMaciChange = (event) => {
    event.preventDefault();
    handleComplete(key);
  };

  useEffect(() => {
    if (maciKey) {
      setKey(maciKey);
    }
  }, [setKey, maciKey]);

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

  const disableSubmitButton = !isConnected || !isValidMaciKey || txLoading;

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
    console.log(isMaciPrivKey(maciKey));
    const signer = provider.getSigner(address);
    const grantRoundAddress = "0xab787044caefa1b0A89Fc9e17cA22C63aD3C5C82";

    const grantRound = new ethers.Contract(
      grantRoundAddress,
      Jubjub__factory.abi,
      signer
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
          let userStateIndex: number;
          let nonce: number;
          let voteWeight: number;

          if (isMaciPrivKey(maciKey)) {
            maciKeyPair = new Keypair(PrivKey.unserialize(maciKey));
            serializedMaciPublicKey = maciKeyPair.pubKey.serialize();
            console.log("serializedMaciPublicKey", serializedMaciPublicKey);
            userStateIndex = 2;
            console.log("stateIndex", userStateIndex);
            nonce = index;
            voteWeight = votes[index];
          }
          if (isMaciPrivKey(maciKey)) {
            console.log("User is registered, signing ballot with private key");
            const coordinatorKey = PubKey.unserialize(
              "macipk.ec4173e95d2bf03100f4c694d5c26ba6ab9817c0a5a0df593536a8ee2ec7af04"
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

    for (const [message, encPubKey] of txData) {
      messages.push(message);
      encPubKeys.push(encPubKey);
    }

    console.log(messages);
    console.log(encPubKeys);
    try {
      const gasPrice = await provider.getGasPrice();
      const gasLimit = ethers.utils.hexlify(10000000);
      const signer = provider.getSigner(address);

      const tx = await grantRound.connect(signer).publishMessageBatch(
        messages.reverse().map((msg) => msg.asContractParam()),
        encPubKeys.reverse().map((key) => key.asContractParam()),
        { gasPrice: gasPrice, gasLimit }
      );
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
  };

  const handleSingUp = async () => {
    let { data: whitelist, error } = await supabase
      .from("whitelist")
      .select("maci_public")
      .eq("eoa_address", address);

    console.log(whitelist);
    console.log(whitelist.length);
    if (whitelist.length < 1) {
      const signer = provider.getSigner(address);
      const ticketAddress = "0xC1d45AEa7107c2295ca694fcD1AD11823bC75dC6";
      const wallet = new Keypair();

      const alchemy = new Alchemy(settings);
      const result = await alchemy.nft.getNftsForOwner(address, {
        contractAddresses: [ticketAddress],
      });
      console.log(result);
      if (result.ownedNfts.length < 1) {
        toast({
          title: "Wallet doesn't have a ticket",
          description: address,
          status: "error",
          isClosable: true,
        });
        setIsInvalid(true);
      } else {
        const tokenId = result.ownedNfts[0].tokenId;
        const privateKey = wallet.privKey.serialize();
        const publicKey = wallet.pubKey.serialize();
        const _maciPK = PubKey.unserialize(publicKey).asContractParam();
        console.log(privateKey, publicKey, _maciPK);

        const _signUpGatekeeperData = utils.defaultAbiCoder.encode(
          ["uint256"],
          [tokenId]
        );
        const _initialVoiceCreditProxyData = utils.defaultAbiCoder.encode(
          ["uint256"],
          [0]
        );
        console.log(privateKey);
        let { data } = await supabase
          .from("whitelist")
          .insert([
            {
              eoa_address: address,
              maci_public: publicKey,
              maci_private: privateKey,
            },
          ])
          .select();
        console.log(data);

        let JubjubTemplateFactory: Jubjub__factory;
        let libs: JubjubLibraryAddresses;
        libs = {
          ["contracts/poseidon/PoseidonT6.sol:PoseidonT6"]:
            "0xb40577bBaB20F9083a20378d36fBcc05B8cFbE69",
          ["contracts/poseidon/PoseidonT5.sol:PoseidonT5"]:
            "0x73ec5c589bdFfCB3DcBbCA8De290a1fCe9092d4C",
          ["contracts/poseidon/PoseidonT3.sol:PoseidonT3"]:
            "0x99E8C06aC9cb81BdE90336919bdD525aB67d0Ef0",
          ["contracts/poseidon/PoseidonT4.sol:PoseidonT4"]:
            "0x158349daACE85AA6b5A1a9e39B6aFD45A7Cc2fc1",
        };
        JubjubTemplateFactory = new Jubjub__factory(libs, signer);
        const jubjubFactory = new ethers.Contract(
          "0xC5c6aB3F9105A509Db8b024F354707B563231Dc1",
          JubjubFactory__factory.abi,
          signer
        );
        const jubjubInstance = JubjubTemplateFactory.attach(
          await jubjubFactory.currentJubjub()
        );
        console.log(await jubjubFactory.currentJubjub());
        console.log(await jubjubInstance.signUpsOpen());
        const tx = await jubjubInstance.signUp(
          _maciPK,
          _signUpGatekeeperData,
          _initialVoiceCreditProxyData,
          {
            gasLimit: utils.hexlify(10000000),
          }
        );
        await tx.wait();
        console.log(tx);
        setsignUp(true);
        setMaciKey(privateKey);
        toast({
          title: "Wallet SignUp Success",
          description: address,
          status: "success",
          isClosable: true,
        });
      }
    } else {
      let { data: whitelist, error } = await supabase
        .from("whitelist")
        .select("maci_private")
        .eq("eoa_address", address);
      setMaciKey(whitelist[0].maci_private);
      setsignUp(true);
      toast({
        title: "Already SignUp",
        description: address,
        status: "info",
        isClosable: true,
      });
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
      overflowY="scroll"
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
      <Container style={{ marginTop: 92, maxWidth: 1042 }}>
        {colorModeSwitch ? (
          <Flex w="full" alignItems="center" flexDirection="column">
            <Heading w="full">
              <AspectRatio
                ratio={1}
                w="200px"
                h="200px"
                overflow="hidden"
                alignItems={"flex-start"}
                justifyContent={"flex-start"}
                flexDir={"row"}
              >
                <Hero />
              </AspectRatio>
            </Heading>

            <MagikButton borderRadius={"3px"} mt={6} />
          </Flex>
        ) : (
          <Flex w="full" alignItems="center" flexDirection="column">
            <Heading w="full">
              <AspectRatio
                ratio={24 / 4}
                w="full"
                overflow="hidden"
                alignItems={"flex-start"}
                justifyContent={"flex-start"}
                flexDir={"row"}
              >
                <Hero />
              </AspectRatio>
            </Heading>

            <MagikButton borderRadius={"8px"} mt={6} />
          </Flex>
        )}

        <VStack spacing={2} alignItems="flex-start" w="full">
          <Heading style={{ marginTop: 56 }} textAlign={{ base: "center" }}>
            Voting Ballot
          </Heading>
          <BallotExplainer />
          <Heading style={{ marginTop: 56 }} textAlign={{ base: "center" }}>
            {t("VOICE CREDIT BALANCE")}: {voiceCreditBalance}
          </Heading>
          <Text px={"1px"}>
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
              variant="amsterdam"
              fontSize={{ base: "lg", xl: "xl" }}
              w="full"
              to={`/?${searchParams.toString()}`}
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
          <Flex w="full" alignItems="center" justifyContent="space-between">
            <Heading textAlign={{ base: "center" }}>
              {t("BALLOT (MACI) PASSPHRASE")}
            </Heading>
          </Flex>

          <Grid
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
          >
            <GridItem colSpan={12} rowSpan={2}>
              <Text textAlign="justify">
                {t(
                  "The MACI (Minimum Anti-Collision Infrastructure) uses zero-knowledge proofs as a protection against censorship and collisions in blockchain voting (read more about MACI on this page)."
                )}{" "}
                {t(
                  "Each voter gets a pseudo-random MACI key, which is used to encrypt and validate your votes. This is the only way to vote in the round, and it can be used to change your vote at any time while the round is active, so keep it safe and don't share it."
                )}{" "}
                {t("'Not your MACI, not your vote'.")}{" "}
                {t(
                  "Keep it safe! Anyone who logs in with your MACI key will be able to vote on your behalf - and even invalidate your previous votes. Thanks to your vote, community projects can access funds to continue building.  Your vote matters, make it count."
                )}
              </Text>
            </GridItem>

            {/* <GridItem colSpan={{ base: 1, md: 2 }} w={{ base: "full", md: "90%" }} m={{ base: "32px auto 0 auto", md: "auto" }}>
                <SubmitBallotButton disableSubmitButton={disableSubmitButton} isConnected={isConnected} onSubmit={handleSubmit} t={t} />
              </GridItem>
           */}
          </Grid>
          {!signUp ? (
            <Button
              variant="amsterdam"
              fontSize={{ base: "lg", xl: "xl" }}
              type="submit"
              w="full"
              mt={6}
              onClick={handleSingUp}
              alignItems="center"
            >
              {t("SignUp")}
            </Button>
          ) : (
            <></>
          )}

          {signUp ? (
            <>
              <form style={{ width: "100%" }}>
                <FormControl
                  w="full"
                  display={{ base: "flex", md: "block" }}
                  flexDir={{ base: "column" }}
                  alignItems={{ base: "center" }}
                  isInvalid={isError}
                  variant="floating"
                  id="key"
                  isRequired
                  mt={{ base: 12 }}
                >
                  <Button
                    variant="amsterdam"
                    fontSize={{ base: "lg", xl: "xl" }}
                    type="submit"
                    w="full"
                    mt={6}
                    alignItems="center"
                  >
                    {t("SAVE")}
                  </Button>
                </FormControl>
                <SubmitBallotButton
                  disableSubmitButton={disableSubmitButton}
                  isConnected={isConnected}
                  my={6}
                  onSubmit={handleSubmit}
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
