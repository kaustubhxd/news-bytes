import React from "react";
import "../styles/MastHead.scss";

const MastHead = () => {
  return (
    <div className="masthead-box">
      <div className="paper-name-box">
        <div className="weather"></div>
        <div className="paper-name">
          <h1>NEWS BYTES</h1>
        </div>
      </div>
      <div className="paper-calendar">York, MA - Thursday August 30, 1978 - Seven Pages</div>
    </div>
  );
};

export default MastHead;
