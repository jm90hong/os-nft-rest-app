import React, { useEffect, useState } from 'react';
import { ethers } from 'ethers';
import useAccountStore from '../stores/useAccountStore';


export default function Header(){

    const accountStore = useAccountStore();

    //초기화
    useEffect(() => {
        // MetaMask가 설치되어 있는지 확인
        if (typeof window.ethereum !== 'undefined') {
            console.log('MetaMask is installed!');
        }
    }, []);

    const connectMetaMask = async () => {
        try {
            if (!window.ethereum) {
                alert('MetaMask가 설치되어 있지 않습니다!');
                return;
            }
            // MetaMask와 연결
            const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });

            accountStore.setAccount(accounts[0]);
            console.log('Connected account:', accounts[0]);

            //nft 조회
            
        } catch (error) {
            console.error('Error connecting to MetaMask', error);
        }
    };

    const disconnect = ()=>{
        accountStore.clearAccount();
    }

    return (
        <>
            <header>
                <div className="inner">
                    <span className="title">NFT VIDEO TEST</span>
                    <div>

                        {accountStore.account == '' ? 
                            //연결 안됨
                            <div>
                                <button className="btn-1" onClick={connectMetaMask}>Connect Metamask</button>
                            </div> : 
                            //연결 됨.
                            <div>
                                <span style={{color:'#fff',fontWeight:'700',marginRight:'15px'}}>{accountStore.account}</span>
                                <button className="btn-1" onClick={disconnect}>Disconnect</button>
                            </div>
                        }
                    </div>
                </div>
            </header>
        </>
    )
}