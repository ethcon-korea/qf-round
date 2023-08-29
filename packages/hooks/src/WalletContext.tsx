import { SafeAppWeb3Modal } from "@gnosis.pm/safe-apps-web3modal";
import { utils, providers, ethers } from "ethers";
import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { ICoreOptions } from "web3modal";
import { IProviderOptions } from "web3modal";
import WalletConnectProvider from "@walletconnect/web3-provider";
import { Alchemy, Network } from "alchemy-sdk";
import { ALCHEMY_KEY, SUPABASE_SERVICE_KEY } from "./key";
import { Libs, TicketAddress, JubjubFactoryAddress } from "./Address";
import { switchChainOnMetaMask } from "./metamask";
import { createClient } from "@supabase/supabase-js";
import {
  Keypair,
  PubKey,
  PrivKey,
  PCommand,
  Message,
} from "./jubjublib/domainobjs/domainobjs";
import QRCodeModal from "@walletconnect/qrcode-modal";
import { JubjubFactory__factory } from "./typechain/factories/contracts/JubjubFactory__factory";
import { Jubjub__factory } from "./typechain/factories/contracts/Jubjub__factory";

type WalletContextType = {
  provider: providers.Web3Provider | null | undefined;
  chainId: string | null | undefined;
  address: string | null | undefined;
  connectWallet: () => Promise<void>;
  disconnect: () => void;
  isConnecting: boolean;
  isConnected: boolean;
  isMetamask: boolean;
  isSignUp: boolean;
  isEligible: boolean;
  networks: NetworkConfig;
  signUp: () => Promise<void>;
  switchNetwork: (chainId: string) => void;
};

export const SUPPORTED_NETWORKS: NetworkConfig = {
  "0xa": {
    chainId: "0xa",
    name: "Optimism",
    symbol: "eth",
    explorer: "https://explorer.optimism.io",
    rpc: "https://opt-mainnet.g.alchemy.com/v2/meqnXZj3LOvK0IY4rt9SnAV7bDjh2OpV",
  },
  "0x64": {
    chainId: "0x64",
    name: "Gnosis Chain",
    symbol: "xDai",
    explorer: "https://blockscout.com/xdai/mainnet/",
    rpc: "http://localhost:8545",
  },
  "0x7a69": {
    chainId: "0x7a69",
    name: "Hardhat",
    symbol: "eth",
    explorer: "https://blockscout.com/xdai/mainnet/",
    rpc: "http://localhost:8545",
  },
};

export const providerOptions: IProviderOptions = {
  walletconnect: {
    package: WalletConnectProvider,
    options: {
      bridge: "https://bridge.benjioh5.com/",
      qrcodeModal: QRCodeModal,
      infuraId: "8043bb2cf99347b1bfadfb233c5325c0",
      rpc: {
        10: SUPPORTED_NETWORKS["0xa"].rpc,
        100: SUPPORTED_NETWORKS["0x64"].rpc,
        31337: SUPPORTED_NETWORKS["0x7a69"].rpc,
      },
    },
  },
  // .. Other providers
};
const isMaciPrivKey = (key: string): boolean => {
  if ((key.length === 71 || key.length === 70) && key.startsWith("macisk.")) {
    console.log("key is valid maci key");
    const pubKey = new Keypair(PrivKey.unserialize(key)).pubKey.serialize();
    return true;
  }

  return false;
};

const WalletContext = createContext<WalletContextType>({
  provider: null,
  chainId: null,
  address: null,
  connectWallet: async () => undefined,
  disconnect: () => undefined,
  isConnecting: true,
  isConnected: false,
  isMetamask: false,
  isSignUp: false,
  isEligible: null,
  networks: {},
  signUp: async () => undefined,
  switchNetwork: () => undefined,
});

type WalletStateType = {
  provider?: providers.Web3Provider | null;
  chainId?: string | null;
  address?: string | null;
};

export type NetworkConfig = {
  [chainId: string]: {
    chainId: string;
    name: string;
    symbol: string;
    explorer: string;
    rpc: string;
  };
};

const isMetamaskProvider = (
  provider: providers.Web3Provider | null | undefined
) => provider?.connection?.url === "metamask";

/**
 * @category Providers
 */
