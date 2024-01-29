// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

contract Variables {
    // state variables that declared outside the function
    uint public num =  255;

    // set the state variable's value, this is transaction
    function set(uint _num) public {
        // set the state variable
        num = _num;
    }

    // get the state variable without sending transaction
    function get() public view returns(uint) {
        return num;
    }
}