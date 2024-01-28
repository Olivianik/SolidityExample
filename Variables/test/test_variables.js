const Variables = artifacts.require("Variables");

contract("Variable", (accounts) => {
    it("test variables", async() => {
        const Instance = await Variables.deployed();
        const str = await Instance.str();
        console.log("This is str value: ", str);
        const num = await Instance.num();
        console.log("This is num value: ", num);
    })
});