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
import type { PromiseOrValue } from "../../common";
import type { StateTree, StateTreeInterface } from "../../contracts/StateTree";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_subDepth",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint8",
        name: "version",
        type: "uint8",
      },
    ],
    name: "Initialized",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    inputs: [],
    name: "MAX_DEPTH",
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
    name: "calcMinHeight",
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
    name: "currentSubtreeIndex",
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
        name: "_leaf",
        type: "uint256",
      },
    ],
    name: "enqueue",
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
    inputs: [],
    name: "fill",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_depth",
        type: "uint256",
      },
    ],
    name: "getMainRoot",
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
    name: "getSmallSRTroot",
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
    name: "getSrIndices",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
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
        name: "_index",
        type: "uint256",
      },
    ],
    name: "getSubRoot",
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
        name: "_level",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_leaf",
        type: "uint256",
      },
    ],
    name: "hashLevelLeaf",
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
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_subRoot",
        type: "uint256",
      },
    ],
    name: "insertSubTree",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "mainRoots",
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
        name: "_depth",
        type: "uint256",
      },
    ],
    name: "merge",
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
    ],
    name: "mergeSubRoots",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "numLeaves",
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
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "smallSRTroot",
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
    name: "subDepth",
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
        name: "",
        type: "uint256",
      },
    ],
    name: "subRoots",
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
    name: "subTreesMerged",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "treeMerged",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60e06040523480156200001157600080fd5b506040516200258f3803806200258f833981016040819052620000349162000673565b80806005600082116200009e5760405162461bcd60e51b815260206004820152602760248201527f41636351756575653a205f7375624465707468206d757374206265206d6f72656044820152660207468616e20360cc1b60648201526084015b60405180910390fd5b6020821115620001085760405162461bcd60e51b815260206004820152602e60248201527f41636351756575653a206f6e6c7920737570706f72747320757020746f204d4160448201526d585f4445505448206c6576656c7360901b606482015260840162000095565b8060021480620001185750806005145b6200017c5760405162461bcd60e51b815260206004820152602d60248201527f41636351756575653a206f6e6c7920737570706f727473205f686173684c656e60448201526c677468206f662032206f72203560981b606482015260840162000095565b6065805460ff191660028314179055608082905260a0819052620001a18282620007a2565b60c05250507f0ef71f46e11a513c599eed9dd03576c33439bcfb1cee155316f90541e41649ba6101d75550507f0404a2ed0a1df2006441895d9a65ffffdd4968cb5f555fe72a6da7aaec83e1a06101d8557f0b1c3d09dd575749a374a9dc1ee32af8c2312e24ad33a3e40fce8120b0f25fe36101d9557f1f60ed72fc1915366d2e52cfc7ddc0ff854c7aee9abbc07d1ca88ada842354dc6101da557f2ca1efc603fc121baf791319195ee3ab7fa075cee664d008f9ab2870f50283606101db557f2a0381fc4fb108733dfc58c355f2de753bcde61bd988eaa7d33fc967262be5ad6101dc557f12c6c7cce0332367373dafc95d75b98dd58980410434929dff09466a4ba262db6101dd557f2f212d3cc7e7334c4a10ced1be011b9cd70f73cca5522fc4137a51be8a17d18e6101de557f0968ef20d515d8d743b2cf66603f8b86f3fdeee932fdc911774bb8699566e11c6101df557f2e3604981890fb676c3dac1e14c5c201573f99d1b9e67025109baf274b10e9dd6101e0557f147d317fd4b7a1dd6cb961cfba444466b3c431ea638c8df74a89fc591d1a3a516101e1557f10ea2b72952b619afd5b9bc50561df8de0c6e1ba9b5ad66b179c39c420304a756101e2557f1c49f7b357d244d9144676ad23f79465ef5b88ef0f91762a3d35997688af9a5a6101e3557f05ca0cfef8158efc5c4af44122e2765179b5463618d5c5ac6185c192332cade96101e4557f0ae1595634e8a2e23620f33f9b2b5a23387a28f5833814646900110842f3a1096101e5557f08be8c2a6a099d9cdc96f9197af6ad99595d73419eb0694eaea432fa18baa2036101e6557f207f689ce35cf857ee6e68c42d31bb2191d1e84d7a295ccd63995ca7369d20eb6101e7557f2a6f6b7e4a2cd1a6466ed17debb0a27904e99adbd72be85566a87340f41efd056101e8557f0f0725795350566920bbf56d3f22c4d38e832e638c9cb91811f83194e9dd74be6101e9557f02cd50632e5c5b00a9a93f434797725ec0f85f11ba1b6a844f0cd10c70df63926101ea557f08868b85d2fa4c17eec0a7d8bca4671a00474bff80e801981437b77aa11d10b56101eb557f294a84b7b46ea0a781877a2c0efd1ee56758d9ee55722721867efe53f46452866101ec557f02cb8070979a018bb919f0d1a25d5ad3d5a376c4cf66f36d33434d221ca77e886101ed557f05dfce8303f471d776762f2ddd37f05191b8bf5064d8d28e892cd4ec21e7aab46101ee557f28a47617aa1e26bf42fd3b26e88aa717fd759bb92b22faaf5ad82090680b52316101ef557f1de9253f5fa546603817abd83d1a13c8562f2bf6a0069a546fe546ca0c03c1706101f0557f1cb9bd316e341b873dbbef94fd699c6e3a638451de2817db1620235db2b6c39e6101f1557f0654785b2917d7c659a95738add3d8eb51cbbefc0f521c2640bc74b0fec581626101f2557f2eed74eacf5de60a758f815cb5e73015455c38408143fc25810d03e1ec9e35246101f3557f16bea3363deb4753db67be8b19110b169ae39f33113a92773c41a8b025ca5a936101f4557f2b0dd3b7e0a7e234a4a1b48dd0e9083dc8bfc8cd7f72abdb93a1b8e5ef3e22ed6101f5557f0bc1ca795d5a059b1dc0c51f72c46f2288cb139ebf09f38ac3e8bca0485ed4976101f6557f249ca1610a7f80bbf422388c18ef9777fcdab26ee718e2b39e4011973a9023306101f755620007b7565b6000602082840312156200068657600080fd5b5051919050565b634e487b7160e01b600052601160045260246000fd5b600181815b80851115620006e4578160001904821115620006c857620006c86200068d565b80851615620006d657918102915b93841c9390800290620006a8565b509250929050565b600082620006fd575060016200079c565b816200070c575060006200079c565b8160018114620007255760028114620007305762000750565b60019150506200079c565b60ff8411156200074457620007446200068d565b50506001821b6200079c565b5060208310610133831016604e8410600b841016171562000775575081810a6200079c565b620007818383620006a3565b80600019048211156200079857620007986200068d565b0290505b92915050565b6000620007b08383620006ec565b9392505050565b60805160a05160c051611d236200086c600039600081816103f901528181610bd501528181610cd701528181610e960152610f960152600081816102fc0152818161062a015281816108b701528181610dca015281816111cb0152818161137001526116b001526000818161022601528181610426015281816104870152818161060001528181610e0401528181610ecc01528181610f16015281816111430152818161122201526115eb0152611d236000f3fe608060405234801561001057600080fd5b50600436106101285760003560e01c80631b9b8aa71461012d5780631ffc735d1461015357806324a47aeb146101665780633bfa6fce146101795780633e1a8cc1146101815780634d60dea0146101895780634ee3ab51146101925780635bf1fa4d1461019c57806360fd4010146101af57806369e7c586146101d0578063715018a6146101f35780638129fc1c146101fd57806381d6a24a146102055780638858718e146102215780638da5cb5b14610248578063a27154ba14610268578063b6a64acd14610270578063c00bdbcc1461027e578063c15da65b14610291578063d9c55ce1146102a4578063dda89a6e146102ac578063e93fb4d4146102b6578063ed3adab3146102c9578063f2fde38b146102dc575b600080fd5b61014061013b3660046119de565b6102ef565b6040519081526020015b60405180910390f35b6101406101613660046119de565b6103a9565b6101406101743660046119de565b6104d6565b6101406108a9565b6101406108f7565b61014060665481565b6101406101d45481565b6101406101aa3660046119f7565b610953565b6101406101bd3660046119de565b6101b16020526000908152604090205481565b6101d3546101e390610100900460ff1681565b604051901515815260200161014a565b6101fb610a6f565b005b6101fb610a83565b6101d5546066546040805192835260208301919091520161014a565b6101407f000000000000000000000000000000000000000000000000000000000000000081565b610250610b94565b6040516001600160a01b03909116815260200161014a565b610140602081565b6101d3546101e39060ff1681565b6101fb61028c3660046119de565b610ba3565b6101fb61029f3660046119de565b610c1f565b6101fb610e8c565b6101406101d65481565b6101406102c43660046119de565b610fd3565b6101406102d73660046119de565b611054565b6101fb6102ea366004611a19565b61106c565b6101d654600090610320837f0000000000000000000000000000000000000000000000000000000000000000611b43565b101561038d5760405162461bcd60e51b815260206004820152603160248201527f41636351756575653a206765744d61696e526f6f743a205f6465707468206d756044820152700e6e840c4ca40d0d2ced040cadcdeeaced607b1b60648201526084015b60405180910390fd5b6101b282602181106103a1576103a1611b4f565b015492915050565b60006103b36110e2565b6101d6546103c2836000611141565b6103cd816001611b65565b6101d6556103de6101b26000611932565b60006101d4556101d3805460ff191690556101d65461041e907f000000000000000000000000000000000000000000000000000000000000000090611b7d565b6104ce5760677f00000000000000000000000000000000000000000000000000000000000000006021811061045557610455611b4f565b60040201546066805460009081526101b1602052604081209290925580549161047d83611b9f565b90915550606790507f0000000000000000000000000000000000000000000000000000000000000000602181106104b6576104b6611b4f565b6004020160008091018190556104ce9060eb90611932565b90505b919050565b60006104e06110e2565b6000821161053c5760405162461bcd60e51b8152602060048201526024808201527f41636351756575653a205f6465707468206d757374206265206d6f72652074686044820152630616e20360e41b6064820152608401610384565b6101d35460ff1661059e5760405162461bcd60e51b81526020600482015260386024820152600080516020611cce83398151915260448201527764206265666f72652063616c6c696e67206d65726765282960401b6064820152608401610384565b60208211156105fe5760405162461bcd60e51b815260206004820152602660248201527f41636351756575653a205f6465707468206d757374206265206c7465204d41586044820152650be888aa0a8960d31b6064820152608401610384565b7f00000000000000000000000000000000000000000000000000000000000000005b6101d65461064e827f0000000000000000000000000000000000000000000000000000000000000000611b43565b106106585761066a565b8061066281611b9f565b915050610620565b808310156106cd5760405162461bcd60e51b815260206004820152602a60248201527f41636351756575653a205f6465707468206d7573742062652067746520746865604482015269040a6a4a840c8cae0e8d60b31b6064820152608401610384565b8083141561070a576101d4546101b284602181106106ed576106ed611b4f565b015550506101d3805461ff0019166101001790556101d454919050565b6101d454815b84811015610878576000610723826112ab565b60655490915060ff16156107c357610739611941565b838152602081018290526040516362a361bb60e01b815273__$c6e409f5c6bff7020676808cc3963e859e$__906362a361bb9061077a908490600401611bba565b602060405180830381865af4158015610797573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107bb9190611beb565b935050610865565b6107cb61195f565b838152602081018290526040808201839052606082018390526080820183905251639cfced9760e01b815273__$cedc09603cb2be64c780c22aabaab86809$__90639cfced9790610820908490600401611c04565b602060405180830381865af415801561083d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108619190611beb565b9350505b508061087081611b9f565b915050610710565b50806101b2856021811061088e5761088e611b4f565b01556101d3805461ff00191661010017905591506104d19050565b600060015b6066546108db827f0000000000000000000000000000000000000000000000000000000000000000611b43565b106108e557919050565b806108ef81611b9f565b9150506108ae565b6101d35460009060ff1661094b5760405162461bcd60e51b81526020600482015260276024820152600080516020611cce8339815191526044820152661908199a5c9cdd60ca1b6064820152608401610384565b506101d45490565b600061095d61195f565b6067846021811061097057610970611b4f565b600402015481526067846021811061098a5761098a611b4f565b60040201600101548160016020020152606784602181106109ad576109ad611b4f565b60040201600201548160026020020152606784602181106109d0576109d0611b4f565b60040201600301548160036020020152828160046020020152604051639cfced9760e01b815260009073__$cedc09603cb2be64c780c22aabaab86809$__90639cfced9790610a23908590600401611c04565b602060405180830381865af4158015610a40573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a649190611beb565b925050505b92915050565b610a776110e2565b610a8160006112c1565b565b600054610100900460ff1615808015610aa35750600054600160ff909116105b80610abd5750303b158015610abd575060005460ff166001145b610b205760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b6064820152608401610384565b6000805460ff191660011790558015610b43576000805461ff0019166101001790555b610b4b611313565b8015610b91576000805461ff0019169055604051600181527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024989060200160405180910390a15b50565b6033546001600160a01b031690565b610bab6110e2565b6066805460009081526101b16020526040812083905581549190610bce83611b9f565b91905055507f00000000000000000000000000000000000000000000000000000000000000006101d66000828254610c069190611b65565b909155505060006101d455506101d3805460ff19169055565b610c276110e2565b6101d35460ff1615610c855760405162461bcd60e51b815260206004820152602160248201527f41636351756575653a20737562747265657320616c7265616479206d657267656044820152601960fa1b6064820152608401610384565b60006101d65411610cd55760405162461bcd60e51b815260206004820152601a60248201527941636351756575653a206e6f7468696e6720746f206d6572676560301b6044820152606401610384565b7f00000000000000000000000000000000000000000000000000000000000000006101d654610d049190611b7d565b15610d1157610d11610e8c565b60665460011415610d3b57610d266000610fd3565b6101d4556101d3805460ff1916600117905550565b6000610d456108a9565b6101d5549091506000905b606654811015610dc1578315801590610d6857508382145b15610d735750505050565b610d8a610d826101d554610fd3565b600085611342565b6101d58054906000610d9b83611b9f565b91905055508180610dab90611b9f565b9250508080610db990611b9f565b915050610d50565b506000610dee837f0000000000000000000000000000000000000000000000000000000000000000611b43565b90506066546101d5541415610e58576000610e287f00000000000000000000000000000000000000000000000000000000000000006112ab565b6066549091505b82811015610e5557610e4382600087611342565b80610e4d81611b9f565b915050610e2f565b50505b61010c8360218110610e6c57610e6c611b4f565b60040201600001546101d45550506101d3805460ff191660011790555050565b610e946110e2565b7f00000000000000000000000000000000000000000000000000000000000000006101d654610ec39190611b7d565b610f0857610ef07f00000000000000000000000000000000000000000000000000000000000000006112ab565b60665460009081526101b16020526040902055610f79565b610f1260006115e9565b60677f000000000000000000000000000000000000000000000000000000000000000060218110610f4557610f45611b4f565b600402015460665460009081526101b16020526040812091909155610f6c9060679061197d565b610f796101b26000611932565b60006066546001610f8a9190611b65565b60668190559050610fbb7f000000000000000000000000000000000000000000000000000000000000000082611c2c565b6101d6555060006101d4556101d3805460ff19169055565b600081606654116110405760405162461bcd60e51b815260206004820152603160248201527f41636351756575653a205f696e646578206d75737420726566657220746f206160448201527020636f6d706c657465207375627472656560781b6064820152608401610384565b5060009081526101b1602052604090205490565b6101b2816021811061106557600080fd5b0154905081565b6110746110e2565b6001600160a01b0381166110d95760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b6064820152608401610384565b610b91816112c1565b336110eb610b94565b6001600160a01b031614610a815760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610384565b7f00000000000000000000000000000000000000000000000000000000000000008111156111ab5760405162461bcd60e51b81526020600482015260176024820152761058d8d45d595d594e881a5b9d985b1a59081b195d995b604a1b6044820152606401610384565b600060eb82602181106111c0576111c0611b4f565b015490506111ef60017f0000000000000000000000000000000000000000000000000000000000000000611c4b565b811461127457826067836021811061120957611209611b4f565b60040201826004811061121e5761121e611b4f565b01557f0000000000000000000000000000000000000000000000000000000000000000821461126f5760eb826021811061125a5761125a611b4f565b01805490600061126983611b9f565b91905055505b505050565b61127e82846117c4565b925060eb826021811061129357611293611b4f565b6000910155816112a281611b9f565b925050506111ab565b60006101d782602181106103a1576103a1611b4f565b603380546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b600054610100900460ff1661133a5760405162461bcd60e51b815260040161038490611c62565b610a81611902565b8082111561134f57505050565b6000610190836021811061136557611365611b4f565b0154905061139460017f0000000000000000000000000000000000000000000000000000000000000000611c4b565b81146113f3578361010c84602181106113af576113af611b4f565b6004020182600481106113c4576113c4611b4f565b015561019083602181106113da576113da611b4f565b0180549060006113e983611b9f565b91905055506115e3565b60655460009060ff16156114ae57611409611941565b61010c856021811061141d5761141d611b4f565b600490810291909101548252602082018790526040516362a361bb60e01b815273__$c6e409f5c6bff7020676808cc3963e859e$__916362a361bb9161146591859101611bba565b602060405180830381865af4158015611482573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906114a69190611beb565b9150506115b3565b6114b661195f565b60005b838160ff16101561151e5761010c86602181106114d8576114d8611b4f565b600402018160ff16600481106114f0576114f0611b4f565b0154828260ff166005811061150757611507611b4f565b60200201528061151681611cad565b9150506114b9565b508581846005811061153257611532611b4f565b6020020152604051639cfced9760e01b815273__$cedc09603cb2be64c780c22aabaab86809$__90639cfced979061156e908490600401611c04565b602060405180830381865af415801561158b573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906115af9190611beb565b9150505b61019084602181106115c7576115c7611b4f565b60009101556115e1816115db866001611b65565b85611342565b505b50505050565b7f0000000000000000000000000000000000000000000000000000000000000000811015610b9157600060eb826021811061162657611626611b4f565b01549050801561179957600061163a61195f565b6000611645856112ab565b905060005b848160ff1610156116ae576067866021811061166857611668611b4f565b600402018160ff166004811061168057611680611b4f565b0154838260ff166005811061169757611697611b4f565b6020020152806116a681611cad565b91505061164a565b7f00000000000000000000000000000000000000000000000000000000000000008160ff1610156117065781838260ff16600581106116ef576116ef611b4f565b6020020152806116fe81611cad565b9150506116ae565b604051639cfced9760e01b815273__$cedc09603cb2be64c780c22aabaab86809$__90639cfced979061173d908690600401611c04565b602060405180830381865af415801561175a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061177e9190611beb565b93506117948461178f886001611b65565b611141565b505050505b60eb82602181106117ac576117ac611b4f565b6000910155816117bb81611b9f565b925050506115e9565b60006117ce61195f565b606784602181106117e1576117e1611b4f565b60040201548152606784602181106117fb576117fb611b4f565b600402016001015481600160200201526067846021811061181e5761181e611b4f565b600402016002015481600260200201526067846021811061184157611841611b4f565b60040201600301548160036020020152828160046020020152604051639cfced9760e01b815260009073__$cedc09603cb2be64c780c22aabaab86809$__90639cfced9790611894908590600401611c04565b602060405180830381865af41580156118b1573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906118d59190611beb565b9050606785602181106118ea576118ea611b4f565b6004020160006118fa919061198c565b949350505050565b600054610100900460ff166119295760405162461bcd60e51b815260040161038490611c62565b610a81336112c1565b50610b919060218101906119a8565b60405180604001604052806002906020820280368337509192915050565b6040518060a001604052806005906020820280368337509192915050565b50610b919060848101906119c1565b5060008155600101600081556001016000815560010160009055565b5b808211156119bd57600081556001016119a9565b5090565b808211156119bd5760006119d5828261198c565b506004016119c1565b6000602082840312156119f057600080fd5b5035919050565b60008060408385031215611a0a57600080fd5b50508035926020909101359150565b600060208284031215611a2b57600080fd5b81356001600160a01b0381168114611a4257600080fd5b9392505050565b634e487b7160e01b600052601160045260246000fd5b600181815b80851115611a9a578160001904821115611a8057611a80611a49565b80851615611a8d57918102915b93841c9390800290611a64565b509250929050565b600082611ab157506001610a69565b81611abe57506000610a69565b8160018114611ad45760028114611ade57611afa565b6001915050610a69565b60ff841115611aef57611aef611a49565b50506001821b610a69565b5060208310610133831016604e8410600b8410161715611b1d575081810a610a69565b611b278383611a5f565b8060001904821115611b3b57611b3b611a49565b029392505050565b6000611a428383611aa2565b634e487b7160e01b600052603260045260246000fd5b60008219821115611b7857611b78611a49565b500190565b600082611b9a57634e487b7160e01b600052601260045260246000fd5b500690565b6000600019821415611bb357611bb3611a49565b5060010190565b60408101818360005b6002811015611be2578151835260209283019290910190600101611bc3565b50505092915050565b600060208284031215611bfd57600080fd5b5051919050565b60a08101818360005b6005811015611be2578151835260209283019290910190600101611c0d565b6000816000190483118215151615611c4657611c46611a49565b500290565b600082821015611c5d57611c5d611a49565b500390565b6020808252602b908201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960408201526a6e697469616c697a696e6760a81b606082015260800190565b600060ff821660ff811415611cc457611cc4611a49565b6001019291505056fe41636351756575653a207375627472656573206d757374206265206d65726765a264697066735822122035d3c327cb697e983233470463d98dc00de7c855eb5feb0e729abb045039bd0564736f6c634300080a0033";

