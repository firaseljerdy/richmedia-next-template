import React, { useRef } from "react";
// import IframeComm from "react-iframe-comm";
import { useRouter } from "next/router";

const Page = (props) => {
  const router = useRouter();

  const noFullScreenWarning = () =>
    console.warn("Could not request fullscreen");

  const openFullScreen = () => {
    const documentElement = document.documentElement;

    if (!document.fullscreenElement) {
      if (documentElement.requestFullscreen) {
        documentElement.requestFullscreen().catch(() => noFullScreenWarning());
      } else if (elem.webkitRequestFullscreen) {
        /* Safari */
        elem.webkitRequestFullscreen().catch(() => noFullScreenWarning());
      }
    }
  };

  const printContent = (content) =>
    console.log(`${content?.data?.type}: `, content?.data);
``
  return (
    <div
      style={{
        position: "fixed",
        inset: "0",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "black",
        zIndex: 20,
      }}
      className="game-container"
    >
      <div className="iframe-parent">
        <iframe
          src="https://panadol-plane.s3.eu-north-1.amazonaws.com/game/index.html"
          width="100%"
          height="100%"
          frameBorder="0"
        ></iframe>
      </div>
      <style jsx>
        {
          `
            .iframe-parent {
              width: 100%;
              height: 100%;
            }
          `
        }
      </style>
    </div>
  );
};

export default Page;
