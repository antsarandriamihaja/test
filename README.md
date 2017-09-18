

## Available scripts:

- [npm start](#npm-start). 
Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
- [npm test](#npm-test).
Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](#running-tests) for more information.
- [npm run build](#npm-run-build)
- [npm run eject](#npm-run-eject)

## Technologies used

The main tool used here is React.js.
This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

For animation, the library `react-motion` was used.
This project also uses twitter Bootstrap.

## Folder Structure

* `public/index.html` is the page template;
* `src/index.js` is the JavaScript entry point.

## Disclaimer

I realize that there are a lot that can be improved. 
My main <App/> component is too large and should be divided into multiple components. For example, have the different renderAddContact,renderEditContact and so on, be a separate functional component on their own.
There are also some lengthy, ugly code that I wish to improve on.
I also would have liked to add more animation, when a contact is added or deleted. I tried doing this animation using `react-motion` TransitionMotion component, but it didn't quite work out.
Additionally, there is no validation implementation on the form inputs.

## Demo 
