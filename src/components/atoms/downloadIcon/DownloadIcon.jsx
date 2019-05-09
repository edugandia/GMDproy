import React from "react";
import "./DownloadIcon.scss";

const DownloadIcon = props => {
  const linkDownload = props.linkDownload;

  return (
    <a href={linkDownload} download className="download-icon-container">
      <h6>DESCARGAR POSTAL</h6>
      <img src="./images/download-icon.png" alt="download-icon" />
    </a>
  );
};

export default DownloadIcon;
