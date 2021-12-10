import React from "react";
import "../../styles/SideNews.scss";
import { parseTime } from "../../scripts/parseTime";

const SideNews = ({ article, index, showImage }) => {
  const date = parseTime(article.publishedAt, true);
  return (
    <div className={`fp-cell fp-cell--${index}`}>
      <div className="side-news-wrap">
        <div className="news-details">
          <thin-print>{`${article.author || article.source.name} ● ${date}`}</thin-print>
          <a href={article.url} target="_blank" rel="noreferrer" className="news-source">
            {article.source.name}
          </a>
          <news-title>{article.title}</news-title>
          {showImage ? (
            <div className="news-image">
              <img src={article.urlToImage} alt={"Image: " + article.title} />
            </div>
          ) : null}
        </div>
      </div>{" "}
    </div>
  );
};

export default SideNews;