type StateTreeConstructorParams =
  | [linkLibraryAddresses: StateTreeLibraryAddresses, signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: StateTreeConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => {
  return (
    typeof xs[0] === "string" ||
    (Array.isArray as (arg: any) => arg is readonly any[])(xs[0]) ||
    "_isInterface" in xs[0]
  );
};

export class StateTree__factory extends ContractFactory {
  constructor(...args: StateTreeConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      const [linkLibraryAddresses, signer] = args;
      super(
        _abi,
        StateTree__factory.linkBytecode(linkLibraryAddresses),
        signer
      );
    }
  }

  static linkBytecode(linkLibraryAddresses: StateTreeLibraryAddresses): string {
    let linkedBytecode = _bytecode;

    linkedBytecode = linkedBytecode.replace(
      new RegExp("__\\$c6e409f5c6bff7020676808cc3963e859e\\$__", "g"),
      linkLibraryAddresses["contracts/AccQueue.sol:PoseidonT3"]
        .replace(/^0x/, "")
        .toLowerCase()
    );

    linkedBytecode = linkedBytecode.replace(
      new RegExp("__\\$cedc09603cb2be64c780c22aabaab86809\\$__", "g"),
      linkLibraryAddresses["contracts/AccQueue.sol:PoseidonT6"]
        .replace(/^0x/, "")
        .toLowerCase()
    );

    return linkedBytecode;
  }

  override deploy(
    _subDepth: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<StateTree> {
    return super.deploy(_subDepth, overrides || {}) as Promise<StateTree>;
  }
  override getDeployTransaction(
    _subDepth: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_subDepth, overrides || {});
  }
  override attach(address: string): StateTree {
    return super.attach(address) as StateTree;
  }
  override connect(signer: Signer): StateTree__factory {
    return super.connect(signer) as StateTree__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): StateTreeInterface {
    return new utils.Interface(_abi) as StateTreeInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): StateTree {
    return new Contract(address, _abi, signerOrProvider) as StateTree;
  }
}

export interface StateTreeLibraryAddresses {
  ["contracts/AccQueue.sol:PoseidonT3"]: string;
  ["contracts/AccQueue.sol:PoseidonT6"]: string;
}
