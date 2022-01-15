# Guess the Country Quiz

Guess the country based on a series of facts - front end react app retrieving data from restful API

with thanks to the API creators of https://restcountries.com/v3.1 which i'm using for this demo

## Aim

Given a series of facts about a country, the aim is to guess the country with as few facts as possible. Each time you make an incorrect guess, an additional country fact displays.

## How to play

-   Press play
-   A random country is retrieved from the API and the game is afoot
-   A single fact about that country is displayed
-   the player enters a guess and presses 'Guess' when happy
-   The application checks - if they are right - they win that round
-   if they are not right, a new fact is displayed and the player can guesss again
-   there is a 'give up button' and the anser is displayed.
-

## Scoring

-   player starts with 10 points. Loeses a point for each fact displayed before they guess the right answer. When 10 facts are displayed, or when the player presses the 'give up' button, the answer is shown.
