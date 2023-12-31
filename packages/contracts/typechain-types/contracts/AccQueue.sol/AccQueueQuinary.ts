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
} from "../../common";

export interface AccQueueQuinaryInterface extends utils.Interface {
  functions: {
    "MAX_DEPTH()": FunctionFragment;
    "calcMinHeight()": FunctionFragment;
    "currentSubtreeIndex()": FunctionFragment;
    "enqueue(uint256)": FunctionFragment;
    "fill()": FunctionFragment;
    "getMainRoot(uint256)": FunctionFragment;
    "getSmallSRTroot()": FunctionFragment;
    "getSrIndices()": FunctionFragment;
    "getSubRoot(uint256)": FunctionFragment;
    "hashLevelLeaf(uint256,uint256)": FunctionFragment;
    "initialize()": FunctionFragment;
    "insertSubTree(uint256)": FunctionFragment;
    "mainRoots(uint256)": FunctionFragment;
    "merge(uint256)": FunctionFragment;
    "mergeSubRoots(uint256)": FunctionFragment;
    "numLeaves()": FunctionFragment;
    "owner()": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "smallSRTroot()": FunctionFragment;
    "subDepth()": FunctionFragment;
    "subRoots(uint256)": FunctionFragment;
    "subTreesMerged()": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
    "treeMerged()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "MAX_DEPTH"
      | "calcMinHeight"
      | "currentSubtreeIndex"
      | "enqueue"
      | "fill"
      | "getMainRoot"
      | "getSmallSRTroot"
      | "getSrIndices"
      | "getSubRoot"
      | "hashLevelLeaf"
      | "initialize"
      | "insertSubTree"
      | "mainRoots"
      | "merge"
      | "mergeSubRoots"
      | "numLeaves"
      | "owner"
      | "renounceOwnership"
      | "smallSRTroot"
      | "subDepth"
      | "subRoots"
      | "subTreesMerged"
      | "transferOwnership"
      | "treeMerged"
  ): FunctionFragment;

