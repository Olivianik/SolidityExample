// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

contract Error {
    function testRequire(uint _i) public pure {
        require(_i > 10, "must larger than 10!");
    }

    function testRevert(uint _i) public pure {
        if(_i <= 20) {
            revert("reverting...must larger than 10!");
        }
    }

    error withdrawError(uint balance, uint withdrawAmount);

    function testWithdrawError(address _wallet, uint _withdrawAmount) public view {
        uint balance = _wallet.balance;
        if(balance < _withdrawAmount) {
            revert withdrawError({balance: balance, withdrawAmount: _withdrawAmount});
        }
    }
}
