import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import React, { useEffect, useState } from 'react';
import { ethers } from 'ethers';

export default function HomePage(){
    let navigate = useNavigate();
    const onEnter = (room)=>{
        navigate('/video')
    }


    const [account, setAccount] = useState(null);

   

    return (
        <div className="container">
            <Header/>
            <main>
                <div className="inner">
                    <div style={{color:'#fff',fontWeight:'700',fontSize:'20px',marginTop:'40px'}}>VIDEO LIST</div>
                    <div className="row-list-container" id="video-list">

                        <nav className="video-card">
                            <div>
                                <div className="t1">Video 1</div>
                                <div className="t2">running</div>
                                <div  className="t3">
                                    You need the NFT to connect this video.
                                </div>
                                <button onClick={()=>{onEnter(1)}}>Enter Video</button>
                            </div>
                        </nav>

                        <nav className="video-card">
                            <div>
                                <div className="t1">Video 1</div>
                                <div className="t2">running</div>
                                <div  className="t3">
                                    You need the NFT to connect this video.
                                </div>
                                <button onClick={()=>{onEnter(2)}}>Enter Video</button>
                            </div>
                        </nav>

                        <nav className="video-card">
                            <div>
                                <div className="t1">Video 1</div>
                                <div className="t2">running</div>
                                <div  className="t3">
                                    You need the NFT to connect this video.
                                </div>
                                <button onClick={()=>{onEnter(3)}}>Enter Video</button>
                            </div>
                        </nav>

                        <nav className="video-card">
                            <div>
                                <div className="t1">Video 1</div>
                                <div className="t2">running</div>
                                <div  className="t3">
                                    You need the NFT to connect this video.
                                </div>
                                <button onClick={()=>{onEnter(4)}}>Enter Video</button>
                            </div>
                        </nav>

                        <nav className="video-card">
                            <div>
                                <div className="t1">Video 1</div>
                                <div className="t2">running</div>
                                <div  className="t3">
                                    You need the NFT to connect this video.
                                </div>
                                <button onClick={()=>{onEnter(5)}}>Enter Video</button>
                            </div>
                        </nav>

                       


                    </div>
                </div>
            </main>
        </div>
    );
}