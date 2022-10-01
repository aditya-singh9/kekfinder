import React, { useState , useContext} from "react";
import itemsContext from "../itemsContext";
import PropTypes from "prop-types";
import "./Item.css";

function Item({ id, symbol, keywords }) {
  const [fadeIn, setFadeIn] = useState(false);
  const {selectedItems,updateSelectedItems} = useContext(itemsContext)

  const handleClick = (e) => {
    updateSelectedItems(selectedItems+symbol)
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
