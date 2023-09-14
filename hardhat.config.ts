import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "dotenv/config";

const {
  INFURA_API_KEY,
  ETHERSCAN_API_KEY,
  SEPOLIA_PRIVATE_KEY,
  MANTLE_PRIVATE_KEY,
} = process.env;

const config: HardhatUserConfig = {
  solidity: "0.8.19",
  networks: {
    "mantle-testnet": {
      url: "https://rpc.testnet.mantle.xyz/",
      accounts: [MANTLE_PRIVATE_KEY!],
    },
    sepolia: {
      url: `https://sepolia.infura.io/v3/${INFURA_API_KEY}`,
      accounts: [SEPOLIA_PRIVATE_KEY!],
    },
  },
  etherscan: {
    apiKey: {
      sepolia: ETHERSCAN_API_KEY!,
      "mantle-testnet": "xyz", //random value
    },
    customChains: [
      {
        network: "mantle-testnet",
        chainId: 5001,
        urls: {
          apiURL: "https://explorer.testnet.mantle.xyz/api",
          browserURL: "https://explorer.testnet.mantle.xyz",
        },
      },
    ],
  },
};

export default config;
