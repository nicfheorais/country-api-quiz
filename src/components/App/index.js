import React, { useState } from "react";
import "./App.css";

import Header from "../Header/index.js";
import Play from "../Play/index.js";
import Guess from "../Guess/index.js";
import DisplayClues from "../DisplayClues/index.js";

function App() {
    const COMPONENT_NAME = `App`;
    // console.log(`${COMPONENT_NAME}: Entering component`);

    const [isGameStarted, setIsGameStarted] = useState(false);
    const [guess, setGuess] = useState("");
    const [isProcessingGuess, setIsProcessingGuess] = useState(false);

    return (
        <div className="App">
            <Header headerText="Guess The Country" />
            <Play
                buttonText="Play Now"
                isGameStarted={isGameStarted}
                setIsGameStarted={setIsGameStarted}
            />
            <Guess
                inputText="Your guess is: "
                setGuess={setGuess}
                buttonText="Guess Now"
                setIsProcessingGuess={setIsProcessingGuess}
                isGameStarted={isGameStarted}
            />
            <DisplayClues isGameStarted={isGameStarted} />
        </div>
    );
}

export default App;
