import React, { useEffect, useState, useRef } from "react";
import FrontPage from "./components/FrontPage";
import MastHead from "./components/MastHead";
import { getNews } from "./scripts/getNews";
import useResizeObserver from "@react-hook/resize-observer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Article from "./components/Article";
// import { offlineArticles } from "./content/articles";

const App = () => {
  const [articles, setArticles] = useState([]);
  const bodyRef = useRef(null);
  const bodySize = useSize(bodyRef);
  const [serverError, setServerError] = useState(false);

  useEffect(() => {
    getNews().then(({ success, articles }) => {
      if (success) {
        console.log(articles);
        setArticles(articles);
      } else {
        setServerError(true);
      }
    });
    // setArticles(offlineArticles);
  }, []);

  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div ref={bodyRef}>
        {/* {bodySize && JSON.stringify({ width: bodySize.width, height: bodySize.height }, null, 2)} */}
        <MastHead articles={articles} />
      </div>
      <Routes>
        <Route
          path="/"
          element={<FrontPage articles={articles} bodySize={bodySize} serverError={serverError} exact />}
        ></Route>
        <Route path="/article/:id" element={<Article articles={articles} />}></Route>
      </Routes>
    </Router>
  );
};

const useSize = (target) => {
  const [size, setSize] = React.useState();

  React.useLayoutEffect(() => {
    setSize(target.current.getBoundingClientRect());
  }, [target]);

  // Where the magic happens
  useResizeObserver(target, (entry) => setSize(entry.contentRect));
  return size;
};

export default App;
