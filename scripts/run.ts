import { ethers } from "hardhat";

async function main() {
  const gameContractFactory = await ethers.getContractFactory("MyEpicGame");
  const gameContract = await gameContractFactory.deploy(
    ["Penguin", "Gecko", "Girl"],
    [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIHGZhjXywN7Pldbs3blKPz6u_85WyNx-3cfdBpTVoYlSNJPHMhVSAziiUKuFB_VG6WOA&usqp=CAU",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTm2MSkajrsSR64BNELQ8O1YYro2-GpX84Y653-Z5sbxeXRoQWot7-F7MUmApihDi9x5qg&usqp=CAU",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhO5a9xefszUVVKuu3ruc72iO98NxOEhnldwRH1Vl0TXjrXNZknXstcMW0rA681AvzLx4&usqp=CAU",
    ],
    [1000, 2000, 3000], // HP values
    [1000, 500, 250] // Attack damage values
  );
  await gameContract.deployed();
  console.log("Contrato implantado no endereço:", gameContract.address);
}

async function runMain() {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
}

runMain();
