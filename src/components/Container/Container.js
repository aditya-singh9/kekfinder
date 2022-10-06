import React, { useState, useCallback } from "react";
import { Header, Footer, Search, Results, ScrollToTopButton, ItemsSelected } from "..";
import data from "../../json/data.json";
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
    <>
      <div className="container container-layout">
        <div className="sides">
          <div className="left">
            <Header />
            <div className="searchBox">
              <Search onChange={onChange} />
              <ItemsSelected />
            </div>
          </div>
          <div className="right">
            <Results
              emojiFiltered={searchQuery === "" ? recentEmojis : newEmojiData}
            />
            <ScrollToTopButton />
            <div className="search-bar-focus-popup">
              <span>Press <span className="search-bar-focus-hotkey">/</span> to jump to the search box</span>
            </div>
          </div>
        </div>
        <div className="footer">
          <Footer />
        </div>
      </div>

    </>
  );
}

export default Container;
