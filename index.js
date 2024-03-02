// This is the version relative to the LSP25 standard, defined as the number 25.
const LSP25_VERSION = 25


// ABI definition of the contract
const abi = [{
        "constant": false,
        "inputs": [{
            "name": "_value",
            "type": "uint256"
        }],
        "name": "setValue",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "value",
        "outputs": [{
            "name": "",
            "type": "uint256"
        }],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    }
];

const rpcUrl = "https://rpc.testnet.lukso.network";
const contractAddress = "0xB6701Eb6a2A0F0Bdfae3Fdf7683F4BA0689FE567";

const validityTimestamps = "0x0000000000000000000000000000000000000000000000000000000067748580";
const msgValue = "0x0000000000000000000000000000000000000000000000000000000000000000";

const universalProfileAddress = "0x4E86B0301067Ab10e505B0d4C44e9E01d024A068";
const controllerPrivateKey = "0x...";

import RelayerSDK from "../relayer-sdk/index.js";
import ethers from "ethers";

async function main() {
    const provider = new ethers.providers.JsonRpcProvider(
        'https://rpc.testnet.lukso.network',
    );

    const sdk = new RelayerSDK("a5d9ce7e-6da8-40be-8a7b-2844ebeb657f", contractAddress, abi, controllerPrivateKey, provider);
    const signedMsg = await sdk.execute(universalProfileAddress, msgValue, "setValue", [666]);
    console.log("signed msg: ", signedMsg);
}

main()
    .then(() => {
        console.log('Execution completed successfully.');
        process.exit(0); // Exit the process with success code
    })
    .catch((error) => {
        console.error('Error occurred during execution:', error);
        process.exit(1); // Exit the process with error code
    });