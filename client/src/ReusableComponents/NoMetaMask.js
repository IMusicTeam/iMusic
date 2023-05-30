import MetaMaskImg from "../Assets/MetaMask_Fox.svg";
const NoMetaMask = () => {
  const handleTransfer = async () => {
    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });
    if(!accounts) {
        alert("Please install metamask")
    }
  };
  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center">
      <img src={MetaMaskImg} alt="MetaMask" className="w-20 h-20 mb-4" />
      <span className="text-lg text-black">
        Please install{" "}
        <span onClick={handleTransfer} className="font-bold tracking-[0.45px] text-ibl2 cursor-pointer">METAMASK</span> extension.
      </span>
    </div>
  );
};
export default NoMetaMask;
