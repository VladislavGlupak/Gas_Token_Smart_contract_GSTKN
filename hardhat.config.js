require("@nomiclabs/hardhat-waffle");
require("dotenv").config();
require("@nomiclabs/hardhat-etherscan");
require("solidity-coverage");

const RINKEBY_RPC_URL = process.env.RINKEBY_RPC_URL || "provide address";
const PRIVATE_KEY = process.env.PRIVATE_KEY || "provide key";
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY || "provide key";

module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    rinkeby: {
      url: RINKEBY_RPC_URL,
      accounts: [PRIVATE_KEY],
      chainId: 4,
    },
    localhost: {
      url: "http://127.0.0.1:8545",
      chainId: 31337,
    },
    ganache: {
      url: "http://127.0.0.1:8545",
      chainId: 1337,
    },
  },
  solidity: "0.8.7",
  etherscan: {
    apiKey: ETHERSCAN_API_KEY,
  },
};
