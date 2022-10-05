import itemsContext from "./itemsContext";
import { useState } from "react";

const ItemsState = (props)=>{
    const [selectedItems,updateSelectedItems] = useState([]);
    return(
        <itemsContext.Provider value={{selectedItems,updateSelectedItems}}>
            {props.children}
        </itemsContext.Provider>
    )
}

export default ItemsState;