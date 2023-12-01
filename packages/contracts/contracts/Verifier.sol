// SPDX-License-Identifier: MIT
pragma experimental ABIEncoderV2;
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/utils/cryptography/MessageHashUtils.sol";
import "@openzeppelin/contracts/utils/cryptography/ECDSA.sol";

contract Verifier {
    using ECDSA for bytes32;
    using MessageHashUtils for bytes32;

    uint256 constant chainId = 0;
//    address constant verifyingContract = 0x1C56346CD2A2Bf3202F771f50d3D14a367B48070;
    bytes32 constant salt = 0xf2d857f4a3edcb9b78b4d503bfe733db1e3f6cdc2b7971ee739626c97e86a558;

    string private constant EIP712_DOMAIN  = "EIP712Domain(string name,string version,uint256 chainId,address verifyingContract,bytes32 salt)";
    string private constant IDENTITY_TYPE = "Identity(uint256 userId,address wallet)";
    string private constant BID_TYPE = "Bid(uint256 amount,Identity bidder)Identity(uint256 userId,address wallet)";

    bytes32 private constant EIP712_DOMAIN_TYPEHASH = keccak256(abi.encodePacked(EIP712_DOMAIN));
    bytes32 private constant IDENTITY_TYPEHASH = keccak256(abi.encodePacked(IDENTITY_TYPE));
    bytes32 private constant BID_TYPEHASH = keccak256(abi.encodePacked(BID_TYPE));
//    bytes32 private constant DOMAIN_SEPARATOR = keccak256(abi.encode(
//        EIP712_DOMAIN_TYPEHASH,
//        keccak256("My amazing dApp"),
//        keccak256("1"),
//        chainId,
//        verifyingContract,
//        salt
//    ));

    // hash for EIP712, computed from contract address
    bytes32 DOMAIN_SEPARATOR;

    struct Identity {
        uint256 userId;
        address wallet;
    }

    struct Bid {
        uint256 amount;
        Identity bidder;
    }

    constructor() {
        DOMAIN_SEPARATOR = keccak256(abi.encode(
            EIP712_DOMAIN_TYPEHASH,
            keccak256("My amazing dApp"),
            keccak256("1"),
            chainId,
            this,
            salt
        ));
    }

    function hashIdentity(Identity memory identity) private pure returns (bytes32) {
        return keccak256(abi.encode(
            IDENTITY_TYPEHASH,
            identity.userId,
            identity.wallet
        ));
    }

    function hashBid(Bid memory bid) private view returns (bytes32){
        return keccak256(abi.encodePacked(
            "\x19\x01",
            DOMAIN_SEPARATOR,
            keccak256(abi.encode(
                BID_TYPEHASH,
                bid.amount,
                hashIdentity(bid.bidder)
            ))
        ));
    }

    function verify(uint8 sigV, bytes32 sigR, bytes32 sigS) public view returns (bool) {
        Identity memory bidder = Identity({
            userId: 323,
            wallet: 0x3333333333333333333333333333333333333333
        });

        Bid memory bid = Bid({
            amount: 100,
            bidder: bidder
        });

        return msg.sender == ecrecover(hashBid(bid), sigV, sigR, sigS);
    }

    function verifyMessage(string memory _message, bytes memory _signature) public view returns (bool) {
        bytes32 hash = keccak256(abi.encodePacked(_message));
        return msg.sender == hash.toEthSignedMessageHash().recover(_signature);
    }

    function verifyMessageRaw(bytes32 _hash, bytes memory _signature) public view returns (bool) {
        return msg.sender == _hash.toEthSignedMessageHash().recover(_signature);
    }
}
