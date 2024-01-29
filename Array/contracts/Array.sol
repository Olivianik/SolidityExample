// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

contract Array {
    string[] public strArray;
    string[] public strArray1 = ['akai', 'siroi', 'kuroi'];
    string[5] public strFixedArray;

    function getArrayMember(uint index) public view returns(string memory) {
        return strArray1[index];
    }

    function getWholeArray() public view returns(string[] memory) {
        return strArray;
    }

    function push(string calldata _str) public {
        strArray.push(_str);
    }

    function pop() public {
        strArray.pop();
    }

    function getLength() public view returns(uint){
        return strArray.length;
    }

    function removeCertainMember(uint index) public {
        delete strArray[index];
    }
}

contract removeMember {
    uint[] public arr;

    function removeMem(uint index) public {
        require(index < arr.length, "Index is out of bound");
        for(uint i = index; i < arr.length - 1; i++) {
            arr[i] = arr[i + 1];
        }
        arr.pop();
    }   
    function removeMemFromArr(uint[] memory arrs, uint index) public {
        require(index < arrs.length, "Index is out of bound");
        require(arrs.length > 0, "Array is empty"); // Add a check for non-empty array
        for(uint i = index; i < arrs.length - 1; i++) {
            arrs[i] = arrs[i + 1];
        }
        arr.pop();
    }  
}