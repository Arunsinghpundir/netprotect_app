## Status: Working

<a href="https://netprotect-app.vercel.app/">Hoisted Link</a>

# `Cricket Score Data App`

## `App Description`

This app is Displaying the Cricket Score of specific country.

You can check between `Test data` or `Server data`.

If you check the `Test data` checkBox then local data will be shown by the app.

If you check the `Server data` checkBox then data from the server will be shown by the app.

You have to manually type the Country Name according to the country name and the average score will be displayed next to the country.

If any country not present in the data it will display `N/A` and if country is present it will show the average score.

The average score calculated will be displayed in the `blue` colored progression bar.

<hr/>

### `Tech Stack` :

<li>ReactJS,
<li>CSS 
<li>Api

<hr/>

### `App Functionality` :

Here app is managing its state by using `UseState` hook provided by the `React` Library.

Side effects of the app is handling by the `UseEffect` hook including :

 <li> Api Fetch
 <li> Console.log
 
 <br/>

If you want to understand the full functionality of this app please check the `App.js` file.

 <hr/>

<br/>

## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!
