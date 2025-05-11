import {createSlice, type PayloadAction} from "@reduxjs/toolkit";
import type {ItemData} from "../interfaces/ItemData.interface.ts";
import {itemsData} from "../lists/itemsData.ts";

interface ShoppingListState {
    items: ItemData[]
}

const initialState : ShoppingListState = {
    items: itemsData
}

const shoppingListSlice = createSlice({
    name: "shoppingList",
    initialState,
    reducers : {
        removeItem: (state,  action: PayloadAction<number>) => {
            state.items = state.items.filter(item => item.id !== action.payload);
        }
    }
})

export const { removeItem } = shoppingListSlice.actions;
export default shoppingListSlice.reducer;