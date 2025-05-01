
interface ItemProps {
    id: number;
    name: string;
    amount: number;
    unit: string;
    bestBefore?: string;
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