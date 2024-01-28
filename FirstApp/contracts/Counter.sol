// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

contract Counter {
    uint public count;

    function get() public view returns (uint) {
        return count;
    }

    function inc() public {
        count += 1;
    }

    function dec() public {
        count -= 1;
    }

    function reset() public {
        count = 0;
    }

    function set(uint _count) public {
        count = _count;
    }
}
