import {createContext, Dispatch, SetStateAction} from "react";

import {ItemData} from "../interfaces/ItemData.interface.ts";

interface ShoppingListContextType {
    items: ItemData[];
    setItems: Dispatch<SetStateAction<ItemData[]>>;
    handleRemoveItem: (id: number) => void;
}

export const ShoppingListContext = createContext <ShoppingListContextType> ({
    items: [],
    setItems: () => {},
    handleRemoveItem: () => {},
});