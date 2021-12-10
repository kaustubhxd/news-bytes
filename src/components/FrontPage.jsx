import React from "react";
import "../styles/FrontPage.scss";
import CenterNews from "./News/CenterNews";
import OtherNews from "./News/OtherNews";
import SideNews from "./News/SideNews";

const Home = ({ articles, bodySize }) => {
  if (articles.length > 0 && bodySize) {
    return (
      <div>
        {bodySize.width > 720 ? (
          <div className="container">
            <div className="frontpage">
              <div className="fp-cell fp-cell--1">
                <SideNews article={articles[5]} index="A" />
                <SideNews article={articles[6]} index="B" />
                <SideNews article={articles[7]} index="C" />
                {/* <SideNews article={articles[11]} index="F" /> */}
              </div>
              <CenterNews article={articles[0]} index="2" titleFontSize="30px" />
              <div className="fp-cell fp-cell--3">
                <CenterNews article={articles[4]} index="X" titleFontSize="20px" showDetails={true} />
              </div>
              <div className="fp-cell fp-cell--4">
                <CenterNews article={articles[1]} index="5" titleFontSize="20px" />
                <CenterNews article={articles[2]} index="6" titleFontSize="20px" />
                <CenterNews article={articles[3]} index="7" titleFontSize="20px" />
              </div>
            </div>
            <div className="other-pages">
              {articles.slice(8).map((xarticle, i) => {
                return <OtherNews article={xarticle} index="xx" key={xarticle.title} />;
              })}
            </div>
          </div>
        ) : (
          articles.map((xarticle, i) => {
            return <SideNews article={xarticle} index={i} mobileView={true} key={xarticle.title} />;
          })
        )}
      </div>
    );
  } else {
    return <div className="loading-text">Loading articles. Please wait..</div>;
  }
};

export default Home;
