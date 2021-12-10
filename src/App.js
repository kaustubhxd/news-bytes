import React, { useEffect, useState, useRef } from "react";
import FrontPage from "./components/FrontPage";
import MastHead from "./components/MastHead";
import { getNews } from "./scripts/getNews";
import useResizeObserver from "@react-hook/resize-observer";

const App = () => {
  const [articles, setArticles] = useState([]);
  const bodyRef = useRef(null);
  const bodySize = useSize(bodyRef);

  useEffect(() => {
    getNews().then((articles) => {
      console.log(articles);
      setArticles(articles);
    });
  }, []);

  return (
    <div ref={bodyRef}>
      {/* {bodySize && JSON.stringify({ width: bodySize.width, height: bodySize.height }, null, 2)} */}
      <MastHead articles={articles} />
      <FrontPage articles={articles} bodySize={bodySize} />
    </div>
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
