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
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../../common";

export interface BaseRecipientRegistryInterface extends utils.Interface {
  functions: {
    "controller()": FunctionFragment;
    "getRecipientAddress(uint256,uint256,uint256)": FunctionFragment;
    "getRecipientCount()": FunctionFragment;
    "maxRecipients()": FunctionFragment;
    "setMaxRecipients(uint256)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "controller"
      | "getRecipientAddress"
      | "getRecipientCount"
      | "maxRecipients"
      | "setMaxRecipients"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "controller",
    values?: undefined
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
  encodeFunctionData(
    functionFragment: "setMaxRecipients",
    values: [PromiseOrValue<BigNumberish>]
  ): string;

  decodeFunctionResult(functionFragment: "controller", data: BytesLike): Result;
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
  decodeFunctionResult(
    functionFragment: "setMaxRecipients",
    data: BytesLike
  ): Result;

  events: {};
}

export interface BaseRecipientRegistry extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: BaseRecipientRegistryInterface;

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
    controller(overrides?: CallOverrides): Promise<[string]>;

    getRecipientAddress(
      _index: PromiseOrValue<BigNumberish>,
      _startTime: PromiseOrValue<BigNumberish>,
      _endTime: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    getRecipientCount(overrides?: CallOverrides): Promise<[BigNumber]>;

    maxRecipients(overrides?: CallOverrides): Promise<[BigNumber]>;

    setMaxRecipients(
      _maxRecipients: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  controller(overrides?: CallOverrides): Promise<string>;

  getRecipientAddress(
    _index: PromiseOrValue<BigNumberish>,
    _startTime: PromiseOrValue<BigNumberish>,
    _endTime: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<string>;

  getRecipientCount(overrides?: CallOverrides): Promise<BigNumber>;

  maxRecipients(overrides?: CallOverrides): Promise<BigNumber>;

  setMaxRecipients(
    _maxRecipients: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    controller(overrides?: CallOverrides): Promise<string>;

    getRecipientAddress(
      _index: PromiseOrValue<BigNumberish>,
      _startTime: PromiseOrValue<BigNumberish>,
      _endTime: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<string>;

    getRecipientCount(overrides?: CallOverrides): Promise<BigNumber>;

    maxRecipients(overrides?: CallOverrides): Promise<BigNumber>;

    setMaxRecipients(
      _maxRecipients: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<boolean>;
  };

  filters: {};

  estimateGas: {
    controller(overrides?: CallOverrides): Promise<BigNumber>;

    getRecipientAddress(
      _index: PromiseOrValue<BigNumberish>,
      _startTime: PromiseOrValue<BigNumberish>,
      _endTime: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getRecipientCount(overrides?: CallOverrides): Promise<BigNumber>;

    maxRecipients(overrides?: CallOverrides): Promise<BigNumber>;

    setMaxRecipients(
      _maxRecipients: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    controller(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getRecipientAddress(
      _index: PromiseOrValue<BigNumberish>,
      _startTime: PromiseOrValue<BigNumberish>,
      _endTime: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getRecipientCount(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    maxRecipients(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    setMaxRecipients(
      _maxRecipients: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
