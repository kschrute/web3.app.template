// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.20;

contract Owned {
    address payable immutable owner;

    constructor() {
        owner = payable(msg.sender);
    }

    modifier onlyOwner {
        require(msg.sender == owner, "Only the contract owner can call this function");
        _;
    }
}

contract Mortal is Owned {
    function destroy() public onlyOwner {
        selfdestruct(owner);
    }
}

contract Faucet is Mortal {
    uint constant public AMOUNT = 0.1 ether;

    event Deposit(address indexed from, uint amount);
    event Withdrawal(address indexed to, uint amount);

    mapping(address => bool) public accountClaimed;

    receive() external payable {
        emit Deposit(msg.sender, msg.value);
    }

    function claim() public {
        require(!accountClaimed[msg.sender], "already claimed");
        require(address(this).balance >= AMOUNT, "insufficient balance");

        accountClaimed[msg.sender] = true;

        emit Withdrawal(msg.sender, AMOUNT);

        (bool success,) = msg.sender.call{value: AMOUNT}("");
        require(success, "send failed");
    }
}
