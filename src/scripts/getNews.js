export const getNews = async () => {
  try {
    const request = await fetch("https://news-bytes.glitch.me/news");
    console.log(request);
    const articles = await request.json();
    return { success: true, articles };
  } catch (err) {
    console.log("Error while fetching news articles: ", err);
    return { success: false, articles: [] };
  }
};
