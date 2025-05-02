import {useContext} from "react";
import { ItemData } from "../interfaces/ItemData.interface.ts";
import Item from "./Item";
import {ShoppingListContext} from "../contexts/ShoppingListContext.ts";

export default function ShoppingList() {
    const { items, setItems } = useContext(ShoppingListContext);

    function handleRemoveItem(id: number) {
        console.log(`Remove ${id} from shopping list`);
        setItems(items.filter(item => item.id !== id));
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