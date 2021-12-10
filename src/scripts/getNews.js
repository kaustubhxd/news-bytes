export const getNews = async () => {
  const request = await fetch("https://news-bytes.glitch.me/news");
  const articles = await request.json();
  return articles;
};
