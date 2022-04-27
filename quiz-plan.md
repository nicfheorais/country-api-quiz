# Requirements and plan for delivering

## MVP

-   display the game title
-   display a play button
-   when play button is clicked,
    -   retrieve all the country information
    -   display a country clue for a specific country (i am using sweden, 247, initially)
    -   display a Guess field and Guess button

[user types in a guess and presses 'Guess']

-   either display 'correct'  
    or
    display 'wrong' AND display a Guess Again field and Guess Again button AND display the hint in a 'list' below? and display the incorrect guess in a list below (css - red line strikethrough) - a history?

phase 2

-   potentially per session current guesses left (5/10), no. games played, rolling score etc. - w

-   if login allowed - username, previous scores etc.

## Next Goals to achieve a fully functioning app

-   change so that a random country is retrieved (rather than one hardcoded one)
-   search for and blank out any mention of the country in the retrieved text)

## Bells and whistles

-   instead of showing the country clues in a fixed order each time (area, flags, continent,etc), change it so that it displays the clues in a random order (harder than it sounds because i've had toselect a subset of country facts as suitable forclues, and eachoof those have a different format- so are strings, some are arrays, some are nested objects etc)
