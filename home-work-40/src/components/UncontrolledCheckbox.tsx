import { useRef } from "react";
import * as React from "react";

export default function UncontrolledCheckbox() : Element {
    const inputRef = useRef<HTMLInputElement>(null);
    const checkRef = useRef<HTMLInputElement>(null);

    const handleClick = (event : React.MouseEvent<HTMLInputElement>) : void => {
        const inputValue : string | undefined = inputRef.current?.value.trim();
        const toBeChecked : boolean = (event.target as HTMLInputElement).checked;

        if (toBeChecked) {
            if (!inputValue || inputValue === "Please type your message here") {
                alert("Please check your input before submission");
                event.preventDefault();
                return;
            }

            if (inputRef.current) {
                inputRef.current.disabled = true;
            }
        } else {
            if (inputRef.current) {
                inputRef.current.disabled = false;
            }
        }
    }

    return (
        <>
            <div>
                <label htmlFor="uncontrolledCheckbox">Check and submit text if not empty:</label>
                <input type="checkbox"
                       ref={checkRef}
                       onClick={handleClick}/>
                <br/>
                <input
                    type="text"
                    name="message"
                    ref={inputRef}
                    placeholder="Please type your message here"/>
            </div>
        </>
    )
}