const { ethers } = require("hardhat");


//Deploy Company Contract

async function deploy() {
    const ContractName = await ethers.getContractFactory("Company");
    const contract = await ContractName.deploy();
    console.log("Company Contract deployed to address:", contract.address);
  }
  
  // deploy();

async function interact() {
  const contractAddress = "0x72e6d982Fd46FfB0BB697D0C21A9d0cC9A6cB1b9"; 
  const contract = await ethers.getContractAt("Company", contractAddress);
  
  // Set user data
  // await contract.setUser(
  //   "Jay",
  //   "jay710",
  //   "jay712@gmail.com",
  //   " patel Brothers",
  //   "India",
  //   " "
  // );
  
  // Get user data
  // const user = await contract.getUser("0xc1b385F5B31bd5acc60d3dBd04fF5A65cFd18bdd"); 
  // console.log("User data:", user);
  
  // Issue credit to a company
  // await contract.issueCredit("0xc1b385F5B31bd5acc60d3dBd04fF5A65cFd18bdd", 10); 
  
  // Create an order
  //  await contract.createOrder(2, "100000000000000000", "0xc1b385F5B31bd5acc60d3dBd04fF5A65cFd18bdd"); 
  
    // Buy credit from an order
  // await contract.buyCredit(1, { value: "200000000000000000"});

  //set dao Address
  await contract.setDaoAddress("0x2fc5dA502D72E644BA41158f8bb9a035970Fa5De");   // DaoAddress
  
  // Get user's orders
  // const userOrders = await contract.getUserOrders("0xc1b385F5B31bd5acc60d3dBd04fF5A65cFd18bdd"); 
  // console.log("User orders:", userOrders);
  //   let userOrdersarr=[];
  // for(let i=0;i<userOrders.length;i++)
  // {
  //   const userOrdersDetails = await contract.orderStructMapping(userOrders[i]);
  //   userOrdersarr.push(userOrdersDetails);
  // }
  // console.log(userOrdersarr);

      // withdraw (Amount) from contract
  // await contract.withdrawFromContract("10000000000000000000");
}

interact()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
});
