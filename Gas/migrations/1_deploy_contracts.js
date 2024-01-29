const Gas = artifacts.require("Gas");

module.exports = function (deployer) {
    deployer.deploy(Gas);
};