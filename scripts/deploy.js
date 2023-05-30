const ethers = require('ethers');
require('dotenv').config();

async function main() {

  const url = process.env.AlCHEMY_TESTNET_RPC_URL;


  const provider = new ethers.providers.JsonRpcProvider(url);

  let privateKey = process.env.TESTNET_PRIVATE_KEY;

  let wallet = new ethers.Wallet(privateKey, provider);

   // Deploy first smart contract (NewToken)
   let newTokenArtifacts = await hre.artifacts.readArtifact("NewToken");
   let factory1 = new ethers.ContractFactory(newTokenArtifacts.abi, newTokenArtifacts.bytecode, wallet);
   let newToken = await factory1.deploy(10000000);
   console.log("NewToken address:", newToken.address);
   await newToken.deployed();

   //Deploy second smart contract(Company)
   let companyArtifacts = await hre.artifacts.readArtifact("Company");
   let factory2 = new ethers.ContractFactory(companyArtifacts.abi, companyArtifacts.bytecode, wallet);
   let company = await factory2.deploy();
   console.log("Company address:", company.address);
   await company.deployed();


   //Deploy third smart contract(Dao)
   let daoArtifacts = await hre.artifacts.readArtifact("Dao");
   let factory3 = new ethers.ContractFactory(daoArtifacts.abi, daoArtifacts.bytecode, wallet);
   let dao = await factory3.deploy(company.address,newToken.address);
   console.log("Dao address:", dao.address);
   await company.deployed();

}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
});