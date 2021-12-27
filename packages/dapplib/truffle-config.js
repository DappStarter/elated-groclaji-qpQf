require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grace glide fringe skull drift recipe situate unaware hockey area olympic gauge'; 
let testAccounts = [
"0x851e574364aba518317533ddf0f1893abc36d0c7482bd48801581a9414459bab",
"0x2257a9822025882e8f3d554fa44809a368956a7f2724e556c98cebe6ed8365a1",
"0x96584bb3fae1b4cc74f46c6f19d7d270adfeac2da3731259b9bfe018c524a7b5",
"0x2e55df355433d92c9f46923712d161b44eabe2a5bfff6bb2e300d682fa50bd4f",
"0xc868eed14f0b5f720e66ecb9c9c29f632b49ccdb0cdbbe8624c04012a0d3b501",
"0x33693a81fb940efd2f1e5e9acef20c50fe9fc83f7f606269e480fe7f43393089",
"0x47a9a9ae92636e939f6fd81a940bf48ff93cd6ab1f7f56eb45199ccb37f03482",
"0xe05072175c5a8521771cc4e6a59859f9f1d63804eb22752ef7351bc4faff5535",
"0xef1a301e30cbfc9cc62d2a3f321bd91a63c7656f69897883b1d2b7a0ced65c88",
"0x9da6b843827cd17e6807dda5b547cff372566a4af9734ec34e038e0ab10f297b"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


