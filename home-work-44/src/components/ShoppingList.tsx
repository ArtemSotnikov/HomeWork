import {useContext} from "react";
import { ItemData } from "../interfaces/ItemData.interface.ts";
import Item from "./Item";
import {ShoppingListContext} from "../contexts/ShoppingListContext.ts";

export default function ShoppingList() {
    const { items, handleRemoveItem} = useContext(ShoppingListContext);

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