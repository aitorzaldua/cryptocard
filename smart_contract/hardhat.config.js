//https://eth-rinkeby.alchemyapi.io/v2/VcNvlgnUSffjaRSILTgSioNhuahWp8BK

//hardhat-waffle is a plugin to build smart contracts
require('@nomiclabs/hardhat-waffle');

//network from alchemy (http key)
//account is the private key or the wallet
//Before upload to github remove them or create a .env file
module.exports = {
  solidity: '0.8.0',
  networks: {
    rinkeby: {
      url: 'https://eth-rinkeby.alchemyapi.io/v2/VcNvlgnUSffjaRSILTgSioNhuahWp8BK',
      accounts: ['privatekey']
    }
  }
}