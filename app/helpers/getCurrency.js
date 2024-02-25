/* This JavaScript code defines a set of functions to fetch exchange rates from the Banco de México
API. Here's a breakdown of what the code does: */
const TOKEN = "5f61acb817557584de3d9b2a22c3f1c6c2cd99885e99f73a9b0c06d8833d427d";
const urls = {
  "USD": `https://www.banxico.org.mx/SieAPIRest/service/v1/series/SF63528/datos/oportuno?token=${ TOKEN }`,
  "EUR": `https://www.banxico.org.mx/SieAPIRest/service/v1/series/SF46410/datos/oportuno?token=${ TOKEN }`,
  "JPY": `https://www.banxico.org.mx/SieAPIRest/service/v1/series/SF46406/datos/oportuno?token=${ TOKEN }`,
  "GBP": `https://www.banxico.org.mx/SieAPIRest/service/v1/series/SF46407/datos/oportuno?token=${ TOKEN }`,
};
// get USD value
export const getUsd = async () => {
  try {
    const response = await fetch( urls.USD );
    if ( !response.ok ) throw `An error ocurred: ${ response.status } ${ response.statusText }`;
    const data = await response.json();
    const USD = parseFloat( data.bmx.series[ 0 ].datos[ 0 ].dato.slice( 0, 5 ) );
    return USD;
  } catch ( error ) {
    return error;
  }
};
// get EUR value
export const getEur = async () => {
  try {
    const response = await fetch( urls.EUR );
    if ( !response.ok ) throw `An error ocurred: ${ response.status } ${ response.statusText }`;
    const data = await response.json();
    const EUR = parseFloat( data.bmx.series[ 0 ].datos[ 0 ].dato.slice( 0, 5 ) );
    return EUR;
  } catch ( error ) {
    return error;
  }
};
// get JPY value
export const getJpy = async () => {
  try {
    const response = await fetch( urls.JPY );
    if ( !response.ok ) throw `An error ocurred: ${ response.status } ${ response.statusText }`;
    const data = await response.json();
    const JPY = parseFloat( data.bmx.series[ 0 ].datos[ 0 ].dato.slice( 0, 4 ) );
    return JPY;
  } catch ( error ) {
    return error;
  }
};
// get GBP value
export const getGbp = async () => {
  try {
    const response = await fetch( urls.GBP );
    if ( !response.ok ) throw `An error ocurred: ${ response.status } ${ response.statusText }`;
    const data = await response.json();
    const GBP = parseFloat( data.bmx.series[ 0 ].datos[ 0 ].dato.slice( 0, 5 ) );
    return GBP;
  } catch ( error ) {
    return error;
  }
};
// get MXN value
export const getMxn = () => {
  return 1;
};
