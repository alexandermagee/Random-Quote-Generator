import React from 'react';
import logo from './logo.svg';
import './App.css';

/* function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to shit.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
 */

export class App extends React.Component {
  render() {
    return (
      <main id="quote-box">
        <article id="text">
        How wonderful it is that nobody need wait a single moment before starting to improve the world.
        </article>
        <aside id="author">- Anne Frank</aside>
        <section id="buttons">
          <div>
            <button id="tweet-quote">Tw</button>
            <button>Tu</button>
          </div>
          <button id="new-quote">New quote</button>
        </section>

      </main>
    );
  }
}

export default App; 
