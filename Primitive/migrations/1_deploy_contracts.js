const Primitives = artifacts.require("Primitives");

module.exports = function (deployer) {
    deployer.deploy(Primitives);
}