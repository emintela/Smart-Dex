require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.9",
  netwroks:{
    hardhat:{
      forking:{
        url:'https://eth-mainnet.g.alchemy.com/v2/OspEaXXiwDtQLFSg-_3JKNw0o9myCmik'
      }
    }
  }
};
