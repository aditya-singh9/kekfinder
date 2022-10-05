import React from 'react'
import { useContext } from 'react'
import itemsContext from '../../itemsContext'
import './ItemsSelected.css'
import toast, { Toaster } from "react-hot-toast";
import 'react-toastify/dist/ReactToastify.css';

function ItemsSelected() {
  const { selectedItems, updateSelectedItems } = useContext(itemsContext)
  const copyBtnFunc = () => {
    if (selectedItems.length !== 0) {
      navigator.clipboard.writeText(selectedItems.join(""));
      updateSelectedItems([]);
      toast.success("Copied!")
    }
  }
  const deleteBtnFunc = () => {
    updateSelectedItems(selectedItems.slice(0, -1));
  }
  return (
    <div className='sub-container'>
      {
        selectedItems.length !== 0 &&
        <div className='itemsSelected'>
          <span className='textest'>Selected emojis: </span>
          <span className='itemsSelectedSymbols'>{selectedItems.join("")}</span>
        </div>
      }
      <div className='itemsSelectedBtns'> <button
        style={{ marginRight: '5px' }}
        type='button'
        className='copyBtn'
        onClick={copyBtnFunc}
        title="Copy Emoji to Clipboard"
      >
        <img
          src='https://cdn-icons-png.flaticon.com/512/860/860787.png'
          width='18px'
          height='18px'
          alt='Delete'
        />
        <span>Copy</span>
      </button>
        <button
          type="button"
          className="deleteBtn"
          onClick={deleteBtnFunc}
          title="Delete Emoji from End"
        >
          <img
            src='https://cdn-icons-png.flaticon.com/512/4209/4209885.png'
            width='18px'
            height='18px'
            alt='Delete'
          />
          <span>Delete</span>
        </button></div>
    </div>
  )
}

export default ItemsSelected
