import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import React, { useEffect, useState } from "react";
import { ethers } from "ethers";



export default function SearchPage(){
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
                    }}
                >
                    Search NFTs
                </div>
                <div className="row-list-container" id="video-list">
                    <input/>
                </div>
                </div>
            </main>
            </div>
        </>
    );
}

