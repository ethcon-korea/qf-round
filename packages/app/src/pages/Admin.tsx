/* eslint-disable no-useless-computed-key */
import React, { useState } from "react";
import {
  Button,
  Heading,
  Flex,
  VStack,
  Container,
  useColorModeValue,
  Text,
} from "@chakra-ui/react";
import { useToast } from "@chakra-ui/react";
import { useWallet } from "@qfi/hooks";
import { BigNumber, utils, Contract } from "ethers";

import { PoseidonT3__factory } from "../typechain/factories/contracts/poseidon/PoseidonT3__factory";
import { PoseidonT4__factory } from "../typechain/factories/contracts/poseidon/PoseidonT4__factory";
import { PoseidonT5__factory } from "../typechain/factories/contracts/poseidon/PoseidonT5__factory";
import { PoseidonT6__factory } from "../typechain/factories/contracts/poseidon/PoseidonT6__factory";
import { PoseidonT3 } from "../typechain/contracts/poseidon/PoseidonT3";
import { PoseidonT4 } from "../typechain/contracts/poseidon/PoseidonT4";
import { PoseidonT5 } from "../typechain/contracts/poseidon/PoseidonT5";
import { PoseidonT6 } from "../typechain/contracts/poseidon/PoseidonT6";

import { JubjubFactory } from "../typechain/contracts/JubjubFactory";
import {
  JubjubFactoryLibraryAddresses,
  JubjubFactory__factory,
} from "../typechain/factories/contracts/JubjubFactory__factory";
import {
  Jubjub__factory,
  JubjubLibraryAddresses,
} from "../typechain/factories/contracts/Jubjub__factory";
import { Jubjub as JJ } from "../typechain/contracts/Jubjub";

import { SimpleHackathon__factory } from "../typechain/factories/contracts/flavors/SimpleHackathon__factory";
import { SimpleHackathon } from "../typechain/contracts/flavors/SimpleHackathon";
import { SignUpNFTGatekeeper__factory } from "../typechain/factories/contracts/flavors/SignUpNFTGatekeeper__factory";
import { SignUpNFTGatekeeper } from "../typechain/contracts/flavors/SignUpNFTGatekeeper";

import { Keypair as MaciKeyPair } from "../jubjublib/index";
import { PubKey } from "../jubjublib/domainobjs/domainobjs";

