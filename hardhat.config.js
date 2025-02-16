require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();
require("hardhat-gas-reporter");

/** @type import('hardhat/config').HardhatUserConfig */

const SEPOLIA_RPC_URL = process.env.SEPOLIA_RPC_URL;
const PRIVATE_KEY = process.env.PRIVATE_KEY;

module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    sepolia: {
      url: SEPOLIA_RPC_URL,
      accounts: [PRIVATE_KEY],
      gas: 20000,
      gasPrice: 10000000000,
    },
    localhost: {
      url: "http://127.0.0.1:8545/",
      chainId: 31337
    },
  },
  solidity: "0.8.8",
  gasReporter: {
    enabled: true,
    outputFile: "gas-report.txt",
    noColors: true
  }
};
