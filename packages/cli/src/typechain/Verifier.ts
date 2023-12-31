/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import { FunctionFragment, Result } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";

export type G1PointStruct = { x: BigNumberish; y: BigNumberish };

export type G1PointStructOutput = [BigNumber, BigNumber] & {
  x: BigNumber;
  y: BigNumber;
};

export type G2PointStruct = {
  x: [BigNumberish, BigNumberish];
  y: [BigNumberish, BigNumberish];
};

export type G2PointStructOutput = [
  [BigNumber, BigNumber],
  [BigNumber, BigNumber]
] & { x: [BigNumber, BigNumber]; y: [BigNumber, BigNumber] };

export type VerifyingKeyStruct = {
  alpha1: G1PointStruct;
  beta2: G2PointStruct;
  gamma2: G2PointStruct;
  delta2: G2PointStruct;
  ic: G1PointStruct[];
};

export type VerifyingKeyStructOutput = [
  G1PointStructOutput,
  G2PointStructOutput,
  G2PointStructOutput,
  G2PointStructOutput,
  G1PointStructOutput[]
] & {
  alpha1: G1PointStructOutput;
  beta2: G2PointStructOutput;
  gamma2: G2PointStructOutput;
  delta2: G2PointStructOutput;
  ic: G1PointStructOutput[];
};

export interface VerifierInterface extends utils.Interface {
  functions: {
    "verify(uint256[8],((uint256,uint256),(uint256[2],uint256[2]),(uint256[2],uint256[2]),(uint256[2],uint256[2]),(uint256,uint256)[]),uint256)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "verify",
    values: [BigNumberish[], VerifyingKeyStruct, BigNumberish]
  ): string;

  decodeFunctionResult(functionFragment: "verify", data: BytesLike): Result;

  events: {};
}

export interface Verifier extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: VerifierInterface;

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
    verify(
      _proof: BigNumberish[],
      vk: VerifyingKeyStruct,
      input: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[boolean]>;
  };

  verify(
    _proof: BigNumberish[],
    vk: VerifyingKeyStruct,
    input: BigNumberish,
    overrides?: CallOverrides
  ): Promise<boolean>;

  callStatic: {
    verify(
      _proof: BigNumberish[],
      vk: VerifyingKeyStruct,
      input: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;
  };

  filters: {};

  estimateGas: {
    verify(
      _proof: BigNumberish[],
      vk: VerifyingKeyStruct,
      input: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    verify(
      _proof: BigNumberish[],
      vk: VerifyingKeyStruct,
      input: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
