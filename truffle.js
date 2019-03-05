var HDWalletProvider = require('truffle-hdwallet-provider');

var mnemonic = 'minimum elite guilt observe private outer salute bargain chief horse lift gloom';
const configKeys = require('./config-key')
module.exports = {
  networks: { 
    development: {
      host: '127.0.0.1',
      port: 8545,
      network_id: "*"
    },
    rinkeby: {
      provider: function() { 
        return new HDWalletProvider(configKeys.mnemonic, configKeys.infuraUrl/* your own infura API address here*/) 
      },
      network_id: 4,
      gas: 4500000,
      gasPrice: 10000000000,
    }
  }
};