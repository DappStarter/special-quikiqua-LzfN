require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict lobster flee spot bitter birth shift pudding hidden entire front security'; 
let testAccounts = [
"0xa35145bfe074f1ccb400207a88f8a25ace3cc21d94e0f0d83696e52c1d31f0c6",
"0xba91079f6de5cf41922b404e315dff5462350a058b3a73f679e6a9ee51366dea",
"0xb1037e3ecad093580b4a9debd9b09aa98cde56a31c6be077c1f952c4aa160298",
"0x4684f2c10810209e8646f48f3895f3c66734406c14f22345567fafed1da74140",
"0xbcf11cec67d7df7cde874960645f592447bb93f88803928e5c76fe93f28c7186",
"0x050f919de3c19d6a8e959d5b8b62bab5ab9dd20bff013a4a588e09445101c570",
"0x64643ccd3e6ad74db456cc31929a65067b8dfa8c40bd4d185e6d378d154405e4",
"0xdfd111f9de691d27745089882b107440a92dacb405f63243dcc4ec37a626bcf4",
"0xcd136281c7c922a5b180c2359d1c16faac9c0b26db15e4f4a05460e5ffaed650",
"0x93ecde48af5c8e64f7b3a31a01a9450e6a44a86d1fd7800b139c7c0f192db618"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

