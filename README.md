# react-rock-paper-scissors

Rock, Paper, Scissors game built in ReactJS.

## How to run it

1. Clone repository

`git clone https://github.com/anaisamp/react-rock-paper-scissors.git`

2. Install dependencies

`npm i`

3. Running the application

`npm run start`

4. Running tests

`npm run test`, followed by `a` to run all tests

## Technical decisions

- For a quick and ease boilerplate project I used `create-react-app`.
- I didn't find the need of using Redux. I was able to describe the application state as a plain object. Although Redux allows us describing changes as ordinary objects (actions) and handling changes as pure functions, in this application the state changes are handled in a single place, coupling "what happened" and "how things change" to ease understand the logic behind state update.

### Next steps

- CSS Modules and PostCSS usage
- Improve layout and overall styling
- Split the application into more components (eg. Footer component to load Rock, Paper, Scissors options; Score component to display user and computer scores)
- Reevaluate the need of Redux for managing state if we decide to include more features, such as reset game, store results in a database, load previous game status, etc.