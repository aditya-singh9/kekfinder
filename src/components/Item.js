import React, { useState , useContext} from "react";
import itemsContext from "../itemsContext";
import PropTypes from "prop-types";
import "./Item.css";

function Item({ id, symbol, keywords }) {
  const [fadeIn, setFadeIn] = useState(false);
  const {selectedItems,updateSelectedItems} = useContext(itemsContext)
  let recentEmojis = JSON.parse(localStorage.getItem("recentEmojis")) || [];

  const updateRecentEmojis = () => {
    const RECENTSLIMIT = 4;

    let index = -1;
    recentEmojis.forEach((emoji, i) => {
      if(emoji.symbol === symbol) index = i;
    });
    if(index >= 0 || recentEmojis.length === RECENTSLIMIT) {
      recentEmojis.splice(index, 1);
    }
  }

  const handleClick = (e) => {
    updateSelectedItems(selectedItems+symbol);
    updateRecentEmojis();
    localStorage.setItem("recentEmojis", JSON.stringify([{symbol, keywords}].concat(...recentEmojis)));
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
