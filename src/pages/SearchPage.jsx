import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import React, { useEffect, useState } from "react";
import { ethers } from "ethers";
import contractABI from '../abi/ApiNFT.json';
import axios from 'axios';
// Deploying 'ApiNFT'
//    ------------------
//    > transaction hash:    0x29ae5faf37d96d2df452df31c48fcfc5dfd02d9510db5768994fc4046abbacb9
//    > Blocks: 2            Seconds: 4
//    > contract address:    0x3e93608E29384Ed954Ac7009Daa093c8634496EB
//    > block number:        42294898
//    > block timestamp:     1726462489
//    > account:             0x98a48Ea75Aa803F7AF9c5D3f93b0A01a1044D758
//    > balance:             0.0036116625
//    > gas used:            2555335 (0x26fdc7)
//    > gas price:           2.5 gwei
//    > value sent:          0 ETH
//    > total cost:          0.0063883375 ETH




export default function SearchPage(){

    const [nfts, setNfts] = useState([]);
    const [wallet, setWallet] = useState('');

    const contractAddress = '0x3e93608E29384Ed954Ac7009Daa093c8634496EB';
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    var walletAddress = '0x98a48Ea75Aa803F7AF9c5D3f93b0A01a1044D758';

    const fetchNFTs = async (wallet) => {
        setNfts([]);
        walletAddress=wallet;
        console.log(walletAddress);
        if (!walletAddress) {
            alert('지갑 주소를 입력해주세요.');
            return;
        }

        try {
            await provider.send('eth_requestAccounts', []); // 메타마스크 연결 요청
            const signer = provider.getSigner();
            const contract = new ethers.Contract(contractAddress, contractABI.abi, signer);

            // tokensOfOwner 함수를 호출하여 지갑 주소의 NFT 조회
            const nftTokens = await contract.tokensOfOwner(walletAddress);
            
            for(var i=1;i<nftTokens.length;i++){
                const tokenUrl = await contract.tokenURI(nftTokens[i]); //http://my-api/1.json
                try{
                    var response = await axios.get(tokenUrl);
                    console.log(response.data);
                    setNfts(prevItems => [...prevItems, response.data]);
                }catch(error){
                    setNfts(prevItems => [...prevItems, {}]);
                }
            }

            
          
            //setNftList(nftTokens.map(tokenId => tokenId.toString())); // tokenId를 문자열로 변환
        } catch (error) {
            console.error('NFT 조회 중 오류 발생:', error);
            alert('NFT 조회 중 오류가 발생했습니다.');
        }
    };

    const onWalletChange = (e)=>{
        setWallet(e.target.value);
    }

    
    return (
        <>
            <div className="container">
            <Header />
            <main>
                <div className="inner">
                <div
                    style={{
                    color: "#fff",
                    fontWeight: "700",
                    fontSize: "20px",
                    marginTop: "40px",
                    marginBottom: "30px",
                    }}
                >
                    Search NFTs
                </div>
                <div id="video-list">
                    <div>
                        <input onChange={onWalletChange} className="sch-input" placeholder="wallet address : 0x00000000000000..."/>
                        <button className="btn-1" onClick={()=>{fetchNFTs(wallet)}}>Search</button>
                    </div>
                    

                    <div style={{marginTop:'60px'}}>

                        {nfts.map((item, index) => (
                             <nav className="nft-box" key={index}>
                                <img src={item.image}/>
                                <div>
                                    <div className="title">{item.name}</div>
                                    <p>{item.description}</p>
                                </div>
                            </nav>
                        ))}

                    </div>
                            

                   
                </div>
                </div>
            </main>
            </div>
        </>
    );
}

