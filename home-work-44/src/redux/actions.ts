import {REMOVE_ITEM, ShoppingListActionTypes} from "./types.ts";


export const removeItem = (id: number): ShoppingListActionTypes => ({
    type: REMOVE_ITEM,
    payload: id
});
