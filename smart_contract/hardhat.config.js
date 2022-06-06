require('@nomiclabs/hardhat-waffle')

module.exports = {
  solidity: '0.8.0',
  networks: {
    rinkeby: {
      url: 'https://eth-rinkeby.alchemyapi.io/v2/tqccDjLYeL4qxtpASuNInd5jhLVXs0Uk',
      accounts: [
        'f35fee95b9d491355624f67288a0c2b51a7397008cb0a62468a9fd467d9f07cc',
      ],
    },
  },
}
