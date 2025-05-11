import type { ItemData } from "../interfaces/ItemData.interface.ts";
import Item from "./Item";
import type {AppDispatch} from "../redux/store.ts";
import {useDispatch, useSelector} from "react-redux";
import {itemsLoadingSelector, shoppingListSelector} from "../redux/selectors.ts";
import {getItemsFromServer, removeItem} from "../redux/shoppingListSlice.ts";
import {useEffect} from "react";

export default function ShoppingList() {
    const items = useSelector(shoppingListSelector);
    const dispatch = useDispatch<AppDispatch>();
    const loading: boolean = useSelector(itemsLoadingSelector);

    const handleRemoveItem = (id: number) => {
        dispatch(removeItem(id));
    }

    useEffect(() => {
        dispatch(getItemsFromServer());
    }, [dispatch]);


    return (
        <>
            {
                items.map((item: ItemData) =>
                    <Item key={item.id} removeItem={handleRemoveItem} {...item} />
                        )
            }
            {loading && <b>Loading additional items...</b>}
        </>
    )

}