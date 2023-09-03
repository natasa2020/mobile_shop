import React, { useState, useEffect }  from "react";
import newsData from "../pages/news.json"

const NewsPage = () => {
    const [newsArticles, setNewsArticles] = useState([]);

  useEffect(() => {
    setNewsArticles(newsData);
  }, []);

    return (
        <div className="news-container">
      <h1 className="news-title">Check out the latest news from Mobile World!</h1>
      {newsArticles.map((news, index) => (
        <div key={index} className="news-article">
          <h2>{news.title}</h2>
          <p>{news.description}</p>
          <p>Source: {news.source}</p>
          <p>Date: {news.date}</p>
          <iframe
              title="YouTube Video Player"
              width="560"
              height="315"
              src={news.videoUrl.replace("watch?v=", "embed/")}
              frameBorder="0"
              allowFullScreen
            ></iframe>
        </div>
      ))}
    </div>
    )
}
export default NewsPage;