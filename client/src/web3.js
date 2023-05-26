import Web3 from "web3";
import songs from '../src/Components/contracts/Songs.json' // Update the path to your contract JSON file
// window.ethereum.enable();
const web3 = new Web3(window.ethereum);
const accounts = new web3.eth.getAccounts();
const signerAddress = accounts[0];
// const contractAddress="0x9107D957E4Dd2ADaEFB8587a6ceaeCb881FE6F9E"

const contractAddress = songs.networks[5777].address; // Replace with your actual contract address
const contractInstance = new web3.eth.Contract(
    songs.abi,
    contractAddress,
    signerAddress
);
export default contractInstance;