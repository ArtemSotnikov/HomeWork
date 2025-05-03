import { ItemData } from "../interfaces/ItemData.interface.ts";
import Item from "./Item";
import {useDispatch, useSelector} from "react-redux";
import {ShoppingListState} from "../redux/types.ts";
import {removeItem} from "../redux/actions.ts";

export default function ShoppingList() {
    const items = useSelector((state: { shoppingList: ShoppingListState }) => state.shoppingList.items);
    const dispatch = useDispatch();

    const handleRemoveItem = (id: number) => {
        // @ts-expect-error To remove TS error for dispatch type.
        dispatch(removeItem(id));
    };

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