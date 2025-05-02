import {ReactNode, useState} from "react";
import {ShoppingListContext} from "../contexts/ShoppingListContext.ts";
import {itemsData} from "../lists/itemsData.ts";
import {ItemData} from "../interfaces/ItemData.interface.ts";


const ShoppingListContextProvider = ({children} : { children: ReactNode}) => {
    const [items, setItems] = useState<ItemData[]>(itemsData);

    return (
       <ShoppingListContext.Provider value={{items, setItems}} >
           {children}
       </ShoppingListContext.Provider>
    );
}

export default ShoppingListContextProvider;