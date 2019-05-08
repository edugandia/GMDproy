import React from "react";

const DownloadIcon = props => {
  const linkDownload = props.linkDownload;
  
  return (
    <a href={linkDownload} download className="download-icon-container">
      <h6>DESCARGAR POSTAL</h6>
      <img src="./image/download-icon" alt="download-icon" />
    </a>
  );
};

export default DownloadIcon;
