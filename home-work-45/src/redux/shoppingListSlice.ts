import {createSlice} from "@reduxjs/toolkit";
import {ItemData} from "../interfaces/ItemData.interface.ts";

interface ShoppingListState {
    items: ItemData[]
}

const initialState : ShoppingListState = {
    items: []
}

const shoppingListSlice = createSlice({
    name: "shoppingList",
    initialState,
    reducers : {
        removeItem: (state : ShoppingListState) => {
            state.items.filter(item => item.id !== action.payload)
        }

    }
})

export const { removeItem } = shoppingListSlice.actions;
export default shoppingListSlice.reducer;