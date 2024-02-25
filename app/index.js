/* This code is importing the `App` function from the `App.js` file and adding event listeners to the
`DOMContentLoaded` and `hashchange` events. */
import { App } from './App.js';

document.addEventListener( 'DOMContentLoaded', App );
window.addEventListener( 'hashchange', () => {
  App();
} );
