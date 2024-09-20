import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import React, { useEffect, useState } from "react";
import { ethers } from "ethers";

export default function HomePage() {
  let navigate = useNavigate();
  const onEnter = (room) => {
    navigate(`/video/${room}`);
  };

  const [account, setAccount] = useState(null);

  return (
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
            VIDEO LIST
          </div>
          <div className="row-list-container" id="video-list">
            <nav className="video-card">
              <div>
                <div className="t1">Video 1</div>
                <div className="t2">running</div>
                <div className="t3">
                  You need the NFT to connect this video.
                </div>
                <button
                  onClick={() => {
                    onEnter("0000000041195029");
                  }}
                >
                  Enter Video
                </button>
              </div>
            </nav>

            <nav className="video-card">
              <div>
                <div className="t1">Video 2</div>
                <div className="t2">running</div>
                <div className="t3">
                  You need the NFT to connect this video.
                </div>
                <button
                  onClick={() => {
                    onEnter("0000000082b82398");
                  }}
                >
                  Enter Video
                </button>
              </div>
            </nav>

            <nav className="video-card">
              <div>
                <div className="t1">Video 3</div>
                <div className="t2">running</div>
                <div className="t3">
                  You need the NFT to connect this video.
                </div>
                <button
                  onClick={() => {
                    onEnter("00000000dff287d4");
                  }}
                >
                  Enter Video
                </button>
              </div>
            </nav>

            <nav className="video-card">
              <div>
                <div className="t1">Video 4</div>
                <div className="t2">running</div>
                <div className="t3">
                  You need the NFT to connect this video.
                </div>
                <button
                  onClick={() => {
                    onEnter("00000000194e2041");
                  }}
                >
                  Enter Video
                </button>
              </div>
            </nav>

            <nav className="video-card">
              <div>
                <div className="t1">Video 5</div>
                <div className="t2">running</div>
                <div className="t3">
                  You need the NFT to connect this video.
                </div>
                <button
                  onClick={() => {
                    onEnter("00000000f2bda37a");
                  }}
                >
                  Enter Video
                </button>
              </div>
            </nav>
          </div>
        </div>
      </main>
    </div>
  );
}
