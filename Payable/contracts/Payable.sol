// RPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

contract Payable {
    address payable public owner;
    constructor() payable {
        owner = payable(msg.sender);
    }

    function withdraw() public {
        uint amount = address(this).balance;
        (bool success, ) = owner.call{value: amount}("");
        if(!success) {
            revert("failed");
        }
        
    }
}