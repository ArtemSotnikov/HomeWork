
interface ItemProps {
    id: number;
    name: string;
    amount: number;
    unit: string;
    bestBefore?: string;
}

export default function Item( {id, name, amount, unit, bestBefore}: ItemProps) {
    return (
        <>
            <div>ID: {id}</div>
            <div>Name: {name}</div>
            <div>Amount: {amount}</div>
            <div>Unit: {unit}</div>
        </>
    )
}