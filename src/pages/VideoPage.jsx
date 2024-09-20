import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function VideoPage() {
  const [isForbidden, setIsForbidden] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    const checkAccess = async () => {
      try {
        const response = await fetch(`http://43.202.42.10/?deviceId=${id}`, {
          method: "HEAD", // Check if the URL is accessible without fetching full content
        });
        if (response.status === 403) {
          setIsForbidden(true);
        }
      } catch (error) {
        setIsForbidden(true);
      }
    };

    checkAccess();
  }, [id]);

  if (isForbidden) {
    return (
      <>
        <div className="container">
          <main
            style={{
              height: "100%",
              paddingTop: "0px",
              boxSizing: "border-box",
            }}
          >
            <div className="inner" style={{ width: "500px", overflow: "none" }}>
              <div
                style={{
                  color: "#fff",
                  fontWeight: "700",
                  fontSize: "20px",
                  marginTop: "100px",
                }}
              >
                <h1>Access Denied</h1>
                <p>User does not hold dedicated secure NFT.</p>
              </div>
            </div>
          </main>
        </div>
      </>
    );
  }

  return (
    <>
      <div className="container">
        <main
          style={{ height: "100%", paddingTop: "0px", boxSizing: "border-box" }}
        >
          <div className="inner" style={{ width: "500px", overflow: "none" }}>
            <div
              style={{
                color: "#fff",
                fontWeight: "700",
                fontSize: "20px",
                marginTop: "10px",
              }}
            >
              VIDEO {id}
            </div>
            <iframe
              width={"100%"}
              height={"90%"}
              src={`http://43.202.42.10/?deviceId=${id}`}
            ></iframe>
          </div>
        </main>
      </div>
    </>
  );
}
