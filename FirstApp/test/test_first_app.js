const Counter = artifacts.require("Counter");

contract("This is Counter.", (accounts) => {
    it("test initial value", async() => {
        const CounterInstance = await Counter.deployed();
        const value = await CounterInstance.get();
        assert.equal(value, 0, "Then what is the initial value?");
        console.log("The initial value is like this: ", value);
    });

    it("test get and inc and so on", async() => {
        const CounterInstance = await Counter.deployed();
        await CounterInstance.inc();
        const value = await CounterInstance.get();
        assert.equal(value, 1, "Then what is the initial value?");
        console.log("The increased value is like this: ", value);
    });

    it("test the set funtion", async() => {
        const CounterInstance = await Counter.deployed();
        await CounterInstance.set(10);
        const value = await CounterInstance.get();
        assert.equal(value, 10, "Then what is the seted value");
        console.log("the seted value is something like this: ", value);
    })
})