// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");
const fs = require('fs');



async function main() {
  let [signer] =  await hre.ethers.getSigners()
  let deployer = signer.address;
  console.log("deployer:", deployer)
  let tx

  if(1){
    let nonce = await hre.ethers.provider.getTransactionCount(deployer)
    console.log("nonce:", nonce)
    tx = await signer.sendTransaction({to: deployer, gasPrice: 4e9, value: 1, nonce})
    await tx.wait()
    console.log("tx:", tx)
    //return 
  }







  let Bn128G1 = await hre.ethers.getContractFactory('Bn128G1')
  let sc = await Bn128G1.deploy();
  console.log("sc deployed to:", sc.target)
  // let sc = await hre.ethers.getContractAt('Bn128G1', '')

  //let s = "0x0bdf42b46bb6bda406dcf2e021f5db51da648c54206c0f81c4cf2626c88c0373"
  let s = "0xb51da648c54206c0f81c4cf2626c88c0373"
  tx = await sc.test(s, {gasLimit:1000000})
  console.log("tx:", tx)

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
