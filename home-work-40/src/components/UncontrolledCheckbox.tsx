import { useRef } from "react";

export default function UncontrolledCheckbox() {
    const inputRef = useRef<HTMLInputElement>(null);

    const handleCheck = () => {
        const inputValue = inputRef.current?.value.trim();

        if (!inputValue || inputValue === "Please type your message here") {
            alert("Please check your input before submission");
        }
    }

    return (
        <>
            <div>
                <label htmlFor="uncontrolledCheckbox">Check text if not empty:</label>
                <input type="checkbox"  onChange={handleCheck}/>
                <br/>
                <input
                    type="text"
                    name="message"
                    ref={inputRef}
                    placeholder="Please type your massage here"/>
            </div>
        </>
    )
}