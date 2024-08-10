import React, { useEffect, useState } from 'react';
import { ethers } from 'ethers';

export default function MetamaskPage() {
    const [account, setAccount] = useState(null);

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
            setAccount(accounts[0]);
            console.log('Connected account:', accounts[0]);
        } catch (error) {
            console.error('Error connecting to MetaMask', error);
        }
    };

    return (
        <div className="App">
            <header className="App-header">
                <h1>Connect to MetaMask</h1>
                <button onClick={connectMetaMask}>Connect MetaMask</button>
                {account && <p>Connected Account: {account}</p>}
            </header>
        </div>
    );
}


