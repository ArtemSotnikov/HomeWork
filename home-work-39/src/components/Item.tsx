
interface ItemProps {
    id: number;
    name: string;
    amount: number;
    unit: string;
    bestBefore?: string;
    deleteItem: (id: number) => void,
}

export default function Item( {id, name, amount, unit, bestBefore}: ItemProps) {
    return (
        <>
            <div>ID: {id}</div>
            <div>Name: {name}</div>
            <div>Amount: {amount}</div>
            <div>Unit: {unit}</div>
            {bestBefore && <div>Best Before: {bestBefore}</div>}
            <button onClick={() => { deleteItem(id) }}>Delete</button>
            <hr/>
        </>
    )
}