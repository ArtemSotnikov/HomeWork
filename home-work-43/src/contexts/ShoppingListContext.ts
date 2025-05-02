import {createContext, Dispatch, SetStateAction} from "react";

import {ItemData} from "../interfaces/ItemData.interface.ts";

interface ShoppingListContextType {
    items: ItemData[];
    setItems: Dispatch<SetStateAction<ItemData[]>>;
}

export const ShoppingListContext = createContext <ShoppingListContextType> ({
    items: [],
    setItems: () => {},
});