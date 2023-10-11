// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "../lib/openzeppelin/contracts/5.0.0/token/ERC20/ERC20.sol";
import "../lib/openzeppelin/contracts/5.0.0/token/ERC20/extensions/ERC20Burnable.sol";
import "../lib/openzeppelin/contracts/5.0.0/token/ERC20/extensions/ERC20Permit.sol";
//import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
//import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Burnable.sol";
//import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Permit.sol";

contract WNat is ERC20, ERC20Burnable, ERC20Permit {
    event Deposit(address indexed dst, uint wad);
    event Withdrawal(address indexed src, uint wad);

    constructor() ERC20("Wrapped NAT", "NAT") ERC20Permit("Wrapped NAT") {}

    receive() external payable {
        deposit();
    }

    function deposit() public payable {
        _mint(msg.sender, msg.value);
        emit Deposit(msg.sender, msg.value);
    }

    function depositTo(address _recipient) external payable {
        require(_recipient != address(0), "Cannot deposit to zero address");
        _mint(_recipient, msg.value);
        emit Deposit(_recipient, msg.value);
    }

    function withdraw(uint256 _amount) external {
        _burn(msg.sender, _amount);
        emit Withdrawal(msg.sender, _amount);
        payable(msg.sender).transfer(_amount);
    }

    function withdrawFrom(address _owner, uint256 _amount) external {
        require(allowance(_owner, msg.sender) >= _amount, "allowance below zero");
        _approve(_owner, msg.sender, allowance(_owner, msg.sender) - _amount);
        _burn(_owner, _amount);
        emit Withdrawal(_owner, _amount);
        payable(msg.sender).transfer(_amount);
    }
}
