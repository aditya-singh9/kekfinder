import React, { useState , useContext} from "react";
import itemsContext from "../itemsContext";
import PropTypes from "prop-types";
import "./Item.css";

function Item({ id, symbol, keywords }) {
  const [fadeIn, setFadeIn] = useState(false);
  const {selectedItems,updateSelectedItems} = useContext(itemsContext)
  let recentEmojis = JSON.parse(localStorage.getItem("recentEmojis")) || [];

  // to add weights to frequently used emojis
  let currentEmojiWeight;

  const updateRecentEmojis = () => {
    // max number of suggested emojis
    const RECENTSLIMIT = 10;

    let index = -1;
    currentEmojiWeight = 0;
    recentEmojis.forEach((emoji, i) => {
      if(emoji.symbol === symbol) {
        index = i;
        currentEmojiWeight = emoji.weight;
      }
      // slowly reducing emoji recency weight with each search
      if(recentEmojis[i].weight > 0) recentEmojis[i].weight -= 1;
    });

    if(index >= 0 || recentEmojis.length === RECENTSLIMIT) {
      recentEmojis.splice(index, 1);
    }
  }

  const handleClick = (e) => {
    updateSelectedItems(selectedItems+symbol);
    updateRecentEmojis();
    const newRecentEntry = {
      symbol,
      keywords,
      weight: Math.min(currentEmojiWeight + 5, 100)     // adding mild priority (upto 100) to newly searched emoji in recents list
    };
    recentEmojis = [newRecentEntry].concat(...recentEmojis);

    // sort in decreasing weight
    recentEmojis.sort((a, b) => b.weight - a.weight);
    localStorage.setItem("recentEmojis", JSON.stringify(recentEmojis));
    console.log(newRecentEntry, recentEmojis);
    
    setFadeIn(true);
    setTimeout(()=>{
      setFadeIn(false);
    },900)
  };


  return (
    <div
      key={id}
      className={`item ${fadeIn && "item-selected"}`}
      title="Select Emoji"
      onClick={(e)=>{handleClick(e)}}
    >
      <div className={`item-copy ${fadeIn ? "label-true" : "label-false"}`}>
        Selected!
      </div>
      <span className="item-emoji">{symbol}</span>
    </div>
  );
}

Item.propTypes = {
  id: PropTypes.number,
  symbol: PropTypes.string,
  keywords: PropTypes.string,
};

export default Item;
