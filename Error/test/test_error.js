const Error = artifacts.require("Error");

contract("Error Contract", (accounts) => {
    it("test error", async () => {
        const ErrorInstance = await Error.deployed();
        await ErrorInstance.testRequire(15);
        await ErrorInstance.testRevert(15);
    })
});