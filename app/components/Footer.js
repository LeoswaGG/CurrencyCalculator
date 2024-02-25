/**
 * The `Footer` function creates a footer element with a link to the GitHub page of LeoswagDev.
 * @returns A footer element containing a link to the GitHub profile of "LeoswagDev" with the text "©
 * Page made by LeoswagDev ツ" is being returned.
 */
export function Footer () {
  const $footer = document.createElement( 'footer' );
  $footer.innerHTML = `<a href="https://github.com/LeoswaGG" rel="noopener" target="_blank">© Page made by LeoswagDev ツ</a>`;
  return $footer;
}
