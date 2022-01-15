import React, { useState, useEffect } from "react";

function Button({ buttonText, handleButtonClick }) {
    // TODO: add className to jsx and to input params
    return (
        <>
            <button onClick={handleButtonClick}>{buttonText}</button>
        </>
    );
}
export default Button;
