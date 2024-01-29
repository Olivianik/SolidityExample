const Array = artifacts.require("Array");
const removeMember = artifacts.require("removeMember");

module.exports = function (deployer) {
    deployer.deploy(Array);
    deployer.deploy(removeMember);
}