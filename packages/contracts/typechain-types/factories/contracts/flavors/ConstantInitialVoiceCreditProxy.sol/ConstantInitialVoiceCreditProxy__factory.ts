/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  BigNumberish,
  Overrides,
} from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../common";
import type {
  ConstantInitialVoiceCreditProxy,
  ConstantInitialVoiceCreditProxyInterface,
} from "../../../../contracts/flavors/ConstantInitialVoiceCreditProxy.sol/ConstantInitialVoiceCreditProxy";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_balance",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "getVoiceCredits",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b506040516101d23803806101d283398101604081905261002f91610037565b600055610050565b60006020828403121561004957600080fd5b5051919050565b6101738061005f6000396000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c8063b36543a914610030575b600080fd5b61004661003e36600461006e565b505060005490565b60405190815260200160405180910390f35b634e487b7160e01b600052604160045260246000fd5b6000806040838503121561008157600080fd5b82356001600160a01b038116811461009857600080fd5b915060208301356001600160401b03808211156100b457600080fd5b818501915085601f8301126100c857600080fd5b8135818111156100da576100da610058565b604051601f8201601f19908116603f0116810190838211818310171561010257610102610058565b8160405282815288602084870101111561011b57600080fd5b826020860160208301376000602084830101528095505050505050925092905056fea264697066735822122026e8e89f3ba02877b889f8a77a3ff8c399f623fb771f05dc6d67d3954942dc6264736f6c634300080a0033";

type ConstantInitialVoiceCreditProxyConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ConstantInitialVoiceCreditProxyConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ConstantInitialVoiceCreditProxy__factory extends ContractFactory {
  constructor(...args: ConstantInitialVoiceCreditProxyConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _balance: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ConstantInitialVoiceCreditProxy> {
    return super.deploy(
      _balance,
      overrides || {}
    ) as Promise<ConstantInitialVoiceCreditProxy>;
  }
  override getDeployTransaction(
    _balance: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_balance, overrides || {});
  }
  override attach(address: string): ConstantInitialVoiceCreditProxy {
    return super.attach(address) as ConstantInitialVoiceCreditProxy;
  }
  override connect(signer: Signer): ConstantInitialVoiceCreditProxy__factory {
    return super.connect(signer) as ConstantInitialVoiceCreditProxy__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ConstantInitialVoiceCreditProxyInterface {
    return new utils.Interface(
      _abi
    ) as ConstantInitialVoiceCreditProxyInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ConstantInitialVoiceCreditProxy {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as ConstantInitialVoiceCreditProxy;
  }
}
