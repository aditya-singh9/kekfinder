import React, { useState, useEffect, useCallback } from "react";
import Header from "./Header.js";
import Search from "./Search.js";
import Results from "./Results.js";
import data from "../json/data.json";
import ScrollToTopButton from "./ScrollToTopButton";
import "./Container.css";

function Container() {
  const [emojiData, setEmojiData] = useState([]);
  const [newEmojiData, setNewEmojiData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    setEmojiData(data);
  }, []);

  const onChange = useCallback(
    (val) => {
      setSearchQuery(val.toLowerCase());

      const queryKeywords = val.toLowerCase().trim().split(" ");

      const newEmojis = [];

      const queryLength = queryKeywords.length;

      let queryLengthSum = 0;

      console.log("\n\n\n NEW LINE \n\n\n");

      if (val.toLowerCase() !== "") {
        emojiData.forEach((item) => {
          let removeDuplicates = [...new Set(item.keywords.trim().split(" "))];
          queryLengthSum = 0;
          queryKeywords.forEach((query) => {
            removeDuplicates.forEach((keyword) => {
              if (keyword.indexOf(query) >= 0) {
                queryLengthSum++;
              }
            });
          });

          if (queryLength <= queryLengthSum) {
            newEmojis.push(item);
          }
        });
      }

      setNewEmojiData(newEmojis);
    },
    [setNewEmojiData, setSearchQuery, emojiData]
  );
  return (
    <div className="container">
      <Header />
      <Search onChange={onChange} />
      {!searchQuery ? (
        <p className="first-render">Type Keywords to Search</p>
      ) : (
        <Results
          emojiFiltered={searchQuery === "" ? emojiData : newEmojiData}
        />
      )}
      <ScrollToTopButton />
      <div className="search-bar-focus-popup">
        <span>Press <span className="search-bar-focus-hotkey">/</span> to jump to the search box</span>
      </div>
    </div>
  );
}

export default Container;
