const Variables = artifacts.require("Variables");

module.exports = function (deployer) {
    deployer.deploy(Variables);
}