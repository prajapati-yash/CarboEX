// Deploy script

const { ethers } = require("hardhat");

async function deploy() {
  const ContractName = await ethers.getContractFactory("NewToken");
  const contract = await ContractName.deploy("100000000000000000000000","1000000000000000000000");
  console.log("Token Contract deployed to address:", contract.address);
}

//  deploy();

// Interact script

async function interact() {
    const contractAddress = "0x9955a6b3b0025bc9B00246B38C94CFb42999E6d1";
    const contract = await ethers.getContractAt("NewToken", contractAddress);
    
    // // Call contract functions here
    // const transaction = await contract.mint("100000000000000000000000", { from: "0xc1b385F5B31bd5acc60d3dBd04fF5A65cFd18bdd" });
    // await transaction.wait(); // Wait for the transaction to be mined

      // Withdraw token from token address
      // await contract.withdrawTokenFromContract("1000000000000000000","0x197d8916358883c27faf296E75a89b0612Edd1CB");
    
    await contract.setTokenPrice("100000000000000000000"); // set Tokenprice

    // const tokenPrice = await contract.getTokenPrice();
    // console.log("Token price:", tokenPrice);

    // await contract.setadmin();    // set Admin
    
    // // Get transaction receipt
    // const receipt = await ethers.provider.getTransactionReceipt(transaction.hash);
    // console.log("Transaction receipt:", receipt);
    
    // check balance
    // const bal = await contract.balanceOf("0xdf1652EE4bFDE6212D7b0E76e06311D0bd2fBb9F"); //Contract address or metamask address
    // console.log(bal);
      
    //transfer token to Dao contract
    // await contract.tokenTransfer("0xdf1652EE4bFDE6212D7b0E76e06311D0bd2fBb9F","10000000000000000000000");

    // Withdraw (Amount) from address
    // await contract.withdrawFromContract("1000000000000000");
}

interact();















