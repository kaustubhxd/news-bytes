export const getNews = async () => {
  try {
    const request = await fetch("https://news-bytes.glitch.me/news");
    const articles = await request.json();
    return articles;
  } catch (err) {
    console.log("Error while fetching news articles: ", err);
  }
};