export const WalletProvider: React.FC<{
  web3modalOptions: Partial<ICoreOptions>;
  networks: NetworkConfig;
  defaultChainId?: string;

  handleAccountsChangedEvent?: (accounts: string[]) => void;
  handleChainChangedEvent?: (chainId: number) => void;
  handleConnectEvent?: (info: { chainId: number }) => void;
  handleDisconnectEvent?: (error: { code: number; message: string }) => void;
  handleErrorEvent?: (error: { code: string; message: string }) => void;
}> = ({
  children,
  web3modalOptions,
  networks,
  defaultChainId,
  handleAccountsChangedEvent,
  handleChainChangedEvent,
  handleConnectEvent,
  handleDisconnectEvent,
  handleErrorEvent,
}) => {
  const [{ provider, chainId, address }, setWalletState] =
    useState<WalletStateType>({});

  const isConnected: boolean = useMemo(
    () => !!provider && !!address && !!chainId,
    [provider, address, chainId]
  );

  const [isConnecting, setConnecting] = useState<boolean>(true);
  const [isSignUp, setSignUp] = useState<boolean>(null);
  const [isEligible, setEligible] = useState<boolean>(null);
  const isMetamask = useMemo(() => isMetamaskProvider(provider), [provider]);

  const getModal = () => {
    const modal = new SafeAppWeb3Modal(web3modalOptions);
    return modal;
  };

  const disconnect = async () => {
    const modal = getModal();
    modal.clearCachedProvider();
    setWalletState({});
  };

  const numberToHex = (number: number) => {
    return `0x${number.toString(16)}`;
  };

  const switchNetwork = async (_chainId: string | number) => {
    const chainId: string =
      typeof _chainId === "number" ? numberToHex(_chainId) : _chainId;
    if (!networks[chainId]) {
      throw new Error(`No network configuration for chainId: ${chainId}`);
    }
    if (!window.ethereum?.isMetaMask) {
      throw new Error("Switching chain is only supported in Metamask");
    }
    await switchChainOnMetaMask(networks, chainId);
  };

  const setWalletProvider = async (provider: any) => {
    const ethersProvider = new providers.Web3Provider(provider);
    let chainId: string =
      typeof provider.chainId === "number"
        ? numberToHex(provider.chainId)
        : provider.chainId;

    if (!networks[chainId]) {
      if (!defaultChainId) {
        handleErrorEvent &&
          handleErrorEvent({
            code: "UNSUPPORTED_NETWORK",
            message: `Network not supported, please switch to Gnosis Chain Network`,
          });
        return;
      }

      const success =
        isMetamaskProvider(ethersProvider) &&
        (await switchChainOnMetaMask(networks, defaultChainId));
      if (!success) {
        const error = {
          code: "UNSUPPORTED_NETWORK",
          message: `Network not supported, please switch to ${networks[defaultChainId].name}`,
        };
        handleErrorEvent && handleErrorEvent(error);
        return;
      }
      chainId = defaultChainId;
    }

    const signerAddress = await ethersProvider.getSigner().getAddress();
    setWalletState({
      provider: ethersProvider,
      chainId,
      address: signerAddress,
    });
  };

  const settings = {
    apiKey: ALCHEMY_KEY,
    network: Network.OPT_MAINNET,
  };
  const supabaseUrl = "https://lkrcjryaynygdvgtmumc.supabase.co";
  const supabaseKey = SUPABASE_SERVICE_KEY;
  const supabase = createClient(supabaseUrl, supabaseKey);

  const connectWallet = async () => {
    setEligible(null);
    setSignUp(null);
    try {
      setConnecting(true);
      const modal = getModal();
      const modalProvider = await modal.requestProvider();
      await setWalletProvider(modalProvider);

      const _isGnosisSafe = await modal.isSafeApp();

      if (!_isGnosisSafe) {
        modalProvider.on("accountsChanged", (accounts: string[]) => {
          disconnect();
          handleAccountsChangedEvent && handleAccountsChangedEvent(accounts);
        });
        modalProvider.on("chainChanged", (chainId: number) => {
          handleChainChangedEvent && handleChainChangedEvent(chainId);
          if (!networks[modalProvider.chainId]) {
            disconnect();
            handleErrorEvent &&
              handleErrorEvent({
                code: "UNSUPPORTED_NETWORK",
                message: `You have switched to an unsupported chain, Disconnecting from Metamask...`,
              });
          }
          modalProvider.on("connect", (info: { chainId: number }) => {
            handleConnectEvent && handleConnectEvent(info);
          });
          modalProvider.on(
            "disconnect",
            (error: { code: number; message: string }) => {
              handleDisconnectEvent && handleDisconnectEvent(error);
            }
          );
          // update wallet provider once the chain is changed
          setWalletProvider(modalProvider);
        });
      }
    } catch (web3Error) {
      // eslint-disable-next-line no-console
      console.error(web3Error);
      disconnect();
    } finally {
      setConnecting(false);
    }

    if (!isConnected) {
      const modal = getModal();
      const modalProvider = await modal.requestProvider();
      const ethersProvider = new providers.Web3Provider(modalProvider);
      const signer = ethersProvider.getSigner();
      const signerAddress = await signer.getAddress();
      let { data: whitelist, error } = await supabase
        .from("whitelist")
        .select("maci_public")
        .eq("eoa_address", signerAddress);

      console.log(whitelist);
      console.log(whitelist.length);
      if (whitelist.length == 0) {
        const alchemy = new Alchemy(settings);
        const result = await alchemy.nft.getNftsForOwner(signerAddress, {
          contractAddresses: [TicketAddress],
        });
        console.log(result);
        if (result.ownedNfts.length >= 1) {
          setEligible(true);
          setSignUp(false);
        } else {
          setEligible(false);
          setSignUp(false);
        }
      } else {
        setEligible(true);
        setSignUp(true);
      }
    }
  };

  const signUp = async () => {
    const modal = getModal();
    const modalProvider = await modal.requestProvider();
    const ethersProvider = new providers.Web3Provider(modalProvider);
    const signer = ethersProvider.getSigner();
    const signerAddress = await signer.getAddress();

    const alchemy = new Alchemy(settings);
    const result = await alchemy.nft.getNftsForOwner(signerAddress, {
      contractAddresses: [TicketAddress],
    });
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
    console.log(await jubjubFactory.currentJubjub());
    console.log(await jubjubInstance.signUpsOpen());
    var wallet;
    while (true) {
      try {
        wallet = new Keypair();
        break;
      } catch (e) {
        console.error("Error:", e);
      }
    }
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
    try {
      isMaciPrivKey(privateKey);
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
      let { data } = await supabase
        .from("whitelist")
        .insert([
          {
            eoa_address: signerAddress,
            maci_public: publicKey,
            maci_private: privateKey,
          },
        ])
        .select();
      setSignUp(true);
    } catch (e) {
      console.log("Error: ", e);
    }
  };

  useEffect(() => {
    const load = async () => {
      /**
       * Only try to connect when metamask is unlocked.
       * This prevents unnecessary popup on page load.
       */
      const isMetamaskUnlocked =
        (await window.ethereum?._metamask?.isUnlocked()) ?? false;
      const modal = getModal();
      const _isGnosisSafe = await modal.isSafeApp();

      if (
        isMetamaskUnlocked &&
        (_isGnosisSafe || web3modalOptions.cacheProvider)
      ) {
        await connectWallet();
      } else {
        setConnecting(false);
      }
    };
    load();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <WalletContext.Provider
      value={{
        provider,
        address,
        chainId,
        connectWallet,
        isConnected,
        isConnecting,
        disconnect,
        isMetamask,
        isSignUp,
        isEligible,
        networks,
        signUp,
        switchNetwork,
      }}
    >
      {children}
    </WalletContext.Provider>
  );
};

export const formatAddress = (
  address: string | null | undefined,
  ensName?: string | null,
  chars = 5
): string => {
  if (ensName) return ensName;
  else if (address)
    return `${address.substring(0, chars)}...${address.substring(
      address.length - chars
    )}`;
  else return "";
};

/**
 * Gets the wallet context from the wallet provider
 * @category Hooks
 */
export const useWallet = (): WalletContextType => useContext(WalletContext);

export const nameToChainId = (name: string): string | undefined => {
  switch (name) {
    case "xdai":
      return "0x64";
    case "polygon":
      return "0x89";
    case "Mainnet":
      return "0x1";
    case "Hardhat":
      return "0x7a69";
    case "Polygon":
      return "0x89";
    case "Mumbai Testnet":
      return "0x13881";
    default:
      return undefined;
  }
};

export type IWeb3modalOptions = {
  cacheProvider: boolean;
  providerOptions: IProviderOptions;
  theme: string;
};
export const web3modalOptions = {
  cacheProvider: true,
  providerOptions,
  theme: "dark",
};

// MIT License

// Copyright (c) 2022 Raid Guild

// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:

// The above copyright notice and this permission notice shall be included in all
// copies or substantial portions of the Software.

// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
// SOFTWARE.
