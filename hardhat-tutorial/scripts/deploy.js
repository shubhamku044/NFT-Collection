const { ethers } = require('hardhat')
require('dotenv').config({ path: '.env' })
const { WHITELIST_CONTRACT_ADDRESS, METADATA_URL } = require('../constants')

async function main() {
	// Address of the whitelist contract that you deployed in the previous module
	const whitelistContract = WHITELIST_CONTRACT_ADDRESS
	// URL from where we can extract the metadata for a Crypto Dev NFT
	const metadataURL = METADATA_URL

	const cryptoDevsContract = await ethers.getContractFactory('CryptoDevs')
	const deployedCryptoDevsContract = await cryptoDevsContract.deploy(
		metadataURL,
		whitelistContract
	)

	console.log(
		'Crypto Devs Contract Address:',
		deployedCryptoDevsContract.address
	)
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
	.then(() => process.exit(0))
	.catch((error) => {
		console.error(error)
		process.exitCode = 1
	})
