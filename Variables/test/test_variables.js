const Variables = artifacts.require("Variables");

contract("Variable", (accounts) => {
    it("test variables", async() => {
        const Instance = await Variables.deployed();
        const num = await Instance.num();
        console.log("the initial num value is something like this: ", num);

        await Instance.set(100);
        const changed_num = await Instance.get();
        assert.equal(changed_num, 100, "the changed value must be 100??");
        console.log("I set the num value just like this: ", changed_num);
    })
});