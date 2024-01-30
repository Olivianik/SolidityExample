const Error = artifacts.require("Error");

module.exports = function (deployer) {
    deployer.deploy(Error);
}