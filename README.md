# "Guess the Country" Quiz App

Guess a random country based on a series of facts - front end React app retrieving data from RESTful API

with thanks to the API creators of https://restcountries.com/v3.1, which i'm using for this demo

## Aim

Given a series of facts about a country chosen at random, the aim is for the player to guess the country with as few facts as possible. Each time the player makes an incorrect guess, an additional country fact displays, and the old facts, and incorrect answers, are displayed in a list.

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

## Design

### Wireframes

<img src="./public/quiz-design-mid-game-mobile.png" alt="Wireframe design for mobile version, showing a game in progress" width="100"/>
<img src="./public/quiz-design-mid-game-desktop.png" alt="Wireframe design for desktop version, showing a game in progress" width="200"/>

<br />

### Component Breakdown

<img src="./public/quiz-design-component-breakdown-desktop.png" alt="Component breakdonw for desktop version" width="300"/>

## Documentation:

Wireframe design and Component breakdown are here:

[quiz-design.drawio](./quiz-design.drawio)

Plan for how to break down the problem is here:

[quiz-plan.md](./quiz-plan.md)
