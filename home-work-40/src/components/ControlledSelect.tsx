import { useState } from 'react';

export default function ControlledSelect() {
    const [option, setOption] = useState<number>(0);

    return (
        <>
            <div>
                <label htmlFor="controlledSelect">Options:</label>
                <select value={option} onChange={(e) => setOption(Number(e.target.value))}>
                    <option value={0}>Default option</option>
                    <option value={1}>First option</option>
                    <option value={2}>Second option</option>
                    <option value={3}>Third option</option>
                </select>
            </div>

            <p>Selected option: {option === 0 ? 'Default' : option}</p>
        </>
    )
}