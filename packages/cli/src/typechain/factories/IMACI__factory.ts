/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { IMACI, IMACIInterface } from "../IMACI";

const _abi = [
  {
    inputs: [],
    name: "getStateAqRoot",
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
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_pollId",
        type: "uint256",
      },
    ],
    name: "mergeStateAq",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_numSrQueueOps",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_pollId",
        type: "uint256",
      },
    ],
    name: "mergeStateAqSubRoots",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "numSignUps",
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
  {
    inputs: [],
    name: "stateAq",
    outputs: [
      {
        internalType: "contract AccQueue",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "stateTreeDepth",
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
  {
    inputs: [],
    name: "vkRegistry",
    outputs: [
      {
        internalType: "contract VkRegistry",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

export class IMACI__factory {
  static readonly abi = _abi;
  static createInterface(): IMACIInterface {
    return new utils.Interface(_abi) as IMACIInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): IMACI {
    return new Contract(address, _abi, signerOrProvider) as IMACI;
  }
}
