/**
 * The function `Calculous` performs currency conversion based on user input and selected currencies.
 */
import { getUsd } from './getCurrency.js';
import { getEur } from './getCurrency.js';
import { getJpy } from './getCurrency.js';
import { getGbp } from './getCurrency.js';
import { getMxn } from './getCurrency.js';


export function Calculous () {
  getUsd();
  getEur();
  getJpy();
  getGbp();
  getMxn();

  document.addEventListener( 'submit', ( e ) => {
    e.preventDefault();
    const $quantity = document.querySelector( '.value' ).value;
    const $input = document.getElementById( 'selectCurrency' );
    const $input2 = document.getElementById( 'selectCurrency2' );
    const $output = document.querySelector( '.result' );

    if ( $quantity === '' ) {
      $output.textContent = 'Please, enter a valid quantity';
    } else {
      if ( $input.textContent.includes( 'MXN' ) && $input2.textContent.includes( 'MXN' ) ) {
        const result = $quantity * getMxn();
        $output.textContent = `${ $quantity } MXN  = ${ result } MXN`;
      } else if ( $input.textContent.includes( 'MXN' ) && $input2.textContent.includes( 'USD' ) ) {
        getUsd().then( usd => {
          const value = ( $quantity * ( 1 / usd ) ).toFixed( 2 );
          $output.textContent = `${ $quantity } MXN  = ${ value } USD`;
        } ).catch( ( e ) => {
          $output.textContent = `${ e }`;
        } );
      } else if ( $input.textContent.includes( 'MXN' ) && $input2.textContent.includes( 'EUR' ) ) {
        getEur().then( eur => {
          const value = ( $quantity * ( 1 / eur ) ).toFixed( 2 );
          $output.textContent = `${ $quantity } MXN  = ${ value } EUR`;
        } ).catch( ( e ) => {
          $output.textContent = `${ e }`;
        } );
      } else if ( $input.textContent.includes( 'MXN' ) && $input2.textContent.includes( 'JPY' ) ) {
        getJpy().then( jpy => {
          const value = ( $quantity * ( 1 / jpy ) ).toFixed( 2 );
          $output.textContent = `${ $quantity } MXN  = ${ value } JPY`;
        } ).catch( ( e ) => {
          $output.textContent = `${ e }`;
        } );
      } else if ( $input.textContent.includes( 'MXN' ) && $input2.textContent.includes( 'GBP' ) ) {
        getGbp().then( gbp => {
          const value = ( $quantity * ( 1 / gbp ) ).toFixed( 2 );
          $output.textContent = `${ $quantity } MXN  = ${ value } GBP`;
        } ).catch( ( e ) => {
          $output.textContent = `${ e }`;
        } );
      } else if ( $input.textContent.includes( 'USD' ) && $input2.textContent.includes( 'MXN' ) ) {
        getUsd().then( usd => {
          const value = ( $quantity * usd ).toFixed( 2 );
          $output.textContent = `${ $quantity } USD  = ${ value } MXN`;
        } ).catch( ( e ) => {
          $output.textContent = `${ e }`;
        } );
      } else if ( $input.textContent.includes( 'USD' ) && $input2.textContent.includes( 'USD' ) ) {
        $output.textContent = `${ $quantity } USD  = ${ $quantity } USD`;
      } else if ( $input.textContent.includes( 'USD' ) && $input2.textContent.includes( 'EUR' ) ) {
        $output.textContent = `NO DATA`;
      } else if ( $input.textContent.includes( 'USD' ) && $input2.textContent.includes( 'JPY' ) ) {
        $output.textContent = `NO DATA`;
      } else if ( $input.textContent.includes( 'USD' ) && $input2.textContent.includes( 'GBP' ) ) {
        $output.textContent = `NO DATA`;
      } else if ( $input.textContent.includes( 'EUR' ) && $input2.textContent.includes( 'MXN' ) ) {
        getEur().then( eur => {
          const value = ( $quantity * eur ).toFixed( 2 );
          $output.textContent = `${ $quantity } EUR  = ${ value } MXN`;
        } ).catch( ( e ) => {
          $output.textContent = `${ e }`;
        } );
      } else if ( $input.textContent.includes( 'EUR' ) && $input2.textContent.includes( 'USD' ) ) {
        $output.textContent = `NO DATA`;
      } else if ( $input.textContent.includes( 'EUR' ) && $input2.textContent.includes( 'EUR' ) ) {
        $output.textContent = `${ $quantity } EUR  = ${ $quantity } EUR`;
      } else if ( $input.textContent.includes( 'EUR' ) && $input2.textContent.includes( 'JPY' ) ) {
        $output.textContent = `NO DATA`;
      } else if ( $input.textContent.includes( 'EUR' ) && $input2.textContent.includes( 'GBP' ) ) {
        $output.textContent = `NO DATA`;
      } else if ( $input.textContent.includes( 'JPY' ) && $input2.textContent.includes( 'MXN' ) ) {
        getJpy().then( jpy => {
          const value = ( $quantity * jpy ).toFixed( 2 );
          $output.textContent = `${ $quantity } JPY  = ${ value } MXN`;
        } ).catch( ( e ) => {
          $output.textContent = `${ e }`;
        } );
      } else if ( $input.textContent.includes( 'JPY' ) && $input2.textContent.includes( 'USD' ) ) {
        $output.textContent = `NO DATA`;
      } else if ( $input.textContent.includes( 'JPY' ) && $input2.textContent.includes( 'EUR' ) ) {
        $output.textContent = `NO DATA`;
      } else if ( $input.textContent.includes( 'JPY' ) && $input2.textContent.includes( 'JPY' ) ) {
        $output.textContent = `${ $quantity } JPY  = ${ $quantity } JPY`;
      } else if ( $input.textContent.includes( 'JPY' ) && $input2.textContent.includes( 'GBP' ) ) {
        $output.textContent = `NO DATA`;
      } else if ( $input.textContent.includes( 'GBP' ) && $input2.textContent.includes( 'MXN' ) ) {
        getGbp().then( gbp => {
          const value = ( $quantity * gbp ).toFixed( 2 );
          $output.textContent = `${ $quantity } GBP  = ${ value } MXN`;
        } ).catch( ( e ) => {
          $output.textContent = `${ e }`;
        } );
      } else if ( $input.textContent.includes( 'GBP' ) && $input2.textContent.includes( 'USD' ) ) {
        $output.textContent = `NO DATA`;
      } else if ( $input.textContent.includes( 'GBP' ) && $input2.textContent.includes( 'EUR' ) ) {
        $output.textContent = `NO DATA`;
      } else if ( $input.textContent.includes( 'GBP' ) && $input2.textContent.includes( 'JPY' ) ) {
        $output.textContent = `NO DATA`;
      } else if ( $input.textContent.includes( 'GBP' ) && $input2.textContent.includes( 'GBP' ) ) {
        $output.textContent = `${ $quantity } GBP  = ${ $quantity } GBP`;
      } else {
        $output.textContent = 'Not valid currency';
      }
    };
  } );
};
