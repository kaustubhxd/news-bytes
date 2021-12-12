import React from "react";
import { useParams } from "react-router";
import { parseTime } from "../scripts/parseTime";
import "../styles/Article.scss";

const Article = (props) => {
  const articles = props.articles;
  const { id } = useParams();
  console.log(articles[id]);
  const article = articles[id];
  const date = () => parseTime(article.publishedAt, true);

  if (articles.length > 0 && id < articles.length) {
    return (
      <div className="article-wrap">
        <news-title>{article.title}</news-title>
        <div className="news-description">{article.description}</div>
        <thin-print>{`${article.author || article.source.name} ● ${date()}`}</thin-print>
        <img className="news-img" src={article.urlToImage} alt={"Image: " + article.title} />
        <div className="news-content">{article.content}</div>
        <a href={article.url} target="_blank" rel="noreferrer" className="news-source">
          Read full article from {article.source.name}{" "}
        </a>
      </div>
    );
  } else if ((articles.length > 0) & (id > articles.length)) {
    return <div className="loading-text">404: Not Found</div>;
  }
  return <div className="loading-text">Loading articles. Please wait..</div>;
};

export default Article;
