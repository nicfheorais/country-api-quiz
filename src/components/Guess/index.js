import { React, useEffect, useState } from "react";

import Button from "../Button/index.js";
import Input from "../Input/index.js";

function Guess({
    inputText,
    setGuess,
    buttonText,
    setIsProcessingGuess,
    isGameStarted,
}) {
    function handleGuessClick() {
        setIsProcessingGuess(true);
    }
    if (isGameStarted) {
        return (
            <>
                <Input inputText={inputText} setState={setGuess} />
                <Button
                    buttonText={buttonText}
                    handleButtonClick={() => {
                        handleGuessClick();
                    }}
                />
            </>
        );
    } else {
        return <div></div>;
    }
}

export default Guess;
