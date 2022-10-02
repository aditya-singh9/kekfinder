import React from 'react'
import { useContext } from 'react'
import itemsContext from '../itemsContext'
import './ItemsSelected.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function ItemsSelected() {
  const { selectedItems, updateSelectedItems } = useContext(itemsContext)
  const copyBtnFunc = () => {
    if (selectedItems !== "") {
      navigator.clipboard.writeText(selectedItems)
      updateSelectedItems("")
      toast.success('Copied to Clipboard 📋!', {
        position: "bottom-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  }
  const deleteBtnFunc = () => {
    updateSelectedItems(selectedItems.substr(0, (selectedItems.length) - 2))
  }
  return (
    <div className='sub-container'>
      <div className='itemsSelected'>{selectedItems}</div>
      <div> <button
        style={{ marginRight: '5px' }}
        type='button'
        className='copyBtn'
        onClick={copyBtnFunc}
        title="Copy Emoji to Clipboard"
      >
        📋
      </button>
        <button
          type="button"
          className="deleteBtn"
          onClick={deleteBtnFunc}
          title="Delete Emoji from End"
        >
          <img
            src='https://res.cloudinary.com/nishantwrp/image/upload/v1587486661/CSOC/delete.svg'
            width='18px'
            height='22px'
            alt='Delete'
          />
        </button></div>

      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  )
}

export default ItemsSelected
