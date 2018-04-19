var fs = require('fs');
var Wallet = require('./')
var args = process.argv.splice(2)
var etherWalletEncrypted = fs.readFileSync(args[0], 'utf8');
var wallet = Wallet.fromV3(etherWalletEncrypted, args[1])
//console.log(wallet.getAddressString())
console.log(wallet.getPrivateKey().toString('hex'))
