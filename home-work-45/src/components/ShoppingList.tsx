import { ItemData } from "../interfaces/ItemData.interface.ts";
import Item from "./Item";
import {AppDispatch} from "../redux/store.ts";
import {useDispatch, useSelector} from "react-redux";
import {shoppingListSelector} from "../redux/selectors.ts";
import {removeItem} from "../redux/shoppingListSlice.ts";

export default function ShoppingList() {
    const items = useSelector(shoppingListSelector);
    const dispatch = useDispatch<AppDispatch>();

    const handleRemoveItem = (id: number) => {
        dispatch(removeItem(id));
    }

    return (
        <>
            {
                items.map((item: ItemData) =>
                    <Item key={item.id} removeItem={handleRemoveItem} {...item} />
                        )
            }
        </>
    )

}