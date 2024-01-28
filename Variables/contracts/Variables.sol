// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

contract Variables {
    // state variables that declared outside the function
    string public str = "this is string.";
    uint8 public num =  255;

    function akai() public {
        // local variavles that declared inside the function
        int8 local = -4;

        // some global functions
        uint timestamp = block.timestamp; // current block time stamp
        address sender = msg.sender; // address of the caller
    }
}