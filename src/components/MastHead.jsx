import React from "react";
import converter from "number-to-words";
import { parseTime } from "../scripts/parseTime";
import "../styles/MastHead.scss";

const MastHead = ({ articles }) => {
  const date = parseTime(new Date());
  const dateFormat = `${date.day} ${date.month} ${date.date}, ${date.year}`;
  const numberOfArticles = capitalizeFirstLetter(converter.toWords(articles.length));
  return (
    <div className="masthead-box">
      <div className="paper-name-box">
        <div className="weather"></div>
        <div className="paper-name">
          <h1>NEWS BYTES</h1>
        </div>
      </div>
      <div className="paper-calendar">
        Pune, IN - {dateFormat} - {numberOfArticles} Articles
      </div>
    </div>
  );
};

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export default MastHead;
