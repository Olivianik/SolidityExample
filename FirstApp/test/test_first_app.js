const Counter = artifacts.require("Counter");

contract("This is Counter.", (accounts) => {
    const CounterInstance = await Counter.deployed();
    await CounterInstance.get();
})