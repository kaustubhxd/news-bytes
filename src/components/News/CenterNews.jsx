import React from "react";
import "../../styles/CenterNews.scss";
import { parseTime } from "../../scripts/parseTime";

const CenterNews = ({ article, index, titleFontSize, showDetails }) => {
  const date = parseTime(article.publishedAt, true);
  return (
    <div className={`fp-cell fp-cell--${index}`}>
      <div className="fp-item">
        <div className="center-news-wrap">
          <div className="news-image">
            <img src={article.urlToImage} alt={"Image: " + article.title} />
          </div>
          <div className="news-details">
            <thin-print>{`${article.author || article.source.name} ● ${date}`}</thin-print>
            <a href={article.url} target="_blank" rel="noreferrer" className="news-source">
              {article.source.name}
            </a>
            <news-title style={{ fontSize: titleFontSize }}>{article.title}</news-title>
            {showDetails && <div className="news-description">{article.description}</div>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CenterNews;
