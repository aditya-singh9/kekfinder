import React, { useState, useCallback } from "react";
import Header from "./Header.js";
import Search from "./Search.js";
import Results from "./Results.js";
import data from "../json/data.json";
import ScrollToTopButton from "./ScrollToTopButton";
import "./Container.css";

function Container() {
  const emojiData = data;
  const [newEmojiData, setNewEmojiData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const onChange = useCallback(
    (val) => {
      setSearchQuery(val.toLowerCase());

      const queryKeywords = val.toLowerCase().trim().split(" ");

      const newEmojis = [];

      const queryLength = queryKeywords.length;

      let queryLengthSum = 0;

      if (val.toLowerCase() !== "") {
        // Loop through all emojis and push matching emojis into newEmojis array
        emojiData.forEach((item) => {
          const emojiKeywords = item.keywords.trim();
          queryLengthSum = 0;
          queryKeywords.forEach((query) => {
            if (emojiKeywords.indexOf(query) >= 0) {
              queryLengthSum++;
            }
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
    </div>
  );
}

export default Container;
