import React, { useState, useEffect } from 'react';
import Header from "./components/header";
import config from "./config";

interface Inews {
  status: string,
  totalResults: number,
  articles: Iarticle[]
}

interface Iarticle {
  source: {
    id: string,
    name: string
  },
  author: string,
  title: string,
  description: string,
  url: string,
  urlToImage: string,
  publishedAt: Date,
  content: string
}

let ini: Inews = {
  status: "",
  totalResults: 0,
  articles: []
};

function App() {
  const [news, setNews] = useState(ini);

  useEffect(() => {
    const url = 'http://newsapi.org/v2/top-headlines?' +
      'country=us&' +
      `apiKey=${config.NEW_API_KEY}`;

    let req = new Request(url);
    fetch(req)
      .then(async (response) => {
        setNews(await response.json());
      })
  },[])

  return (
    <>
      <Header />
      {news.articles.map((article, index) => {
        return (<img src={article.urlToImage} alt={article.title} key={index} ></img>)
      })}
    </>
  );
}

export default App;
