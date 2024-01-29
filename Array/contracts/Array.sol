// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

contract Array {
    string[] public strArray;
    string[] public strArray1 = ['akai', 'siroi', 'kuroi'];
    string[5] public strFixedArray;

    function getArrayMember(uint index) public view returns(string) {
        return strArray1[index];
    }

    function getWholeArray() public view returns(string[] memory) {
        return strArray;
    }

    function push(string _str) public {
        strArray.push(_str);
    }

    function pop() public {
        strArray.pop();
    }

    function getLength() public {
        return strArray.length;
    }

    function removeCertainMember(uint index) public {
        strArray.remove(index);
    }
}