export const Admin = () => {
  const { provider, address, isConnected } = useWallet();
  const color = useColorModeValue("gray.800", "gray.700");
  const toast = useToast();

  const [step, setStep] = useState(0);
  const [loading, setLoading] = useState(false);

  const [poseidonT3, setT3] = useState<PoseidonT3>();
  const [poseidonT4, setT4] = useState<PoseidonT4>();
  const [poseidonT5, setT5] = useState<PoseidonT5>();
  const [poseidonT6, setT6] = useState<PoseidonT6>();

  const [jubjubFactory, setJubjubFactory] = useState<JubjubFactory>();
  const [jubjub, setJubjub] = useState<JJ>();

  const getProvider = () => {
    return provider;
  };

  const getSigner = () => {
    if (!provider) {
      return "no-signer";
    }
    return address;
  };

  const handleT2Deploy = async () => {
    const deployer = provider.getSigner(address);
    let t3: PoseidonT3;
    let t4: PoseidonT4;
    let t5: PoseidonT5;
    let t6: PoseidonT6;

    const PoseidonT3Factory = new PoseidonT3__factory(deployer);
    const PoseidonT4Factory = new PoseidonT4__factory(deployer);
    const PoseidonT5Factory = new PoseidonT5__factory(deployer);
    const PoseidonT6Factory = new PoseidonT6__factory(deployer);

    t3 = await PoseidonT3Factory.deploy();
    setT3(t3);
    toast({
      title: "PoseidonT3 Deployed",
      description: t3.address,
      status: "success",
      duration: 9000,
      isClosable: true,
    });
    console.log(t3);
    await new Promise((resolve) => setTimeout(resolve, 1300));
    console.log("waiting for tx to be mined");

    t4 = await PoseidonT4Factory.deploy();
    setT4(t4);
    toast({
      title: "PoseidonT4 Deployed",
      description: t4.address,
      status: "success",
      duration: 9000,
      isClosable: true,
    });
    console.log(t4);
    await new Promise((resolve) => setTimeout(resolve, 1300));
    console.log("waiting for tx to be mined");

    t5 = await PoseidonT5Factory.deploy();
    setT5(t5);
    toast({
      title: "PoseidonT5 Deployed",
      description: t5.address,
      status: "success",
      duration: 9000,
      isClosable: true,
    });
    console.log(t5);
    await new Promise((resolve) => setTimeout(resolve, 1300));
    console.log("waiting for tx to be mined");

    t6 = await PoseidonT6Factory.deploy();
    setT6(t6);
    toast({
      title: "PoseidonT6 Deployed",
      description: t4.address,
      status: "success",
      duration: 9000,
      isClosable: true,
    });
    await new Promise((resolve) => setTimeout(resolve, 10000));
    console.log("waiting for tx to be mined");
    console.log(t6);
  };
  const handleFactoryDeploy = async () => {
    const factoryLibs: JubjubFactoryLibraryAddresses = {
      ["contracts/poseidon/PoseidonT5.sol:PoseidonT5"]: poseidonT5.address,
      ["contracts/poseidon/PoseidonT6.sol:PoseidonT6"]: poseidonT6.address,
      ["contracts/poseidon/PoseidonT4.sol:PoseidonT4"]: poseidonT4.address,
      ["contracts/poseidon/PoseidonT3.sol:PoseidonT3"]: poseidonT3.address,
      ["contracts/AccQueue.sol:PoseidonT3"]: poseidonT3.address,
      ["contracts/AccQueue.sol:PoseidonT6"]: poseidonT6.address,
    };
    const deployer = provider.getSigner(address);
    let jubjubFactory: JubjubFactory;

    const jubjubFactoryFactory = new JubjubFactory__factory(
      factoryLibs,
      deployer
    );
    jubjubFactory = await jubjubFactoryFactory.deploy();
    setJubjubFactory(jubjubFactory);
    toast({
      title: "JubjubFactory Deployed",
      description: jubjubFactory.address,
      status: "success",
      duration: 9000,
      isClosable: true,
    });
    await new Promise((resolve) => setTimeout(resolve, 10000));
    console.log("waiting for tx to be mined");
    console.log(jubjubFactory);
  };
  const handleCheckDeploy = async () => {
    const deployer = provider.getSigner(address);
    const NFThackerthonTicket = "0xC1d45AEa7107c2295ca694fcD1AD11823bC75dC6";
    let SignUpNFTGatekeeperFactory: SignUpNFTGatekeeper__factory;
    let SignUpNFTGatekeeper: SignUpNFTGatekeeper;

    let JubjubTemplateFactory: Jubjub__factory;
    let libs: JubjubLibraryAddresses;
    libs = {
      ["contracts/poseidon/PoseidonT6.sol:PoseidonT6"]: poseidonT6.address,
      ["contracts/poseidon/PoseidonT5.sol:PoseidonT5"]: poseidonT5.address,
      ["contracts/poseidon/PoseidonT3.sol:PoseidonT3"]: poseidonT3.address,
      ["contracts/poseidon/PoseidonT4.sol:PoseidonT4"]: poseidonT4.address,
    };
    JubjubTemplateFactory = new Jubjub__factory(libs, deployer);

    SignUpNFTGatekeeperFactory = new SignUpNFTGatekeeper__factory(deployer);
    SignUpNFTGatekeeper = await SignUpNFTGatekeeperFactory.deploy(
      NFThackerthonTicket,
      99
    );
    await SignUpNFTGatekeeper.deployed();
    console.log("NFTGateKeeper", SignUpNFTGatekeeper);

    //NOTE: Deploy Jubjub Instance
    // We need a sign-up gatekeeper here
    const tx = await jubjubFactory.deployJubjub(
      "0xDEADBEEF00000000000000000000000000000000000000000000000000000000",
      SignUpNFTGatekeeper.address,
      SignUpNFTGatekeeper.address
    );
    console.log(tx);
    await tx.wait();
    // sunchronous timeout to wait for the tx to be mined

    await new Promise((resolve) => setTimeout(resolve, 10000));
    console.log("waiting for tx to be mined");
    const jubjubInstance = JubjubTemplateFactory.attach(
      await jubjubFactory.currentJubjub()
    );
    setJubjub(jubjubInstance);

    console.log("jubjub", jubjubInstance);
    console.log(await jubjubInstance.hash(0, 0));
    console.log("signUpsOpen:", await jubjubInstance.signUpsOpen());
    const tx2 = await SignUpNFTGatekeeper.setMaciInstance(
      jubjubInstance.address
    );
    console.log(tx2);
    tx2.wait();
  };

  const handleStartVotingRound = async () => {
    const deployer = provider.getSigner(address);

    let JubjubTemplateFactory: Jubjub__factory;
    let libs: JubjubLibraryAddresses;
    libs = {
      ["contracts/poseidon/PoseidonT6.sol:PoseidonT6"]:
        "0x6073Da004305af93A9deBa43F6490Df8ed6C43Ec",
      ["contracts/poseidon/PoseidonT5.sol:PoseidonT5"]:
        "0xE9334D82EF3a03A9677e1B7463B497B19aA2D5b0",
      ["contracts/poseidon/PoseidonT3.sol:PoseidonT3"]:
        "0x55B28e9b048BFFb6BF8d05b00E071C78450A429b",
      ["contracts/poseidon/PoseidonT4.sol:PoseidonT4"]:
        "0xf6c14e70D41f322B69Ada8C53daF9593aC165E08",
    };
    JubjubTemplateFactory = new Jubjub__factory(libs, deployer);

    const jubjubInstance = JubjubTemplateFactory.attach(
      "0x53c63d77B27dDdA8B0bc001ceDBee245520D8fd1"
    );
    setJubjub(jubjubInstance);

    console.log(jubjubInstance);

    const _coordinatorPubkey = PubKey.unserialize(
      "macipk.9347da6e39ff8e40ff7087f56926c45c420cb016ac3c668bca6a979d7bbd268a"
    ).asContractParam();
    console.log("coordinator", _coordinatorPubkey);

    // vote opens for 14 days
    const tx = await jubjubInstance.startVoting(
      BigNumber.from(3),
      BigNumber.from(60 * 60 * 24 * 14),
      _coordinatorPubkey
    );
    console.log(tx);
    await tx.wait();

    console.log((await jubjubInstance.hash(0, 0)).toString());
    console.log(
      BigNumber.from(
        "0x2098f5fb9e239eab3ceac3f27b81e481dc3124d55ffed523a839ee8446b64864"
      ).toString()
    );
  };

  const handleStartPresetVotingRound = async () => {
    try {
      const deployer = provider.getSigner(address);

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
      JubjubTemplateFactory = new Jubjub__factory(libs, deployer);

      const jubjubInstance = JubjubTemplateFactory.attach(
        "0xab787044caefa1b0A89Fc9e17cA22C63aD3C5C82"
      );
      setJubjub(jubjubInstance);

      console.log("jubjubInstance", jubjubInstance);

      const _coordinatorPubkey = PubKey.unserialize(
        "macipk.ec4173e95d2bf03100f4c694d5c26ba6ab9817c0a5a0df593536a8ee2ec7af04"
      ).asContractParam();
      console.log(_coordinatorPubkey);
      // console.log(_coordinatorPubkey);
      const tx = await jubjubInstance.startVoting(
        BigNumber.from(3),
        BigNumber.from(60 * 60 * 24 * 14),
        _coordinatorPubkey
      );
      console.log(tx);

      await tx.wait();

      console.log("hash:", (await jubjubInstance.hash(0, 0)).toString());
      console.log(
        "hashShouldEq:",
        BigNumber.from(
          "0x2098f5fb9e239eab3ceac3f27b81e481dc3124d55ffed523a839ee8446b64864"
        ).toString()
      );
    } catch (e) {
      console.log(e);
    }
  };

  const handleSignUp = async () => {
    const wallet = new MaciKeyPair();

    // ###################
    // Prepare Signup
    // ###################

    // Extract keys.
    const privateKey = wallet.privKey.serialize();
    const publicKey = wallet.pubKey.serialize();

    console.log("gneerated keys");
    console.log("privateKey: ", privateKey);
    console.log("publicKey: ", publicKey);

    const _maciPK = PubKey.unserialize(publicKey).asContractParam();
    console.log("unserialize publicKey: ", _maciPK);
    const _signUpGatekeeperData = utils.defaultAbiCoder.encode(
      ["uint256"],
      [0]
    );
    const _initialVoiceCreditProxyData = utils.defaultAbiCoder.encode(
      ["uint256"],
      [0]
    );

    const deployer = provider.getSigner(address);
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
    JubjubTemplateFactory = new Jubjub__factory(libs, deployer);

    // ###################
    // Please update Jubjub address here
    // ###################
    const jubjubInstance = JubjubTemplateFactory.attach(
      "<Jubjub address here>"
    );

    // ###################
    // Do Signup
    // ###################
    const tx = await jubjubInstance.signUp(
      _maciPK,
      _signUpGatekeeperData,
      _initialVoiceCreditProxyData,
      {
        gasLimit: utils.hexlify(10000000),
      }
    );
    console.log("tx receipt: ", await tx.wait());

    // const signer = provider.getSigner(address);
  };

  // const [jubjubFactory, setjubjubFactory] = React.useState("");
  // const handleT4Deploy = () => {
  //   toast({
  //     title: "PoseidonT4 Deployed",
  //     description: poseidonT4,
  //     status: "success",
  //     duration: 9000,
  //     isClosable: true,
  //   });
  //   setT3("deployed");
  // };
  return (
    <Flex
      as="main"
      h="full"
      flex={1}
      borderRightColor={color}
      borderRightWidth={1}
      overflowY={"scroll"}
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
      <VStack spacing={0} w="full">
        <Container h="full" w="full" maxWidth="container.sm">
          <VStack mt={10} spacing={4} h="full" alignItems="flex-start">
            <Heading w="100%" textAlign={"center"} fontWeight="normal" mb="2%">
              Admin
            </Heading>
            <VStack>
              <Text>"Signer address: {getSigner()}"</Text>
              <Button
                onClick={async () => {
                  setStep(13);
                  setLoading(true);
                  await handleT2Deploy();
                  setLoading(false);
                  setStep(1);
                }}
                isDisabled={step !== 0}
                variant="amsterdam"
                w="100%"
              >
                Deploy Poseidon Libs
              </Button>
              <Button
                onClick={async () => {
                  setStep(13);
                  setLoading(true);
                  await handleFactoryDeploy();
                  setLoading(false);
                  setStep(2);
                }}
                isDisabled={step !== 1}
                variant="amsterdam"
                w="100%"
              >
                Deploy Admin Contract
              </Button>
              <Button
                onClick={async () => {
                  setStep(13);
                  setLoading(true);
                  await handleCheckDeploy();
                  setLoading(false);
                  setStep(3);
                }}
                isDisabled={step !== 2}
                variant="amsterdam"
                w="100%"
              >
                Deploy Round (but dont start voting)
              </Button>
              <Button
                onClick={async () => {
                  setLoading(true);
                  await handleStartVotingRound();
                  setLoading(false);
                }}
                // isDisabled={step !== 3}
                variant="amsterdam"
                w="100%"
              >
                Start Voting
              </Button>

              <VStack>
                {loading ? (
                  <Heading>Processing transactions...</Heading>
                ) : (
                  <></>
                )}

                <Text>Current PoseidonT3: {poseidonT3?.address}</Text>
                <Text>Current PoseidonT4: {poseidonT4?.address}</Text>
                <Text>Current PoseidonT5: {poseidonT5?.address}</Text>
                <Text>Current PoseidonT6: {poseidonT6?.address}</Text>
                <Text>Current JubjubFactory: {jubjubFactory?.address}</Text>
                <Text>Current Jubjub: {jubjub?.address}</Text>
              </VStack>
              <Button
                onClick={async () => {
                  await handleSignUp();
                }}
                variant="amsterdam"
                w="100%"
              >
                Signup one user
              </Button>
            </VStack>
          </VStack>
        </Container>
      </VStack>
    </Flex>
  );
};
