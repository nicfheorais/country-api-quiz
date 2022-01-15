import React, { useState } from "react";
import Button from "../Button/index.js";

function Play({ buttonText, isGameStarted, setIsGameStarted }) {
    const COMPONENT_NAME = `PlayButton`;
    // console.log(`${COMPONENT_NAME}: Entering component`);

    function handlePlayClick() {
        // console.log(`${COMPONENT_NAME}: Entering handlePlayClick`);
        // console.log(
        //     `${COMPONENT_NAME}: before, isGameStarted= ${isGameStarted}`
        // );
        setIsGameStarted(true);
        // console.log(
        //     `${COMPONENT_NAME}: after, isGameStarted= ${isGameStarted}`
        // );
    }

    if (isGameStarted) {
        return <div></div>;
    } else {
        return (
            <Button
                buttonText={buttonText}
                handleButtonClick={() => {
                    handlePlayClick();
                }}
            />
        );
    }
}
export default Play;
