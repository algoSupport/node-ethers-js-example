const { ethers } = require("ethers");

async function run () {

  provider = ethers.getDefaultProvider('https://data-seed-prebsc-1-s1.binance.org:8545/')

  console.log('provider', provider)

  privateKey = "91855cc27eff2699415687d291f6dc486fc12647587eba9c16d8ecb961004f92"
  walletPrivateKey = new ethers.Wallet(privateKey)

  wallet = walletPrivateKey.connect(provider)

  console.log('wallet', wallet)

  tx = {
    to: "0x6f736abE154B0dc062a24F8196aB9da66dfE54C3",
    value: ethers.utils.parseEther("0.1")
  }

  console.log('balance', await wallet.getBalance())

  await wallet.sendTransaction(tx)
}

run()