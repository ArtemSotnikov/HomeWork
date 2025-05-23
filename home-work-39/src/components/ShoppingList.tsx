import { useState } from "react";
import { ItemData } from "../interfaces/ItemData.interface.ts";
import { itemsData } from "../lists/itemsData.ts";
import Item from "./Item";

export default function ShoppingList() {
const [items, setItems] = useState(itemsData);

    function handleRemoveItem(id: number) {
        console.log(`Remove ${id} from shopping list`);
        setItems(items.filter(item => item.id !== id));
    }

    return (
        <>
            {
                items.map((item: ItemData) =>
                    <Item key={item.id} removeItem={handleRemoveItem} id={item.id} name={item.name} amount={item.amount} unit={item.unit} bestBefore={item.bestBefore} />
                        )
            }
        </>
    )

}