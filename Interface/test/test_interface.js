const Counter = artifacts.require("Counter");
const InterfaceContract = artifacts.require("InterfaceContract");
const Uniswap = artifacts.require("Uniswap");

contract("Counter Contract", (accounts) => {
    it ("test counter contract", async() => {
        const counterInstance = await Counter.deployed();
        await counterInstance.increment();
        let count = await counterInstance.count();
        assert.equal(count, 1, "must the count is 1.");
        console.log("This is increased counts: ",count)
    })
})

contract("Interface Contract", (accounts) => {
    it ("test interface contract", async() => {
        const interfaceInstance = await InterfaceContract.deployed();
        const counterInstance = await Counter.deployed();
        await interfaceInstance.incrementCounter(counterInstance.address);
        await interfaceInstance.incrementCounter(counterInstance.address);
        let count = await interfaceInstance.getCounter(counterInstance.address);
        assert.equal(count, 2, "must the count is 2.");
        console.log("This is increased counts: ",count)
    })
})

contract("Uniswap Contract", () => {
    it ("test uniswap contract", async() => {
        const uniswapInstance = await Uniswap.deployed();
        const reserves = await uniswapInstance.getTokenReserves();
        console.log(reserves[0]);
    })
})