/**
 * The function `Select` handles the selection of currency options by toggling visibility and updating
 * content based on user interactions.
 */

export function Select () {
  const $div = document.getElementById( 'selectorField' );
  const $p = document.getElementById( 'selectCurrency' );
  const $img = document.getElementById( 'dollar' );
  const $ul = document.getElementById( 'list' );
  const $iconImg = document.querySelector( '.icon' );
  const options = document.getElementsByClassName( 'options' );

  const $div2 = document.getElementById( 'selectorField2' );
  const $p2 = document.getElementById( 'selectCurrency2' );
  const $img2 = document.getElementById( 'dollar2' );
  const $ul2 = document.getElementById( 'list2' );
  const $iconImg2 = document.querySelector( '.icon2' );
  const options2 = document.getElementsByClassName( 'options2' );
  // 1
  $div.onclick = function () {
    $ul.classList.toggle( 'hidden' );
    $iconImg.classList.toggle( 'rotate' );
  };
  for ( let i = 0; i < options.length; i++ ) {
    options[ i ].onclick = function () {
      $p.innerHTML = this.textContent;
      $img.src = this.querySelector( '.symbol' ).src;
      $ul.classList.toggle( 'hidden' );
      $iconImg.classList.toggle( 'rotate' );
    };
  }
  // 2
  $div2.onclick = function () {
    $ul2.classList.toggle( 'hidden' );
    $iconImg2.classList.toggle( 'rotate' );
  };
  for ( let i = 0; i < options2.length; i++ ) {
    options2[ i ].onclick = function () {
      $p2.innerHTML = this.textContent;
      $img2.src = this.querySelector( '.symbol' ).src;
      $ul2.classList.toggle( 'hidden' );
      $iconImg2.classList.toggle( 'rotate' );
    };
  }
}
