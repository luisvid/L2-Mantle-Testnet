
# Mantle L2 Testnet Deployment Project

This project details the process of deploying and verifying a contract on the Mantle L2 Testnet, specifically focusing on migrating from $BIT to $MNT tokens on the Goerli network, following the updates made on June 9, 2023. Below you will find information on the error encountered during the deployment, its solution, and the process to deploy on SEPOLIA and MANTLE networks.

## Getting Started

### Resources

1. [Onboarding to Mantle L2 Testnet Guide](https://mirror.xyz/0xmantle.eth/qIDSO3AsFnXmwVLSYfODZWOpK_0K01UdvR3ZxUCtCjw)
2. [Mantle Documentation](https://docs.mantle.xyz/network/for-devs/tutorials)

## Deployment

### Migrating from $BIT to $MNT on Goerli

With the v0.4.0 update on June 9, 2023, a new $MNT token contract was created on Goerli, serving as the native token of the Mantle ecosystem moving forward. The original guide referred to the $BIT token, but it has now been updated to the $MNT token.

**Notice:** While using the Faucet, you will be minting $MNT tokens instead of $BIT tokens. 

### Error Encountered During Deployment

While following the documentation, I encountered a `ProviderError` which stated there were too many arguments and expected at most 1. Here are the details:

#### Error

```
ProviderError: too many arguments, want at most 1
```

#### Solution

The error was most likely caused by an outdated ethereum node. Adding an explicit `gasLimit` to the deployment transaction solved this issue. The solution can be found in this [GitHub thread](https://github.com/NomicFoundation/hardhat/issues/4010). 

Here's how the deployment contract was modified:

```javascript
const token = await ethers.deployContract("Token", { gasLimit: "0x1000000" });
```

## Deployments

### SEPOLIA Network

The contract was locked with 0.001ETH and has an unlock timestamp of 1692140575. It was deployed to the address: 0x207a4aa6Ce02CE26193867D56343fFf336eE64ca

Verification command:

```sh
$ npx hardhat verify --network sepolia 0x207a4aa6Ce02CE26193867D56343fFf336eE64ca 1692140575
```

[View on Sepolia Etherscan](https://sepolia.etherscan.io/address/0x207a4aa6Ce02CE26193867D56343fFf336eE64ca#code)

### MANTLE Network

Use the [Mantle Testnet Faucet](https://faucet.testnet.mantle.xyz/) to get testnet ETH.

Deployment command:
```sh
➜  mantle-test hh run scripts/deploy.ts --network mantle-testnet
```

The contract was locked with 0.001ETH and has an unlock timestamp of 1692141128. It was deployed to the address: 0x207a4aa6Ce02CE26193867D56343fFf336eE64ca

Verification command:
```sh
$ npx hardhat verify --network mantle-testnet 0x207a4aa6Ce02CE26193867D56343fFf336eE64ca 1692141128
```

[View on Mantle Testnet Explorer](https://explorer.testnet.mantle.xyz/address/0x207a4aa6Ce02CE26193867D56343fFf336eE64ca#code)

---


### Sample Hardhat Project

This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, and a script that deploys that contract.

Try running some of the following tasks:

```shell
npx hardhat help
npx hardhat test
REPORT_GAS=true npx hardhat test
npx hardhat node
npx hardhat run scripts/deploy.ts
```
