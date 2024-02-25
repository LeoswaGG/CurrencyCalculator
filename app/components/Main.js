/**
 * The Main function creates a main element with input fields for quantity, currency selection, and a
 * conversion button.
 * @returns The `Main` function is returning a dynamically created HTML `main` element with input
 * fields for quantity, currency selection, a conversion button, and a result paragraph.
 */
export function Main () {
  const $main = document.createElement( 'main' );
  $main.innerHTML = `
  <div class="container">
      <div>
      <input placeholder="Enter the quantity" type="number" class="value">
      </div>
      <div class="selector">
          <div id="selectorField">
            <div class="iconC">
              <img src="./app/assets/dollar.png" alt="icon" id="dollar">
              <p id="selectCurrency">Select a Currency</p>
            </div>
            <div class="arrowC">
              <img class="icon" src="./app/assets/arrow.png" alt="icon">
            </div>
          </div>
          <ul id="list" class="hidden">
            <li class="options">
              <img class="symbol" alt="USD" src="./app/assets/mxn.png">
              <p>MXN - Mexican Pesos</p>
            </li>
            <li class="options">
              <img class="symbol" alt="USD" src="./app/assets/usd.png">
              <p>USD - U.S Dollars</p>
            </li>
            <li class="options">
              <img class="symbol" alt="EUR" src="./app/assets/eur.png">
              <p>EUR - Euros</p>
            </li>
            <li class="options">
              <img class="symbol" alt="JPY" src="./app/assets/jpy.png">
              <p>JPY - Japanese Yen</p>
            </li>
            <li class="options">
              <img class="symbol" alt="GBP" src="./app/assets/gbp.png">
              <p>GBP - British Pound</p>
            </li>
          </ul>
      </div>

      <div class="selector">
  <div id="selectorField2">
    <div class="iconC">
      <img src="./app/assets/money.png" alt="icon" id="dollar2">
      <p id="selectCurrency2">Select a Currency</p>
    </div>
    <div class="arrowC">
      <img class="icon2" src="./app/assets/arrow.png" alt="icon">
    </div>
  </div>
  <ul id="list2" class="hidden">
    <li class="options2">
      <img class="symbol" alt="USD" src="./app/assets/mxn.png">
      <p>MXN - Mexican Pesos</p>
    </li>
    <li class="options2">
      <img class="symbol" alt="USD" src="./app/assets/usd.png">
      <p>USD - U.S Dollars</p>
    </li>
    <li class="options2">
      <img class="symbol" alt="EUR" src="./app/assets/eur.png">
      <p>EUR - Euro</p>
    </li>
    <li class="options2">
      <img class="symbol" alt="JPY" src="./app/assets/jpy.png">
      <p>JPY - Japanese Yen</p>
    </li>
    <li class="options2">
      <img class="symbol" alt="GBP" src="./app/assets/gbp.png">
      <p>GBP - British Pound</p>
    </li>
  </ul>
</div>
  <div>
    <form>
    <input type="submit" value="Conversion" class="conversion">
    </form>
    </div>
    <p class="result"></p>
  </div>`;
  return $main;
}
