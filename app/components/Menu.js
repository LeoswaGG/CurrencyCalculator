/**
 * The Menu function creates a header element with the title "DiviSwap" and a logo image.
 * @returns The `Menu` function is returning a header element with a class name of 'header' and inner
 * HTML containing a heading element `<h1>` with the text "DiviSwap" and an image element `<img>` with
 * the source pointing to "./app/assets/logo.png" and alt text "LOGO".
 */

export function Menu () {
  const $header = document.createElement( 'header' );
  $header.className = 'header';
  $header.innerHTML = `
  <h1>DiviSwap</h1><img src="./app/assets/logo.png" alt="LOGO" class="logo">`;
  return $header;
};
