
const main = async () => {

  //Call the contract -> we use the exact name of the contract
  const Transactions = await hre.ethers.getContractFactory("Transactions");
  //transactions is an instance of the contract Transactions
  const transactions = await Transactions.deploy( );

  await transactions.deployed();

  //We get the address of the contract deployed.
  console.log("Transactions deployed to:", transactions.address);
}


const runMain = async () => {
  try {
    await main();
    process.exit(0);

  } catch (error) {
    console.error(error);
    process.exit(1);

  }
}

runMain();
