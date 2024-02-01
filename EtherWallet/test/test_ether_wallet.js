const EtherWallet = artifacts.require("EtherWallet");

contract("EtherWallet", (accounts) => {
  let etherWalletInstance;

  before(async () => {
    etherWalletInstance = await EtherWallet.deployed();
  });

  it("should set owner correctly", async () => {
    const owner = await etherWalletInstance.owner();
    console.log(owner);
    assert.equal(owner, accounts[0], "Owner is not set correctly");
  });

  it("should withdraw funds", async () => {
    etherWalletInstance = await EtherWallet.deployed();

    // const initialBalance = web3.utils.toBN(await web3.eth.getBalance(accounts[0]));
    const initialBalance = await web3.eth.getBalance(accounts[0]);
    console.log("initialBalance: ", initialBalance);
    const amount = web3.utils.toWei("0.1", "ether");
    console.log("amount: ", amount);
    await etherWalletInstance.withdraw(amount, { from: accounts[0] });
    const finalBalance = web3.utils.toBN(await web3.eth.getBalance(accounts[0]));
    console.log("final balance: ", finalBalance);
    assert.isTrue(finalBalance.sub(initialBalance).eq(amount), "Withdrawal failed");
  });
});
