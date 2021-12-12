import React from "react";
import "../../styles/CenterNews.scss";
import { parseTime } from "../../scripts/parseTime";
import { Link } from "react-router-dom";

const CenterNews = ({ article, id, index, titleFontSize, showDetails }) => {
  const date = parseTime(article.publishedAt, true);
  return (
    <div className={`fp-cell fp-cell--${id}`}>
      <div className="fp-item">
        <div className="center-news-wrap">
          <Link to={`/article/${index}`}>
            <div className="news-image">
              <img src={article.urlToImage} alt={"Image: " + article.title} />
            </div>
          </Link>
          <div className="news-details">
            <thin-print>{`${article.author || article.source.name} ● ${date}`}</thin-print>
            <a href={article.url} target="_blank" rel="noreferrer" className="news-source">
              {article.source.name}
            </a>
            <Link to={`/article/${index}`}>
              <news-title style={{ fontSize: titleFontSize }}>{article.title}</news-title>
              {showDetails && <div className="news-description">{article.description}</div>}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CenterNews;
