import {createAsyncThunk, createSlice, type PayloadAction} from "@reduxjs/toolkit";
import type {ItemData} from "../interfaces/ItemData.interface.ts";
import {itemsData} from "../lists/itemsData.ts";

interface ShoppingListState {
    items: ItemData[],
    loading: boolean
}

const initialState : ShoppingListState = {
    items: itemsData,
    loading: false
}

export const getItemsFromServer = createAsyncThunk(
    'items/getItemsFromServer',
    async (): Promise<ItemData[]> => {
        await new Promise(resolve => setTimeout(resolve, 3000));

        const response = await fetch('https://artemsotnikov.github.io/itemsData.json');
        if (!response.ok) {
            throw new Error('Server query was not successful: ' + response.statusText);
        }

        return await response.json();
    }
);

function getItemsWithNewIDs(state: ShoppingListState, action: PayloadAction<ItemData[]>): ItemData[] {
    const currentIds = state.items.map(item => item.id);
    let nextId = currentIds.length ? Math.max(...currentIds) + 1 : 1;

    return action.payload.map(item => ({
        ...item,
        id: nextId++
    }));
}

const shoppingListSlice = createSlice({
    name: "shoppingList",
    initialState,
    reducers : {
        removeItem: (state,  action: PayloadAction<number>) => {
            state.items = state.items.filter(item => item.id !== action.payload);
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(
                getItemsFromServer.pending,
                (state) => {
                    state.loading = true;
                }
            )
            .addCase(
                getItemsFromServer.fulfilled,
                (state, action: PayloadAction<ItemData[]>) => {
                    state.loading = false;

                    const newItems = getItemsWithNewIDs(state, action);

                    state.items = [...state.items, ...newItems];
                })
    }
})

export const { removeItem } = shoppingListSlice.actions;
export default shoppingListSlice.reducer;