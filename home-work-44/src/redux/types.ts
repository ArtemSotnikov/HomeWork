import {ItemData} from "../interfaces/ItemData.interface.ts";

export interface ShoppingListState {
    items: ItemData[];
}

export const REMOVE_ITEM = "REMOVE_ITEM";

interface RemoveItemAction {
    type: typeof REMOVE_ITEM;
    payload: number;
}

export type ShoppingListActionTypes = RemoveItemAction;