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
  PayableOverrides,
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
} from "../../common";

export interface OptimisticRecipientRegistryInterface extends utils.Interface {
  functions: {
    "addRecipient(address,string)": FunctionFragment;
    "baseDeposit()": FunctionFragment;
    "challengePeriodDuration()": FunctionFragment;
    "challengeRequest(bytes32,address)": FunctionFragment;
    "controller()": FunctionFragment;
    "executeRequest(bytes32)": FunctionFragment;
    "getRecipientAddress(uint256,uint256,uint256)": FunctionFragment;
    "getRecipientCount()": FunctionFragment;
    "maxRecipients()": FunctionFragment;
    "owner()": FunctionFragment;
    "removeRecipient(bytes32)": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "setBaseDeposit(uint256)": FunctionFragment;
    "setChallengePeriodDuration(uint256)": FunctionFragment;
    "setMaxRecipients(uint256)": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "addRecipient"
      | "baseDeposit"
      | "challengePeriodDuration"
      | "challengeRequest"
      | "controller"
      | "executeRequest"
      | "getRecipientAddress"
      | "getRecipientCount"
      | "maxRecipients"
      | "owner"
      | "removeRecipient"
      | "renounceOwnership"
      | "setBaseDeposit"
      | "setChallengePeriodDuration"
      | "setMaxRecipients"
      | "transferOwnership"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "addRecipient",
    values: [PromiseOrValue<string>, PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "baseDeposit",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "challengePeriodDuration",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "challengeRequest",
    values: [PromiseOrValue<BytesLike>, PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "controller",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "executeRequest",
    values: [PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "getRecipientAddress",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "getRecipientCount",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "maxRecipients",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "removeRecipient",
    values: [PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "setBaseDeposit",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "setChallengePeriodDuration",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "setMaxRecipients",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [PromiseOrValue<string>]
  ): string;

  decodeFunctionResult(
    functionFragment: "addRecipient",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "baseDeposit",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "challengePeriodDuration",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "challengeRequest",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "controller", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "executeRequest",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getRecipientAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getRecipientCount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "maxRecipients",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "removeRecipient",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setBaseDeposit",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setChallengePeriodDuration",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setMaxRecipients",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;

  events: {
    "OwnershipTransferred(address,address)": EventFragment;
    "RequestResolved(bytes32,uint8,bool,uint256,uint256)": EventFragment;
    "RequestSubmitted(bytes32,uint8,address,string,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RequestResolved"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RequestSubmitted"): EventFragment;
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

export interface RequestResolvedEventObject {
  _recipientId: string;
  _type: number;
  _rejected: boolean;
  _recipientIndex: BigNumber;
  _timestamp: BigNumber;
}
export type RequestResolvedEvent = TypedEvent<
  [string, number, boolean, BigNumber, BigNumber],
  RequestResolvedEventObject
>;

export type RequestResolvedEventFilter = TypedEventFilter<RequestResolvedEvent>;

export interface RequestSubmittedEventObject {
  _recipientId: string;
  _type: number;
  _recipient: string;
  _metadata: string;
  _timestamp: BigNumber;
}
export type RequestSubmittedEvent = TypedEvent<
  [string, number, string, string, BigNumber],
  RequestSubmittedEventObject
>;

export type RequestSubmittedEventFilter =
  TypedEventFilter<RequestSubmittedEvent>;

export interface OptimisticRecipientRegistry extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: OptimisticRecipientRegistryInterface;

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
    addRecipient(
      _recipient: PromiseOrValue<string>,
      _metadata: PromiseOrValue<string>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    baseDeposit(overrides?: CallOverrides): Promise<[BigNumber]>;

    challengePeriodDuration(overrides?: CallOverrides): Promise<[BigNumber]>;

    challengeRequest(
      _recipientId: PromiseOrValue<BytesLike>,
      _beneficiary: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    controller(overrides?: CallOverrides): Promise<[string]>;

    executeRequest(
      _recipientId: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    getRecipientAddress(
      _index: PromiseOrValue<BigNumberish>,
      _startTime: PromiseOrValue<BigNumberish>,
      _endTime: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    getRecipientCount(overrides?: CallOverrides): Promise<[BigNumber]>;

    maxRecipients(overrides?: CallOverrides): Promise<[BigNumber]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    removeRecipient(
      _recipientId: PromiseOrValue<BytesLike>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setBaseDeposit(
      _baseDeposit: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setChallengePeriodDuration(
      _challengePeriodDuration: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setMaxRecipients(
      _maxRecipients: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  addRecipient(
    _recipient: PromiseOrValue<string>,
    _metadata: PromiseOrValue<string>,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  baseDeposit(overrides?: CallOverrides): Promise<BigNumber>;

  challengePeriodDuration(overrides?: CallOverrides): Promise<BigNumber>;

  challengeRequest(
    _recipientId: PromiseOrValue<BytesLike>,
    _beneficiary: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  controller(overrides?: CallOverrides): Promise<string>;

  executeRequest(
    _recipientId: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  getRecipientAddress(
    _index: PromiseOrValue<BigNumberish>,
    _startTime: PromiseOrValue<BigNumberish>,
    _endTime: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<string>;

  getRecipientCount(overrides?: CallOverrides): Promise<BigNumber>;

  maxRecipients(overrides?: CallOverrides): Promise<BigNumber>;

  owner(overrides?: CallOverrides): Promise<string>;

  removeRecipient(
    _recipientId: PromiseOrValue<BytesLike>,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  renounceOwnership(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setBaseDeposit(
    _baseDeposit: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setChallengePeriodDuration(
    _challengePeriodDuration: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setMaxRecipients(
    _maxRecipients: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  transferOwnership(
    newOwner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    addRecipient(
      _recipient: PromiseOrValue<string>,
      _metadata: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    baseDeposit(overrides?: CallOverrides): Promise<BigNumber>;

    challengePeriodDuration(overrides?: CallOverrides): Promise<BigNumber>;

    challengeRequest(
      _recipientId: PromiseOrValue<BytesLike>,
      _beneficiary: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    controller(overrides?: CallOverrides): Promise<string>;

    executeRequest(
      _recipientId: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    getRecipientAddress(
      _index: PromiseOrValue<BigNumberish>,
      _startTime: PromiseOrValue<BigNumberish>,
      _endTime: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<string>;

    getRecipientCount(overrides?: CallOverrides): Promise<BigNumber>;

    maxRecipients(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<string>;

    removeRecipient(
      _recipientId: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<void>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    setBaseDeposit(
      _baseDeposit: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    setChallengePeriodDuration(
      _challengePeriodDuration: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    setMaxRecipients(
      _maxRecipients: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<boolean>;

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

    "RequestResolved(bytes32,uint8,bool,uint256,uint256)"(
      _recipientId?: PromiseOrValue<BytesLike> | null,
      _type?: PromiseOrValue<BigNumberish> | null,
      _rejected?: PromiseOrValue<boolean> | null,
      _recipientIndex?: null,
      _timestamp?: null
    ): RequestResolvedEventFilter;
    RequestResolved(
      _recipientId?: PromiseOrValue<BytesLike> | null,
      _type?: PromiseOrValue<BigNumberish> | null,
      _rejected?: PromiseOrValue<boolean> | null,
      _recipientIndex?: null,
      _timestamp?: null
    ): RequestResolvedEventFilter;

    "RequestSubmitted(bytes32,uint8,address,string,uint256)"(
      _recipientId?: PromiseOrValue<BytesLike> | null,
      _type?: PromiseOrValue<BigNumberish> | null,
      _recipient?: null,
      _metadata?: null,
      _timestamp?: null
    ): RequestSubmittedEventFilter;
    RequestSubmitted(
      _recipientId?: PromiseOrValue<BytesLike> | null,
      _type?: PromiseOrValue<BigNumberish> | null,
      _recipient?: null,
      _metadata?: null,
      _timestamp?: null
    ): RequestSubmittedEventFilter;
  };

  estimateGas: {
    addRecipient(
      _recipient: PromiseOrValue<string>,
      _metadata: PromiseOrValue<string>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    baseDeposit(overrides?: CallOverrides): Promise<BigNumber>;

    challengePeriodDuration(overrides?: CallOverrides): Promise<BigNumber>;

    challengeRequest(
      _recipientId: PromiseOrValue<BytesLike>,
      _beneficiary: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    controller(overrides?: CallOverrides): Promise<BigNumber>;

    executeRequest(
      _recipientId: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    getRecipientAddress(
      _index: PromiseOrValue<BigNumberish>,
      _startTime: PromiseOrValue<BigNumberish>,
      _endTime: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getRecipientCount(overrides?: CallOverrides): Promise<BigNumber>;

    maxRecipients(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    removeRecipient(
      _recipientId: PromiseOrValue<BytesLike>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setBaseDeposit(
      _baseDeposit: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setChallengePeriodDuration(
      _challengePeriodDuration: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setMaxRecipients(
      _maxRecipients: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    addRecipient(
      _recipient: PromiseOrValue<string>,
      _metadata: PromiseOrValue<string>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    baseDeposit(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    challengePeriodDuration(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    challengeRequest(
      _recipientId: PromiseOrValue<BytesLike>,
      _beneficiary: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    controller(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    executeRequest(
      _recipientId: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    getRecipientAddress(
      _index: PromiseOrValue<BigNumberish>,
      _startTime: PromiseOrValue<BigNumberish>,
      _endTime: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getRecipientCount(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    maxRecipients(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    removeRecipient(
      _recipientId: PromiseOrValue<BytesLike>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setBaseDeposit(
      _baseDeposit: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setChallengePeriodDuration(
      _challengePeriodDuration: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setMaxRecipients(
      _maxRecipients: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
