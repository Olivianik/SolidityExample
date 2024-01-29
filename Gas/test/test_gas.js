const Gas = artifacts.require("Gas");

contract("Gas Test", (accounts) => {
    it("Infinite execution until no money", async() => {
        const GasInstance = await Gas.deployed();
        const i = GasInstance.i();
        console.log("This is i value: ", i);
        await GasInstance.inc();
        console.log("Now you might be begger!");
    });
});