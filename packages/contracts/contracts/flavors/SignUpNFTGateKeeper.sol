// SPDX-License-Identifier: MIT
pragma solidity ^0.8.1;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import { IInitialVoiceCreditProxy } from "./IInitialVoiceCreditProxy.sol";
import { ISignUpGatekeeper } from "./ISignUpGatekeeper.sol";

contract SignUpNFTGatekeeper is ISignUpGatekeeper, Ownable , IInitialVoiceCreditProxy {
    uint256 internal balance;
    address public maci;
    ERC1155 public nft;

    mapping(uint256 => bool) internal registeredTokenIds;

    constructor(ERC1155 _token, uint256 _balance) Ownable() {
        nft = _token;
        balance = _balance;
    }

    /*
     * Adds an uninitialised MACI instance to allow for token singups
     * @param _maci The MACI contract interface to be stored
     */
    function setMaciInstance(address _maci) public override onlyOwner {
        maci = _maci;
    }

    /*
     * Registers the user if they own the token with the token ID encoded in
     * _data. Throws if the user is does not own the token or if the token has
     * already been used to sign up.
     * @param _user The user's Ethereum address.
     * @param _data The ABI-encoded tokenId as a uint256.
     */
    function register(address _user, bytes memory _data) public override {
        require(
            address(maci) == msg.sender,
            "SignUpTokenGatekeeper: only specified MACI instance can call this function"
        );
        // Decode the given _data bytes into a uint256 which is the token ID
        uint256 tokenId = abi.decode(_data, (uint256));

        // Check if the user owns the token
        require(
            nft.balanceOf(_user, tokenId) >= 1,
            "SignUpTokenGatekeeper: this user does not own the token"
        );

        // Check if the token has already been used
        bool alreadyRegistered = registeredTokenIds[tokenId];
        require(
            alreadyRegistered == false,
            "SignUpTokenGatekeeper: this token has already been used to sign up"
        );

        // Mark the token as already used
        registeredTokenIds[tokenId] = true;
    }

    function getVoiceCredits(
    address,
    bytes memory
  ) public view override returns (uint256) {
    return balance;
  }
}
