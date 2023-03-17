/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../common";

export declare namespace Pairing {
  export type G1PointStruct = {
    x: PromiseOrValue<BigNumberish>;
    y: PromiseOrValue<BigNumberish>;
  };

  export type G1PointStructOutput = [BigNumber, BigNumber] & {
    x: BigNumber;
    y: BigNumber;
  };

  export type G2PointStruct = {
    x: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>];
    y: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>];
  };

  export type G2PointStructOutput = [
    [BigNumber, BigNumber],
    [BigNumber, BigNumber]
  ] & { x: [BigNumber, BigNumber]; y: [BigNumber, BigNumber] };
}

export declare namespace VkRegistry {
  export type VerifyingKeyStruct = {
    alpha1: Pairing.G1PointStruct;
    beta2: Pairing.G2PointStruct;
    gamma2: Pairing.G2PointStruct;
    delta2: Pairing.G2PointStruct;
    ic: Pairing.G1PointStruct[];
  };

  export type VerifyingKeyStructOutput = [
    Pairing.G1PointStructOutput,
    Pairing.G2PointStructOutput,
    Pairing.G2PointStructOutput,
    Pairing.G2PointStructOutput,
    Pairing.G1PointStructOutput[]
  ] & {
    alpha1: Pairing.G1PointStructOutput;
    beta2: Pairing.G2PointStructOutput;
    gamma2: Pairing.G2PointStructOutput;
    delta2: Pairing.G2PointStructOutput;
    ic: Pairing.G1PointStructOutput[];
  };
}

export interface VkRegistryInterface extends utils.Interface {
  functions: {
    "genProcessVkSig(uint256,uint256,uint256,uint256)": FunctionFragment;
    "genSubsidyVkSig(uint256,uint256,uint256)": FunctionFragment;
    "genTallyVkSig(uint256,uint256,uint256)": FunctionFragment;
    "getProcessVk(uint256,uint256,uint256,uint256)": FunctionFragment;
    "getProcessVkBySig(uint256)": FunctionFragment;
    "getSubsidyVk(uint256,uint256,uint256)": FunctionFragment;
    "getSubsidyVkBySig(uint256)": FunctionFragment;
    "getTallyVk(uint256,uint256,uint256)": FunctionFragment;
    "getTallyVkBySig(uint256)": FunctionFragment;
    "hasProcessVk(uint256,uint256,uint256,uint256)": FunctionFragment;
    "hasSubsidyVk(uint256,uint256,uint256)": FunctionFragment;
    "hasTallyVk(uint256,uint256,uint256)": FunctionFragment;
    "isProcessVkSet(uint256)": FunctionFragment;
    "isSubsidyVkSet(uint256)": FunctionFragment;
    "isTallyVkSet(uint256)": FunctionFragment;
    "owner()": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "setSubsidyKeys(uint256,uint256,uint256,((uint256,uint256),(uint256[2],uint256[2]),(uint256[2],uint256[2]),(uint256[2],uint256[2]),(uint256,uint256)[]))": FunctionFragment;
    "setVerifyingKeys(uint256,uint256,uint256,uint256,uint256,((uint256,uint256),(uint256[2],uint256[2]),(uint256[2],uint256[2]),(uint256[2],uint256[2]),(uint256,uint256)[]),((uint256,uint256),(uint256[2],uint256[2]),(uint256[2],uint256[2]),(uint256[2],uint256[2]),(uint256,uint256)[]))": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "genProcessVkSig"
      | "genSubsidyVkSig"
      | "genTallyVkSig"
      | "getProcessVk"
      | "getProcessVkBySig"
      | "getSubsidyVk"
      | "getSubsidyVkBySig"
      | "getTallyVk"
      | "getTallyVkBySig"
      | "hasProcessVk"
      | "hasSubsidyVk"
      | "hasTallyVk"
      | "isProcessVkSet"
      | "isSubsidyVkSet"
      | "isTallyVkSet"
      | "owner"
      | "renounceOwnership"
      | "setSubsidyKeys"
      | "setVerifyingKeys"
      | "transferOwnership"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "genProcessVkSig",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "genSubsidyVkSig",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "genTallyVkSig",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "getProcessVk",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "getProcessVkBySig",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "getSubsidyVk",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "getSubsidyVkBySig",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "getTallyVk",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "getTallyVkBySig",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "hasProcessVk",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "hasSubsidyVk",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "hasTallyVk",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "isProcessVkSet",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "isSubsidyVkSet",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "isTallyVkSet",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "setSubsidyKeys",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      VkRegistry.VerifyingKeyStruct
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "setVerifyingKeys",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      VkRegistry.VerifyingKeyStruct,
      VkRegistry.VerifyingKeyStruct
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [PromiseOrValue<string>]
  ): string;