  encodeFunctionData(functionFragment: "MAX_DEPTH", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "calcMinHeight",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "currentSubtreeIndex",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "enqueue",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(functionFragment: "fill", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "getMainRoot",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "getSmallSRTroot",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getSrIndices",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getSubRoot",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "hashLevelLeaf",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "initialize",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "insertSubTree",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "mainRoots",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "merge",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "mergeSubRoots",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(functionFragment: "numLeaves", values?: undefined): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "smallSRTroot",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "subDepth", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "subRoots",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "subTreesMerged",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "treeMerged",
    values?: undefined
  ): string;

  decodeFunctionResult(functionFragment: "MAX_DEPTH", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "calcMinHeight",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "currentSubtreeIndex",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "enqueue", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "fill", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getMainRoot",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getSmallSRTroot",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getSrIndices",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getSubRoot", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "hashLevelLeaf",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "insertSubTree",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "mainRoots", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "merge", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "mergeSubRoots",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "numLeaves", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "smallSRTroot",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "subDepth", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "subRoots", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "subTreesMerged",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "treeMerged", data: BytesLike): Result;

  events: {
    "Initialized(uint8)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Initialized"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
}

export interface InitializedEventObject {
  version: number;
}
export type InitializedEvent = TypedEvent<[number], InitializedEventObject>;

export type InitializedEventFilter = TypedEventFilter<InitializedEvent>;

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

export interface AccQueueQuinary extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: AccQueueQuinaryInterface;

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
    MAX_DEPTH(overrides?: CallOverrides): Promise<[BigNumber]>;

    calcMinHeight(overrides?: CallOverrides): Promise<[BigNumber]>;

    currentSubtreeIndex(overrides?: CallOverrides): Promise<[BigNumber]>;

    enqueue(
      _leaf: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    fill(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    getMainRoot(
      _depth: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getSmallSRTroot(overrides?: CallOverrides): Promise<[BigNumber]>;

    getSrIndices(overrides?: CallOverrides): Promise<[BigNumber, BigNumber]>;

    getSubRoot(
      _index: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    hashLevelLeaf(
      _level: PromiseOrValue<BigNumberish>,
      _leaf: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    initialize(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    insertSubTree(
      _subRoot: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    mainRoots(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    merge(
      _depth: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    mergeSubRoots(
      _numSrQueueOps: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    numLeaves(overrides?: CallOverrides): Promise<[BigNumber]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    smallSRTroot(overrides?: CallOverrides): Promise<[BigNumber]>;

    subDepth(overrides?: CallOverrides): Promise<[BigNumber]>;

    subRoots(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    subTreesMerged(overrides?: CallOverrides): Promise<[boolean]>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    treeMerged(overrides?: CallOverrides): Promise<[boolean]>;
  };

  MAX_DEPTH(overrides?: CallOverrides): Promise<BigNumber>;

  calcMinHeight(overrides?: CallOverrides): Promise<BigNumber>;

  currentSubtreeIndex(overrides?: CallOverrides): Promise<BigNumber>;

  enqueue(
    _leaf: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  fill(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  getMainRoot(
    _depth: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getSmallSRTroot(overrides?: CallOverrides): Promise<BigNumber>;

  getSrIndices(overrides?: CallOverrides): Promise<[BigNumber, BigNumber]>;

  getSubRoot(
    _index: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  hashLevelLeaf(
    _level: PromiseOrValue<BigNumberish>,
    _leaf: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  initialize(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  insertSubTree(
    _subRoot: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  mainRoots(
    arg0: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  merge(
    _depth: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  mergeSubRoots(
    _numSrQueueOps: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  numLeaves(overrides?: CallOverrides): Promise<BigNumber>;

  owner(overrides?: CallOverrides): Promise<string>;

  renounceOwnership(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  smallSRTroot(overrides?: CallOverrides): Promise<BigNumber>;

  subDepth(overrides?: CallOverrides): Promise<BigNumber>;

  subRoots(
    arg0: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  subTreesMerged(overrides?: CallOverrides): Promise<boolean>;

  transferOwnership(
    newOwner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  treeMerged(overrides?: CallOverrides): Promise<boolean>;

  callStatic: {
    MAX_DEPTH(overrides?: CallOverrides): Promise<BigNumber>;

    calcMinHeight(overrides?: CallOverrides): Promise<BigNumber>;

    currentSubtreeIndex(overrides?: CallOverrides): Promise<BigNumber>;

    enqueue(
      _leaf: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    fill(overrides?: CallOverrides): Promise<void>;

    getMainRoot(
      _depth: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getSmallSRTroot(overrides?: CallOverrides): Promise<BigNumber>;

    getSrIndices(overrides?: CallOverrides): Promise<[BigNumber, BigNumber]>;

    getSubRoot(
      _index: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    hashLevelLeaf(
      _level: PromiseOrValue<BigNumberish>,
      _leaf: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    initialize(overrides?: CallOverrides): Promise<void>;

    insertSubTree(
      _subRoot: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    mainRoots(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    merge(
      _depth: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    mergeSubRoots(
      _numSrQueueOps: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    numLeaves(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<string>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    smallSRTroot(overrides?: CallOverrides): Promise<BigNumber>;

    subDepth(overrides?: CallOverrides): Promise<BigNumber>;

    subRoots(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    subTreesMerged(overrides?: CallOverrides): Promise<boolean>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    treeMerged(overrides?: CallOverrides): Promise<boolean>;
  };

  filters: {
    "Initialized(uint8)"(version?: null): InitializedEventFilter;
    Initialized(version?: null): InitializedEventFilter;

    "OwnershipTransferred(address,address)"(
      previousOwner?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null
    ): OwnershipTransferredEventFilter;
    OwnershipTransferred(
      previousOwner?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null
    ): OwnershipTransferredEventFilter;
  };

  estimateGas: {
    MAX_DEPTH(overrides?: CallOverrides): Promise<BigNumber>;

    calcMinHeight(overrides?: CallOverrides): Promise<BigNumber>;

    currentSubtreeIndex(overrides?: CallOverrides): Promise<BigNumber>;

    enqueue(
      _leaf: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    fill(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    getMainRoot(
      _depth: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getSmallSRTroot(overrides?: CallOverrides): Promise<BigNumber>;

    getSrIndices(overrides?: CallOverrides): Promise<BigNumber>;

    getSubRoot(
      _index: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    hashLevelLeaf(
      _level: PromiseOrValue<BigNumberish>,
      _leaf: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    initialize(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    insertSubTree(
      _subRoot: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    mainRoots(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    merge(
      _depth: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    mergeSubRoots(
      _numSrQueueOps: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    numLeaves(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    smallSRTroot(overrides?: CallOverrides): Promise<BigNumber>;

    subDepth(overrides?: CallOverrides): Promise<BigNumber>;

    subRoots(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    subTreesMerged(overrides?: CallOverrides): Promise<BigNumber>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    treeMerged(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    MAX_DEPTH(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    calcMinHeight(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    currentSubtreeIndex(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    enqueue(
      _leaf: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    fill(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    getMainRoot(
      _depth: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getSmallSRTroot(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getSrIndices(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getSubRoot(
      _index: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    hashLevelLeaf(
      _level: PromiseOrValue<BigNumberish>,
      _leaf: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    initialize(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    insertSubTree(
      _subRoot: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    mainRoots(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    merge(
      _depth: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    mergeSubRoots(
      _numSrQueueOps: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    numLeaves(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    smallSRTroot(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    subDepth(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    subRoots(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    subTreesMerged(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    treeMerged(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
