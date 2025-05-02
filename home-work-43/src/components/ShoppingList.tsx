import { useState } from "react";
import { ItemData } from "../interfaces/ItemData.interface.ts";
import { itemsData } from "../lists/itemsData.ts";
import Item from "./Item";

export default function ShoppingList() {
const [items, setItems] = useState<ItemData[]>(itemsData);

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