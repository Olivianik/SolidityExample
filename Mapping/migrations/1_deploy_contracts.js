const Mapping = artifacts.require("Mapping");
const NestedMapping = artifacts.require("NestedMapping");

module.exports = function (deployer) {
    deployer.deploy(Mapping);
    deployer.deploy(NestedMapping);
}