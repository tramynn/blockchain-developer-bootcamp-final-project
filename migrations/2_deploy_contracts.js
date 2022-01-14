const DevDoggieToken = artifacts.require("./DevDoggieToken.sol");

module.exports = function (deployer) {
    deployer.deploy(DevDoggieToken);
};