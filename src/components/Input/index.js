import React, { useState } from "react";

function Input({ inputText, setState }) {
    function handleInputChange(event) {
        setState(event.target.value);
    }

    // TODO: add className to jsx and to input params
    return (
        <>
            <label>
                {inputText}
                <input
                    onChange={handleInputChange}
                    // value={guess}
                />
            </label>
        </>
    );
}
export default Input;
