import type {RootState} from "./store.ts";

export const shoppingListSelector =
    (state: RootState) => state.shoppingList.items;

export const itemsLoadingSelector =
    (state: RootState) => state.shoppingList.loading;