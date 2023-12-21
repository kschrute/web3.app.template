// SPDX-License-Identifier: UNLICENSED
pragma solidity 0.8.18;

contract Subscription {
    address payable public owner;

    mapping(address => uint) public userSubscribedAt;

    event Subscribed(address user, uint when);

    constructor() payable {
        owner = payable(msg.sender);
    }

    function subscribe() public  {
        userSubscribedAt[msg.sender] = block.timestamp;

        emit Subscribed(msg.sender, block.timestamp);
    }
}
