import React, { useState, useEffect } from "react";

import "./displayFacts.css";

//The API provides a lot of key-value info about each country, only some of which is suitable for a 'guess the country' quiz.
//Also, the values can be strings, arrays, imanges etc - so each key has a specific format

function DisplayClues({ isGameStarted }) {
    const COMPONENT_NAME = `DisplayClues`;
    // console.log(`${COMPONENT_NAME}: Entering component`);

    const [countryData, setCountryData] = useState();

    const API_URL = "https://restcountries.com/v3.1/all";

    useEffect(() => {
        if (isGameStarted) {
            // console.log(`${COMPONENT_NAME}: useEffect - if statement`);

            loadCountryData();
        } else {
            // console.log(`${COMPONENT_NAME}: useEffect - else statement`);
        }
    }, [isGameStarted]);

    const loadCountryData = async function () {
        // console.log(`${COMPONENT_NAME}: Entering loadCountryData function`);
        const response = await fetch(API_URL);
        const data = await response.json();
        setCountryData(data);
        console.log(data[247]);
        // console.log(data[247].capital);
        // console.log(`${COMPONENT_NAME}: leaving loadCountryData function`);
    };

    if (countryData) {
        // console.log(`${COMPONENT_NAME}: if statement triggering`);
        let country = countryData[247];

        let { area, continents, capital } = countryData[247];
        const CLUES = {
            area: `The country covers ${area} square miles`,
            borders: "",
            continent: `The country is on the continent of ${continents[0]}`,
            coatOfArms: "",
            currency: "",
            flags: "",
        };
        const HINTS = {
            capital: `The capital is ${capital}`,
            borders: `The country borders on ${[...country.borders]}`,
        };

        const ANSWER = {
            commonName: `The country is commonly known as ${country.name.common}`,
            officialName: `The official name is ${country.name.official}`,
        };

        console.log(CLUES);
        console.log(HINTS);
        console.log(ANSWER);
        return (
            <>
                <p>Clue 1: The country covers {country.area} square miles</p>
                <p>
                    Clue 2: The country is on the continent of{" "}
                    {country.continents[0]}
                </p>
            </>
        );
    } else {
        // console.log(`${COMPONENT_NAME}: else statement triggering`);
        return <p>no country facts to display yet</p>;
    }
}
export default DisplayClues;
