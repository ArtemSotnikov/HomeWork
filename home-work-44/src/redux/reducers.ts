
import {REMOVE_ITEM, ShoppingListActionTypes, ShoppingListState} from "./types.ts";
import {itemsData} from "../lists/itemsData.ts";


const initialState: ShoppingListState = {
    items: itemsData,
}

export const shoppingListReducer = (
    state: ShoppingListState = initialState,
    action: ShoppingListActionTypes
) : ShoppingListState  => {
    switch (action.type) {
        case REMOVE_ITEM:
            return {
                ...state,
                items: state.items.filter(item => item.id !== action.payload)
            }
            default:
                return state;
    }
}