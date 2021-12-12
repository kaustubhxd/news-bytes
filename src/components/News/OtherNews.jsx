import React from "react";
import "../../styles/OtherNews.scss";
import { parseTime } from "../../scripts/parseTime";
import { Link } from "react-router-dom";

const OtherNews = ({ article, index }) => {
  const date = () => parseTime(article.publishedAt, true);

  if (article) {
    return (
      <div className={`fp-cell fp-cell--${index}`}>
        <div className="other-news-wrap">
          <div className="news-details">
            <thin-print>{`${article.author || article.source.name} ● ${date()}`}</thin-print>
            <a href={article.url} target="_blank" rel="noreferrer" className="news-source">
              {article.source.name}
            </a>
            <Link to={`/article/${index}`}>
              <news-title>{article.title}</news-title>
            </Link>
          </div>
          <Link to={`/article/${index}`}>
            <div className="float-image">
              <img src={article.urlToImage} alt={"Image: " + article.title} />
            </div>
          </Link>
        </div>
      </div>
    );
  } else {
    return <></>;
  }
};

export default OtherNews;
