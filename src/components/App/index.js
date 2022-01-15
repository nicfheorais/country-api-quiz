import "./App.css";

import DisplayFacts from "../DisplayFacts/index.js";
import Header from "../Header/index.js";
import PlayButton from "../PlayButton/index.js";
import React, { useState } from "react";

function App() {
    const COMPONENT_NAME = `App`;
    console.log(`${COMPONENT_NAME}: Entering component`);

    const [isGameStarted, setIsGameStarted] = useState(false);

    const MAIN_TITLE = `Guess The Country`;

    return (
        <div className="App">
            <Header headerText={MAIN_TITLE} />
            <PlayButton
                buttonText="Play"
                isGameStarted={isGameStarted}
                setIsGameStarted={setIsGameStarted}
            />
            <DisplayFacts />
        </div>
    );
}

export default App;
