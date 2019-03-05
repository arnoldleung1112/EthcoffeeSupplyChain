# Supply chain & data auditing

This repository containts an Ethereum DApp that demonstrates a Supply Chain flow between a Seller and Buyer. The user story is similar to any commonly used supply chain process. A Seller can add items to the inventory system stored in the blockchain. A Buyer can purchase such items from the inventory system. Additionally a Seller can mark an item as Shipped, and similarly a Buyer can mark an item as Received.

detailed UML diagram can be found under the UML folder

## version
Truffle v4.1.15 (core: 4.1.15)
Solidity v0.4.25 (solc-js)
node v11.1.0

## Testnet (Rinkeby) deployed contract address:
FarmerRole deploy TX... 0xa52fa074f463c397b5a9d4388462133c366eb7e4779da935521ce92f51f6125e
FarmerRole: 0x25b7123be00ef10e3319c0dcc058bfa2b24014f9

DistributorRole deploy TX...0xa0340e2267a5eccbed80bf2d709df879e7dc6b688e0d85af86c555a8abec4416
DistributorRole: 0x292f783c22f950999a3c5e0f6792621d0ed5d8f3

RetailerRole deploy TX... 0xd810cb5e409a5ec97ef8dbd3b8b5e80f9a024cb7dabebdefd94dce6b9a554259
RetailerRole: 0xec59f02c43430cacf73acb15bc78dcc1d86aee1b

ConsumerRole deploy TX... 0x256a5225ff51806b99e25193cbc2174d33d64fedd5256afe9a53078a9c8f92e5
ConsumerRole: 0x1a44a21b7f68f5a2f63269f245965bdbc6acb1a2

SupplyChain deploy TX... 0x74b6d4c5d693f42ee384810abae42b3abb3a6983e5a87089997fc8555ba06301
SupplyChain: 0x42d8a11df30900cec826550abc66e017833833ba

## transaction performed on Testnet (rinkeby)
Harvested - 0x30c6ccb83fcf2d266957ae47d549376d31dbf83c89d0d319d7e8fa38359a7002
Processed - 0xb3009ce92e9f63db688d72e7266974004b800a0bdef4dd75c0cfa6c4c888ef26
Packed - 0x45dd558ed57e6cfd5b479dd643585b399ac9253b1defe3da15038edae7f31f6b
ForSale - 0xd0cc5aa25e9e4826ef8b45ba26ddaa6f206b90605223b861b2858217ca64669b
Sold - 0x2e73e8dde6642f5d74e0f126dcdd28ec27abc127ef86e261d560cdc713d2c1af
Shipped - 0x10e0fbb1e24f0bfb7f7a981b2460753683c2f3fdd041c30777917c0af9b1fd0e
Received - 0xdaee7752426911e4e0985b3f34127fcb02074defcf58f7ee555dd6f9176fc3c2
Purchased - 0xb504f739285d326309af72804f026d2184a9487a1ccd1232919cfaaad32014b2

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

Please make sure you've already installed ganache-cli, Truffle and enabled MetaMask extension in your browser.

```
Give examples (to be clarified)
```

### Installing

A step by step series of examples that tell you have to get a development env running

Clone this repository:

```
git clone https://github.com/udacity/nd1309/tree/master/course-5/project-6
```

Change directory to ```project-6``` folder and install all requisite npm packages (as listed in ```package.json```):

```
cd project-6
npm install
```

Launch Ganache:

```
ganache-cli -m "spirit supply whale amount human item harsh scare congress discover talent hamster"
```

Your terminal should look something like this:

![truffle test](images/ganache-cli.png)

In a separate terminal window, Compile smart contracts:

```
truffle compile
```

Your terminal should look something like this:

![truffle test](images/truffle_compile.png)

This will create the smart contract artifacts in folder ```build\contracts```.

Migrate smart contracts to the locally running blockchain, ganache-cli:

```
truffle migrate
```

Your terminal should look something like this:

![truffle test](images/truffle_migrate.png)

Test smart contracts:

```
truffle test
```

All 10 tests should pass.

![truffle test](images/truffle_test.png)

In a separate terminal window, launch the DApp:

```
npm run dev
```

## Built With

* [Ethereum](https://www.ethereum.org/) - Ethereum is a decentralized platform that runs smart contracts

* [Truffle Framework](http://truffleframework.com/) - Truffle is the most popular development framework for Ethereum with a mission to make your life a whole lot easier.


## Authors

See also the list of [contributors](https://github.com/your/project/contributors.md) who participated in this project.

## Acknowledgments

* Solidity
* Ganache-cli
* Truffle
* IPFS
