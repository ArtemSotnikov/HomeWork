import {ItemData} from "../interfaces/ItemData.interface.ts";

export interface ItemProps extends ItemData {
    removeItem: (id: number) => void,
}

export default function Item( {id, name, amount, unit, bestBefore, removeItem}: ItemProps) {
    return (
        <>
            <div>ID: {id}</div>
            <div>Name: {name}</div>
            <div>Amount: {amount}</div>
            <div>Unit: {unit}</div>
            {bestBefore && <div>Best Before: {bestBefore}</div>}
            <button onClick={() => { removeItem(id) }}>Delete</button>
            <hr/>
        </>
    )
}