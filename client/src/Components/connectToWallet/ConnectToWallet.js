// import React, { useState } from "react";
// import Web3 from "web3";

// function App( {onConnect }) {
//   const [connected, setConnected] = useState(false);
//   const [account, setAccount] = useState("");
//   const [balance, setBalance] = useState(0);

//   const connectWallet = async () => {
//     try {
//       if (typeof window.ethereum === "undefined") {
//         alert("Please install Metamask to connect to a wallet.");
//         return;
//       }
//       await window.ethereum.request({ method: "eth_requestAccounts" });
//       setConnected(true);
//       const web3 = new Web3(window.ethereum);
//       const accounts = await web3.eth.getAccounts();
//       if (accounts.length === 0) {
//         alert("No wallet accounts detected.");
//         setConnected(false);
//         return;
//       }
//       const account = accounts[0];
//       const balance = await web3.eth.getBalance(account);
//       const balanceInEther = web3.utils.fromWei(balance, "ether");
//       setAccount(account);
//       localStorage.setItem("account", account);
//       setBalance(balanceInEther); 
//       localStorage.setItem("balanceInEther", balanceInEther);
//     } catch (error) {
//       console.log(error);
//       setConnected(false);
//     }
//   };

//   return (
//     <div>
//       <h1>My Metamask Wallet</h1>
//       {!connected && <button onClick={connectWallet}>Connect Wallet</button>}
//       {connected && (
//         <div>
//           <p>Wallet ID: {account}</p>
//           <p>Balance: {balance} ETH</p>
//         </div>
//       )}
//     </div>
//   );
// }

// export default App;