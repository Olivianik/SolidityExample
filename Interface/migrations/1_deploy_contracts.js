const Counter = artifacts.require("Counter");
const InterfaceContract = artifacts.require("InterfaceContract");
const Uniswap = artifacts.require("Uniswap");

module.exports = function (deployer) {
    deployer.deploy(Counter);
    deployer.deploy(InterfaceContract);
    deployer.deploy(Uniswap);
}