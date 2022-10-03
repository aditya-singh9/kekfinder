import React, { useState, useCallback } from "react";
import Header from "./Header.js";
import  Footer  from "./Footer.js";
import Search from "./Search.js";
import Results from "./Results.js";
import data from "../json/data.json";
import ScrollToTopButton from "./ScrollToTopButton";
import ItemsSelected from "./ItemsSelected.js";
import "./Container.css";

function Container() {
  const emojiData = data;
  const [newEmojiData, setNewEmojiData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  let recentEmojis = JSON.parse(localStorage.getItem("recentEmojis")) || emojiData;

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
      } else {
        // eslint-disable-next-line
        recentEmojis = JSON.parse(localStorage.getItem("recentEmojis")) || emojiData;
      }

      setNewEmojiData(newEmojis);
    },
    [setNewEmojiData, setSearchQuery, emojiData]
  );
  return (
    <div className="container">
      <Header />
      <Search onChange={onChange} />
      <ItemsSelected />
      <Results
        emojiFiltered={searchQuery === "" ? recentEmojis : newEmojiData}
      />
      <ScrollToTopButton />
      <Footer/>
      <div className="search-bar-focus-popup">
        <span>Press <span className="search-bar-focus-hotkey">/</span> to jump to the search box</span>
      </div>
    </div>
  );
}

export default Container;
