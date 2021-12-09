import React from "react";
import "../styles/FrontPage.scss";

const Home = () => {
  return (
    <div>
      <div className="container">
        <div className="frontpage">
          <div className="fp-cell fp-cell--1">
            <div className="fp-item">1</div>
          </div>
          <div className="fp-cell fp-cell--2">
            <div className="fp-item">2</div>
          </div>
          <div className="fp-cell fp-cell--3">
            <div className="fp-item">3</div>
          </div>
          <div className="fp-cell fp-cell--4">
            <div className="fp-cell  fp-cell--5">
              <div className="fp-item">5</div>
            </div>
            <div className="fp-cell fp-cell--6">
              <div className="fp-item">6</div>
            </div>
            <div className="fp-cell fp-cell--7">
              <div className="fp-item">7</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
