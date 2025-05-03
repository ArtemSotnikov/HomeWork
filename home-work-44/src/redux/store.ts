import {configureStore} from "@reduxjs/toolkit";
import {shoppingListReducer} from "./reducers.ts";

export const store = configureStore({
    reducer: {
        shoppingList : shoppingListReducer,
    }
})