import React, { useState, useEffect } from "react";

import "./displayFacts.css";

function DisplayFacts({ isGameStarted }) {
    const COMPONENT_NAME = `DisplayFacts`;
    console.log(`${COMPONENT_NAME}: Entering component`);

    const [countryData, setCountryData] = useState();

    const API_URL = "https://restcountries.com/v3.1/all";

    useEffect(() => {
        if (isGameStarted) {
            console.log(`${COMPONENT_NAME}: useEffect - if statement`);

            loadCountryData();
        } else {
            console.log(`${COMPONENT_NAME}: useEffect - else statement`);
        }
    }, [isGameStarted]);

    const loadCountryData = async function () {
        console.log(`${COMPONENT_NAME}: Entering loadCountryData function`);
        const response = await fetch(API_URL);
        const data = await response.json();
        setCountryData(data);
        console.log(data);
        console.log(`${COMPONENT_NAME}: leaving loadCountryData function`);
    };

    if (countryData) {
    } else {
        console.log("DisplayFacts: else statement triggering");
        return <p>no music to display</p>;
    }
    return <p>country facts will display here</p>;
}
export default DisplayFacts;
