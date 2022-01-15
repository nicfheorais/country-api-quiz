import React, { useState } from "react";

function PlayButton({ buttonText, isGameStarted, setIsGameStarted }) {
    const COMPONENT_NAME = `PlayButton`;
    console.log(`${COMPONENT_NAME}: Entering component`);

    function handlePlayClick() {
        console.log(`${COMPONENT_NAME}: Entering handlePlayClick`);
        console.log(
            `${COMPONENT_NAME}: before, isGameStarted= ${isGameStarted}`
        );
        setIsGameStarted(true);
        console.log(
            `${COMPONENT_NAME}: after, isGameStarted= ${isGameStarted}`
        );
    }
    return (
        <button
            onClick={() => {
                handlePlayClick();
            }}
        >
            {buttonText}
        </button>
    );
}
export default PlayButton;