  decodeFunctionResult(
    functionFragment: "genProcessVkSig",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "genSubsidyVkSig",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "genTallyVkSig",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getProcessVk",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getProcessVkBySig",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getSubsidyVk",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getSubsidyVkBySig",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getTallyVk", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getTallyVkBySig",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "hasProcessVk",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "hasSubsidyVk",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "hasTallyVk", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "isProcessVkSet",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isSubsidyVkSet",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isTallyVkSet",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setSubsidyKeys",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setVerifyingKeys",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;

  events: {
    "OwnershipTransferred(address,address)": EventFragment;
    "ProcessVkSet(uint256)": EventFragment;
    "SubsidyVkSet(uint256)": EventFragment;
    "TallyVkSet(uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ProcessVkSet"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "SubsidyVkSet"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "TallyVkSet"): EventFragment;
}

export interface OwnershipTransferredEventObject {
  previousOwner: string;
  newOwner: string;
}
export type OwnershipTransferredEvent = TypedEvent<
  [string, string],
  OwnershipTransferredEventObject
>;

export type OwnershipTransferredEventFilter =
  TypedEventFilter<OwnershipTransferredEvent>;

export interface ProcessVkSetEventObject {
  _sig: BigNumber;
}
export type ProcessVkSetEvent = TypedEvent<
  [BigNumber],
  ProcessVkSetEventObject
>;

export type ProcessVkSetEventFilter = TypedEventFilter<ProcessVkSetEvent>;

export interface SubsidyVkSetEventObject {
  _sig: BigNumber;
}
export type SubsidyVkSetEvent = TypedEvent<
  [BigNumber],
  SubsidyVkSetEventObject
>;

export type SubsidyVkSetEventFilter = TypedEventFilter<SubsidyVkSetEvent>;

export interface TallyVkSetEventObject {
  _sig: BigNumber;
}
export type TallyVkSetEvent = TypedEvent<[BigNumber], TallyVkSetEventObject>;

export type TallyVkSetEventFilter = TypedEventFilter<TallyVkSetEvent>;

export interface VkRegistry extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: VkRegistryInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    genProcessVkSig(
      _stateTreeDepth: PromiseOrValue<BigNumberish>,
      _messageTreeDepth: PromiseOrValue<BigNumberish>,
      _voteOptionTreeDepth: PromiseOrValue<BigNumberish>,
      _messageBatchSize: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    genSubsidyVkSig(
      _stateTreeDepth: PromiseOrValue<BigNumberish>,
      _intStateTreeDepth: PromiseOrValue<BigNumberish>,
      _voteOptionTreeDepth: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    genTallyVkSig(
      _stateTreeDepth: PromiseOrValue<BigNumberish>,
      _intStateTreeDepth: PromiseOrValue<BigNumberish>,
      _voteOptionTreeDepth: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getProcessVk(
      _stateTreeDepth: PromiseOrValue<BigNumberish>,
      _messageTreeDepth: PromiseOrValue<BigNumberish>,
      _voteOptionTreeDepth: PromiseOrValue<BigNumberish>,
      _messageBatchSize: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[VkRegistry.VerifyingKeyStructOutput]>;

    getProcessVkBySig(
      _sig: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[VkRegistry.VerifyingKeyStructOutput]>;

    getSubsidyVk(
      _stateTreeDepth: PromiseOrValue<BigNumberish>,
      _intStateTreeDepth: PromiseOrValue<BigNumberish>,
      _voteOptionTreeDepth: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[VkRegistry.VerifyingKeyStructOutput]>;

    getSubsidyVkBySig(
      _sig: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[VkRegistry.VerifyingKeyStructOutput]>;

    getTallyVk(
      _stateTreeDepth: PromiseOrValue<BigNumberish>,
      _intStateTreeDepth: PromiseOrValue<BigNumberish>,
      _voteOptionTreeDepth: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[VkRegistry.VerifyingKeyStructOutput]>;

    getTallyVkBySig(
      _sig: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[VkRegistry.VerifyingKeyStructOutput]>;

    hasProcessVk(
      _stateTreeDepth: PromiseOrValue<BigNumberish>,
      _messageTreeDepth: PromiseOrValue<BigNumberish>,
      _voteOptionTreeDepth: PromiseOrValue<BigNumberish>,
      _messageBatchSize: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    hasSubsidyVk(
      _stateTreeDepth: PromiseOrValue<BigNumberish>,
      _intStateTreeDepth: PromiseOrValue<BigNumberish>,
      _voteOptionTreeDepth: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    hasTallyVk(
      _stateTreeDepth: PromiseOrValue<BigNumberish>,
      _intStateTreeDepth: PromiseOrValue<BigNumberish>,
      _voteOptionTreeDepth: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    isProcessVkSet(
      _sig: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    isSubsidyVkSet(
      _sig: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    isTallyVkSet(
      _sig: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setSubsidyKeys(
      _stateTreeDepth: PromiseOrValue<BigNumberish>,
      _intStateTreeDepth: PromiseOrValue<BigNumberish>,
      _voteOptionTreeDepth: PromiseOrValue<BigNumberish>,
      _subsidyVk: VkRegistry.VerifyingKeyStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setVerifyingKeys(
      _stateTreeDepth: PromiseOrValue<BigNumberish>,
      _intStateTreeDepth: PromiseOrValue<BigNumberish>,
      _messageTreeDepth: PromiseOrValue<BigNumberish>,
      _voteOptionTreeDepth: PromiseOrValue<BigNumberish>,
      _messageBatchSize: PromiseOrValue<BigNumberish>,
      _processVk: VkRegistry.VerifyingKeyStruct,
      _tallyVk: VkRegistry.VerifyingKeyStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  genProcessVkSig(
    _stateTreeDepth: PromiseOrValue<BigNumberish>,
    _messageTreeDepth: PromiseOrValue<BigNumberish>,
    _voteOptionTreeDepth: PromiseOrValue<BigNumberish>,
    _messageBatchSize: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  genSubsidyVkSig(
    _stateTreeDepth: PromiseOrValue<BigNumberish>,
    _intStateTreeDepth: PromiseOrValue<BigNumberish>,
    _voteOptionTreeDepth: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  genTallyVkSig(
    _stateTreeDepth: PromiseOrValue<BigNumberish>,
    _intStateTreeDepth: PromiseOrValue<BigNumberish>,
    _voteOptionTreeDepth: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getProcessVk(
    _stateTreeDepth: PromiseOrValue<BigNumberish>,
    _messageTreeDepth: PromiseOrValue<BigNumberish>,
    _voteOptionTreeDepth: PromiseOrValue<BigNumberish>,
    _messageBatchSize: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<VkRegistry.VerifyingKeyStructOutput>;

  getProcessVkBySig(
    _sig: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<VkRegistry.VerifyingKeyStructOutput>;

  getSubsidyVk(
    _stateTreeDepth: PromiseOrValue<BigNumberish>,
    _intStateTreeDepth: PromiseOrValue<BigNumberish>,
    _voteOptionTreeDepth: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<VkRegistry.VerifyingKeyStructOutput>;

  getSubsidyVkBySig(
    _sig: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<VkRegistry.VerifyingKeyStructOutput>;

  getTallyVk(
    _stateTreeDepth: PromiseOrValue<BigNumberish>,
    _intStateTreeDepth: PromiseOrValue<BigNumberish>,
    _voteOptionTreeDepth: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<VkRegistry.VerifyingKeyStructOutput>;

  getTallyVkBySig(
    _sig: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<VkRegistry.VerifyingKeyStructOutput>;

  hasProcessVk(
    _stateTreeDepth: PromiseOrValue<BigNumberish>,
    _messageTreeDepth: PromiseOrValue<BigNumberish>,
    _voteOptionTreeDepth: PromiseOrValue<BigNumberish>,
    _messageBatchSize: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  hasSubsidyVk(
    _stateTreeDepth: PromiseOrValue<BigNumberish>,
    _intStateTreeDepth: PromiseOrValue<BigNumberish>,
    _voteOptionTreeDepth: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  hasTallyVk(
    _stateTreeDepth: PromiseOrValue<BigNumberish>,
    _intStateTreeDepth: PromiseOrValue<BigNumberish>,
    _voteOptionTreeDepth: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  isProcessVkSet(
    _sig: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  isSubsidyVkSet(
    _sig: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  isTallyVkSet(
    _sig: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  owner(overrides?: CallOverrides): Promise<string>;

  renounceOwnership(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setSubsidyKeys(
    _stateTreeDepth: PromiseOrValue<BigNumberish>,
    _intStateTreeDepth: PromiseOrValue<BigNumberish>,
    _voteOptionTreeDepth: PromiseOrValue<BigNumberish>,
    _subsidyVk: VkRegistry.VerifyingKeyStruct,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setVerifyingKeys(
    _stateTreeDepth: PromiseOrValue<BigNumberish>,
    _intStateTreeDepth: PromiseOrValue<BigNumberish>,
    _messageTreeDepth: PromiseOrValue<BigNumberish>,
    _voteOptionTreeDepth: PromiseOrValue<BigNumberish>,
    _messageBatchSize: PromiseOrValue<BigNumberish>,
    _processVk: VkRegistry.VerifyingKeyStruct,
    _tallyVk: VkRegistry.VerifyingKeyStruct,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  transferOwnership(
    newOwner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    genProcessVkSig(
      _stateTreeDepth: PromiseOrValue<BigNumberish>,
      _messageTreeDepth: PromiseOrValue<BigNumberish>,
      _voteOptionTreeDepth: PromiseOrValue<BigNumberish>,
      _messageBatchSize: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    genSubsidyVkSig(
      _stateTreeDepth: PromiseOrValue<BigNumberish>,
      _intStateTreeDepth: PromiseOrValue<BigNumberish>,
      _voteOptionTreeDepth: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    genTallyVkSig(
      _stateTreeDepth: PromiseOrValue<BigNumberish>,
      _intStateTreeDepth: PromiseOrValue<BigNumberish>,
      _voteOptionTreeDepth: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getProcessVk(
      _stateTreeDepth: PromiseOrValue<BigNumberish>,
      _messageTreeDepth: PromiseOrValue<BigNumberish>,
      _voteOptionTreeDepth: PromiseOrValue<BigNumberish>,
      _messageBatchSize: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<VkRegistry.VerifyingKeyStructOutput>;

    getProcessVkBySig(
      _sig: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<VkRegistry.VerifyingKeyStructOutput>;

    getSubsidyVk(
      _stateTreeDepth: PromiseOrValue<BigNumberish>,
      _intStateTreeDepth: PromiseOrValue<BigNumberish>,
      _voteOptionTreeDepth: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<VkRegistry.VerifyingKeyStructOutput>;

    getSubsidyVkBySig(
      _sig: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<VkRegistry.VerifyingKeyStructOutput>;

    getTallyVk(
      _stateTreeDepth: PromiseOrValue<BigNumberish>,
      _intStateTreeDepth: PromiseOrValue<BigNumberish>,
      _voteOptionTreeDepth: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<VkRegistry.VerifyingKeyStructOutput>;

    getTallyVkBySig(
      _sig: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<VkRegistry.VerifyingKeyStructOutput>;

    hasProcessVk(
      _stateTreeDepth: PromiseOrValue<BigNumberish>,
      _messageTreeDepth: PromiseOrValue<BigNumberish>,
      _voteOptionTreeDepth: PromiseOrValue<BigNumberish>,
      _messageBatchSize: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    hasSubsidyVk(
      _stateTreeDepth: PromiseOrValue<BigNumberish>,
      _intStateTreeDepth: PromiseOrValue<BigNumberish>,
      _voteOptionTreeDepth: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    hasTallyVk(
      _stateTreeDepth: PromiseOrValue<BigNumberish>,
      _intStateTreeDepth: PromiseOrValue<BigNumberish>,
      _voteOptionTreeDepth: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    isProcessVkSet(
      _sig: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    isSubsidyVkSet(
      _sig: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    isTallyVkSet(
      _sig: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    owner(overrides?: CallOverrides): Promise<string>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    setSubsidyKeys(
      _stateTreeDepth: PromiseOrValue<BigNumberish>,
      _intStateTreeDepth: PromiseOrValue<BigNumberish>,
      _voteOptionTreeDepth: PromiseOrValue<BigNumberish>,
      _subsidyVk: VkRegistry.VerifyingKeyStruct,
      overrides?: CallOverrides
    ): Promise<void>;

    setVerifyingKeys(
      _stateTreeDepth: PromiseOrValue<BigNumberish>,
      _intStateTreeDepth: PromiseOrValue<BigNumberish>,
      _messageTreeDepth: PromiseOrValue<BigNumberish>,
      _voteOptionTreeDepth: PromiseOrValue<BigNumberish>,
      _messageBatchSize: PromiseOrValue<BigNumberish>,
      _processVk: VkRegistry.VerifyingKeyStruct,
      _tallyVk: VkRegistry.VerifyingKeyStruct,
      overrides?: CallOverrides
    ): Promise<void>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "OwnershipTransferred(address,address)"(
      previousOwner?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null
    ): OwnershipTransferredEventFilter;
    OwnershipTransferred(
      previousOwner?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null
    ): OwnershipTransferredEventFilter;

    "ProcessVkSet(uint256)"(_sig?: null): ProcessVkSetEventFilter;
    ProcessVkSet(_sig?: null): ProcessVkSetEventFilter;

    "SubsidyVkSet(uint256)"(_sig?: null): SubsidyVkSetEventFilter;
    SubsidyVkSet(_sig?: null): SubsidyVkSetEventFilter;

    "TallyVkSet(uint256)"(_sig?: null): TallyVkSetEventFilter;
    TallyVkSet(_sig?: null): TallyVkSetEventFilter;
  };

  estimateGas: {
    genProcessVkSig(
      _stateTreeDepth: PromiseOrValue<BigNumberish>,
      _messageTreeDepth: PromiseOrValue<BigNumberish>,
      _voteOptionTreeDepth: PromiseOrValue<BigNumberish>,
      _messageBatchSize: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    genSubsidyVkSig(
      _stateTreeDepth: PromiseOrValue<BigNumberish>,
      _intStateTreeDepth: PromiseOrValue<BigNumberish>,
      _voteOptionTreeDepth: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    genTallyVkSig(
      _stateTreeDepth: PromiseOrValue<BigNumberish>,
      _intStateTreeDepth: PromiseOrValue<BigNumberish>,
      _voteOptionTreeDepth: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getProcessVk(
      _stateTreeDepth: PromiseOrValue<BigNumberish>,
      _messageTreeDepth: PromiseOrValue<BigNumberish>,
      _voteOptionTreeDepth: PromiseOrValue<BigNumberish>,
      _messageBatchSize: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getProcessVkBySig(
      _sig: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getSubsidyVk(
      _stateTreeDepth: PromiseOrValue<BigNumberish>,
      _intStateTreeDepth: PromiseOrValue<BigNumberish>,
      _voteOptionTreeDepth: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getSubsidyVkBySig(
      _sig: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getTallyVk(
      _stateTreeDepth: PromiseOrValue<BigNumberish>,
      _intStateTreeDepth: PromiseOrValue<BigNumberish>,
      _voteOptionTreeDepth: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getTallyVkBySig(
      _sig: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    hasProcessVk(
      _stateTreeDepth: PromiseOrValue<BigNumberish>,
      _messageTreeDepth: PromiseOrValue<BigNumberish>,
      _voteOptionTreeDepth: PromiseOrValue<BigNumberish>,
      _messageBatchSize: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    hasSubsidyVk(
      _stateTreeDepth: PromiseOrValue<BigNumberish>,
      _intStateTreeDepth: PromiseOrValue<BigNumberish>,
      _voteOptionTreeDepth: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    hasTallyVk(
      _stateTreeDepth: PromiseOrValue<BigNumberish>,
      _intStateTreeDepth: PromiseOrValue<BigNumberish>,
      _voteOptionTreeDepth: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    isProcessVkSet(
      _sig: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    isSubsidyVkSet(
      _sig: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    isTallyVkSet(
      _sig: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setSubsidyKeys(
      _stateTreeDepth: PromiseOrValue<BigNumberish>,
      _intStateTreeDepth: PromiseOrValue<BigNumberish>,
      _voteOptionTreeDepth: PromiseOrValue<BigNumberish>,
      _subsidyVk: VkRegistry.VerifyingKeyStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setVerifyingKeys(
      _stateTreeDepth: PromiseOrValue<BigNumberish>,
      _intStateTreeDepth: PromiseOrValue<BigNumberish>,
      _messageTreeDepth: PromiseOrValue<BigNumberish>,
      _voteOptionTreeDepth: PromiseOrValue<BigNumberish>,
      _messageBatchSize: PromiseOrValue<BigNumberish>,
      _processVk: VkRegistry.VerifyingKeyStruct,
      _tallyVk: VkRegistry.VerifyingKeyStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    genProcessVkSig(
      _stateTreeDepth: PromiseOrValue<BigNumberish>,
      _messageTreeDepth: PromiseOrValue<BigNumberish>,
      _voteOptionTreeDepth: PromiseOrValue<BigNumberish>,
      _messageBatchSize: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    genSubsidyVkSig(
      _stateTreeDepth: PromiseOrValue<BigNumberish>,
      _intStateTreeDepth: PromiseOrValue<BigNumberish>,
      _voteOptionTreeDepth: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    genTallyVkSig(
      _stateTreeDepth: PromiseOrValue<BigNumberish>,
      _intStateTreeDepth: PromiseOrValue<BigNumberish>,
      _voteOptionTreeDepth: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getProcessVk(
      _stateTreeDepth: PromiseOrValue<BigNumberish>,
      _messageTreeDepth: PromiseOrValue<BigNumberish>,
      _voteOptionTreeDepth: PromiseOrValue<BigNumberish>,
      _messageBatchSize: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getProcessVkBySig(
      _sig: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getSubsidyVk(
      _stateTreeDepth: PromiseOrValue<BigNumberish>,
      _intStateTreeDepth: PromiseOrValue<BigNumberish>,
      _voteOptionTreeDepth: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getSubsidyVkBySig(
      _sig: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getTallyVk(
      _stateTreeDepth: PromiseOrValue<BigNumberish>,
      _intStateTreeDepth: PromiseOrValue<BigNumberish>,
      _voteOptionTreeDepth: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getTallyVkBySig(
      _sig: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    hasProcessVk(
      _stateTreeDepth: PromiseOrValue<BigNumberish>,
      _messageTreeDepth: PromiseOrValue<BigNumberish>,
      _voteOptionTreeDepth: PromiseOrValue<BigNumberish>,
      _messageBatchSize: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    hasSubsidyVk(
      _stateTreeDepth: PromiseOrValue<BigNumberish>,
      _intStateTreeDepth: PromiseOrValue<BigNumberish>,
      _voteOptionTreeDepth: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    hasTallyVk(
      _stateTreeDepth: PromiseOrValue<BigNumberish>,
      _intStateTreeDepth: PromiseOrValue<BigNumberish>,
      _voteOptionTreeDepth: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isProcessVkSet(
      _sig: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isSubsidyVkSet(
      _sig: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isTallyVkSet(
      _sig: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setSubsidyKeys(
      _stateTreeDepth: PromiseOrValue<BigNumberish>,
      _intStateTreeDepth: PromiseOrValue<BigNumberish>,
      _voteOptionTreeDepth: PromiseOrValue<BigNumberish>,
      _subsidyVk: VkRegistry.VerifyingKeyStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setVerifyingKeys(
      _stateTreeDepth: PromiseOrValue<BigNumberish>,
      _intStateTreeDepth: PromiseOrValue<BigNumberish>,
      _messageTreeDepth: PromiseOrValue<BigNumberish>,
      _voteOptionTreeDepth: PromiseOrValue<BigNumberish>,
      _messageBatchSize: PromiseOrValue<BigNumberish>,
      _processVk: VkRegistry.VerifyingKeyStruct,
      _tallyVk: VkRegistry.VerifyingKeyStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}