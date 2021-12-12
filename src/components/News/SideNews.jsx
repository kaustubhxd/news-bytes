import React from "react";
import "../../styles/SideNews.scss";
import { parseTime } from "../../scripts/parseTime";
import { Link } from "react-router-dom";

const SideNews = ({ article, id, index, mobileView, showImage }) => {
  const date = () => parseTime(article.publishedAt, true);

  if (article) {
    return (
      <div className={`fp-cell fp-cell--${id}`}>
        <div className="side-news-wrap">
          <div className="news-details">
            <Link to={`/article/${index}`}>
              <img style={{ width: "100%" }} src={article.urlToImage} alt={"Image: " + article.title} />
              <news-title>{article.title}</news-title>
              <thin-print>{`${article.author || article.source.name} ● ${date()}`}</thin-print>
            </Link>
            <a href={article.url} target="_blank" rel="noopener noreferrer" className="news-source">
              {article.source.name}
            </a>
          </div>
        </div>
      </div>
    );
  } else {
    return <></>;
  }
};

export default SideNews;
