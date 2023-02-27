import { useEvmNativeBalance, useEvmWalletNFTs } from "@moralisweb3/next";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import type { NextPage } from "next";
import { useAccount } from "wagmi";

const Home: NextPage = () => {
  const { data: nfts } = useEvmWalletNFTs({
    address: "0x123a3c28eB9e701C173D3A73412489f3554F3005",
  });
  console.log(nfts);
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          padding: 12,
        }}
      >
        <ConnectButton />
      </div>
      <div>
      </div>
    </>
  );
};

export default Home;
