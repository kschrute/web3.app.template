// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.20;

contract Counter {
    uint256 public number;

    event Updated(address indexed sender, uint256 value);

    function setNumber(uint256 newNumber) public {
        number = newNumber;
        emit Updated(msg.sender, number);
    }

    function increment() public {
        number++;
        emit Updated(msg.sender, number);
    }
}
