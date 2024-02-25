/**
 * The `App` function in JavaScript clears the content of the root element on the page and then appends
 * new content.
 */
import { Menu } from './components/Menu.js';
import { Footer } from './components/Footer.js';
import { Main } from './components/Main.js';
import { Select } from './helpers/select.js';
import { Calculous } from './helpers/calculous.js';

export function App () {
  const $root = document.getElementById( 'root' );

  $root.innerHTML = null; // cleans the page before charges content
  $root.appendChild( Menu() ); // insert content
  $root.appendChild( Main() );
  $root.appendChild( Footer() );

  Select();
  Calculous();
}
