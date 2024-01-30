// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

contract Counter {
    uint public count;

    function increment() external {
        count += 1;
    }
}

interface ICounter {
    function count() external view returns(uint);
    function increment() external;
}

contract InterfaceContract {
    function incrementCounter(address _counter) external {  // this function receives the _counter address that indicates the Contract using interface
        ICounter(_counter).increment();
    }

    function getCounter (address _counter) external view returns (uint) {
        return ICounter(_counter).count();
    }
}

// Uniswap
interface UniswapV2Factory {
    function getPair(address tokenA, address tokenB) external view returns (address pair);
}

interface UniswapV2Pair {
    function getReserves() external view returns (uint112 reserve0, uint112 reserve1, uint32 blockTimestampLast);
}

contract Uniswap {
    address private factory = 0x9515f0745556b30216A00F182a8fe5c1c2503e87;
    address private dai = 0x77EFa3499341327F18a6D0d259129A528e5bdF24;
    address private weth = 0xB49b3eb96c52E88208f070FC95e2D35309a7CACd;

    function getTokenReserves() external view returns (uint, uint) {
        address pair = UniswapV2Factory(factory).getPair(dai, weth);
        (uint reserve0, uint reserve1, ) = UniswapV2Pair(pair).getReserves();
        return (reserve0, reserve1);
    }
}