import { createGlobalStyle } from 'styled-components';


export const GlobalStyles = createGlobalStyle`

  /* Ensuring all elements use border-box for box-sizing */
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  /* Styling text selection for various browsers */
  ::-moz-selection { /* Code for Firefox */
  background: ${({ theme }) => theme.selection};
  }

  ::selection {
  background: ${({ theme }) => theme.selection};
  }

  /* General styling for the body */
  body {
    background: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.text};
  }

  /* Custom stylings mainly to match colors according to the chosen theme*/
  footer {
    position: absolute;
    bottom: 5%;
    left: 50%;
    transform: translateX(-50%);
  }

  small {
    display: block;
  }

  button {
    display: block;
  }
  
  contact-button {
    display: block;
    width: 1.7em;
    height: 1.7em;
    margin: 0 auto;
    background: ${({ theme }) => theme.backgroundImage} no-repeat center center;
    border-radius: 50%;
    background-size: 100%;
    cursor: pointer;  
    transform: rotate(-90deg) 

  }

  infinity-button {
    width: 2em;
    height: 2em;
    border-radius: 1.5em;
    background: ${({ theme }) => theme.modalBackground};
    background-size: 85% auto, cover;
    background-clip: content-box, border-box;  
    transform: rotate(-90deg)
  }

section {
  color: ${({ theme }) => theme.textColorVariation};
}
  /* a {
    color: ${({ theme }) => theme.text};
  } */

  main {
    background: ${({ theme }) => theme.modalBackground};
   
  }

  header {
    background: ${({ theme }) => theme.heroBackground};  
  }

  span {
    color: ${({ theme }) => theme.textHighlight};
  
  }
 figure {
  background: ${({ theme }) => theme.gradient};  
 }


`;

// Überschriften:
// <h1>, <h2>, <h3>, <h4>, <h5>, <h6>

// Absätze und Textformatierung:
// <p>, <br>, <strong>, <em>, <span>

// Listen:

// Ungeordnete Liste: <ul>, <li>
// Geordnete Liste: <ol>, <li>
// Definitionsliste: <dl>, <dt>, <dd>

// Hyperlinks:
// <a>

// Bilder:
// <img>

// Multimedia:
// <video>, <audio>

// Tabellen:
// <table>, <tr>, <td>, <th>

// Formularelemente:
// <form>, <input>, <textarea>, <select>, <button>

// Struktur:
// <div>, <span>, <header>, <footer>, <nav>, <section>, <article>, <aside>

// Semantische Elemente:
// <main>, <figure>, <figcaption>, <time>, <mark>, <blockquote>, <cite>
// HTML5-Elemente:

// <header>, <nav>, <main>, <section>, <article>, <aside>, <footer>, <figure>, <figcaption></figcaption>
