import {RootState} from "./store.ts";

export const shoppingListSelector =
    (state: RootState) => state.shoppingList.items;