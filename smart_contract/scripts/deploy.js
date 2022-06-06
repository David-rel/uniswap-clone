const main = async () => {
  const transactionFactory = await hre.ethers.getContractFactory('Transactions')
  const transactionContract = await transactionFactory.deploy()

  await transactionContract.deployed()

  console.log('Transactions deployed to:', transactionContract.address)
}

;(async () => {
  try {
    await main()
    process.exit(0)
  } catch (error) {
    console.error(error)
    process.exit(1)
  }
})()

//0x244079d78937E278559e3f3D1283389C01e030a6
