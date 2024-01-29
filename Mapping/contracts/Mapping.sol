// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

contract Mapping {
    // mapping from address to uint
    mapping(address => uint) public myMap;

    function getMap(address _addr) public view returns(uint) {
        return myMap[_addr];
    }

    function setMap(address _addr, uint _val) public {
        myMap[_addr] = _val;
    }

    function remove(address _addr) public {
        delete myMap[_addr];
    }
}

contract NestedMapping {
    // Nested mapping (mapping from address to another mapping)
    mapping(address => mapping(uint => bool)) public nestMap;

    function getNestMap(address _addr, uint _val) public view returns(bool) {
        return nestMap[_addr][_val];
    }

    function setNestMap(address _addr, uint _val, bool boo) public {
        nestMap[_addr][_val] = boo;
    }

    function removeNestMap(address _addr, uint _val) public {
        delete nestMap[_addr][_val];
    }
}