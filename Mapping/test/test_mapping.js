const Mapping = artifacts.require("Mapping");
const NestedMapping = artifacts.require("NestedMapping");

contract("Mapping test", (accounts) => {
    it("Map test", async () => {
        const MappingInstance = await Mapping.deployed();
        
        const current = await MappingInstance.getMap(accounts[0]);
        console.log("This is current Mapping value", current);
        await MappingInstance.setMap(accounts[0], 920);
        const setedValue = await MappingInstance.getMap(accounts[0]); 
        assert.equal(setedValue, 920, "Maybe the seted value is 920, huh?");
        console.log("You set the the certain address value to this: ", setedValue);
        await MappingInstance.remove(accounts[0]);
        const removedValue = await MappingInstance.getMap(accounts[0]);
        console.log("after removing value, the value setted like this: ", removedValue);
    });
});

contract("NestedMapping test", (accounts) => {    
    it("NestMap test", async () => {
        const NestedMappingInstance = await NestedMapping.deployed();

        const currentNestValue = await NestedMappingInstance.getNestMap(accounts[1], 123);
        console.log("current nest mapping value is something like this: ", currentNestValue);
        await NestedMappingInstance.setNestMap(accounts[1], 123, true);
        const setedCurrentNestValue = await NestedMappingInstance.getNestMap(accounts[1], 123);
        assert.equal(setedCurrentNestValue, true, "Maybe the value is true, huh?");
        console.log("the seted nested mapping value is something like this: ", setedCurrentNestValue);
        await NestedMappingInstance.removeNestMap(accounts[1], 123);
        const removedNestedValue = await NestedMappingInstance.getNestMap(accounts[1], 123);
        assert.equal(removedNestedValue, false, "the value after removed maybe false, huh?");
        console.log("the value after remove is something like this: ", removedNestedValue);
    })
})