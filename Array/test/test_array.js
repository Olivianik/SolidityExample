const Array = artifacts.require("Array");
const removeMember = artifacts.require("removeMember");

contract("Array contract", (accounts) => {
    it("Array test", async() => {
        const ArrayInstance = await Array.deployed();
        const member2 = await ArrayInstance.getArrayMember(2);
        console.log("The member2 is ", member2);
        await ArrayInstance.push('sekai');
        await ArrayInstance.push('itami');
        await ArrayInstance.push('kanarazu');
        const wholeArray = await ArrayInstance.getWholeArray();
        console.log("The Array you just added is like this: ", wholeArray);
        await ArrayInstance.pop();
        await ArrayInstance.pop();
        const wholeArray1 = await ArrayInstance.getWholeArray();
        console.log("The remaining Array you just deleted is like this: ", wholeArray1);
        await ArrayInstance.removeCertainMember(0);
        const wholeArray2 = await ArrayInstance.getWholeArray();
        console.log("The remaining array is just like this: ", wholeArray2);
        await ArrayInstance.push('sekai');
        await ArrayInstance.push('itami');
        await ArrayInstance.push('kanarazu');
        const wholeArray3 = await ArrayInstance.getWholeArray();
        console.log("the wholeArray3 is like this: ", wholeArray3);

        // const testArray = [2, 3, 5, 1, 6];

        // const removeMemFromArrInstance = await removeMember.new();
        // await removeMemFromArrInstance.removeMemFromArr(testArray, 2);



    });
})