import {ReactNode, useState} from "react";
import {ShoppingListContext} from "../contexts/ShoppingListContext.ts";
import {itemsData} from "../lists/itemsData.ts";
import {ItemData} from "../interfaces/ItemData.interface.ts";


const ShoppingListContextProvider = ({children} : { children: ReactNode}) => {
    const [items, setItems] = useState<ItemData[]>(itemsData);

    function handleRemoveItem(id: number) {
        console.log(`Remove ${id} from shopping list`);
        setItems(items.filter(item => item.id !== id));
    }

    return (
       <ShoppingListContext.Provider value={{items, setItems, handleRemoveItem}} >
           {children}
       </ShoppingListContext.Provider>
    );
}

export default ShoppingListContextProvider;