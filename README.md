# CATEGORIES SIDEBAR

This project is a solution for recruitment task.

## Task description

The goal of this task was to create a categories' sidebar with its functionalities (the same as the sidebar on the https://iforbet.pl/ website) with the use of data fetched from API endpoint (https://api.iforbet.pl/rest/market/categories). Esport category had to be rendered at the end of the categories' list.

The project should not have lint errors.

## Tech stack

[Create React App](https://github.com/facebook/create-react-app)
[React](https://reactjs.org/)
[Redux Toolkit](https://redux.js.org/redux-toolkit/overview)
[REST API](https://api.iforbet.pl/rest/market/categories)
[MUI icons](https://mui.com/material-ui/material-icons/)
[Styled Components](https://styled-components.com/docs/basics)

## How it works

The sidebar consists of nested categories:
LEVEL 1 - sports
LEVEL 2 - leagues
LEVEL 3 - games

If sport or league category are clicked, all leagues or games assigned to the category are shown respectively.

You can choose the leaque (by clicking on the league name) or individual game/games (by checking the appropriate input) - they are marked by green color then.

All categories chosen/checked are stored in global state and can be used to display data (not required in the task).

## Installation

In the project directory:
1. Install all dependencies by running npm install.
2. Run the app in the development mode with the command npm start.
3. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## CORS policy error

If you have problems with fetching data from API endpoint and CORS policy error occurs you can install and temporarily activate browser plugin which adds (Access-Control-Allow-Origin: *) rule to the response header and allow to perform cross-domain Ajax requests in web applications.

[Example plugin for Chrome](https://chrome.google.com/webstore/detail/allow-cors-access-control/lhobafahddgcelffkeicbaginigeejlf?hl=pl)