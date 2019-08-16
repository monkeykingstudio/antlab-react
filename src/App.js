import React from 'react';
import 'bulma';
import './scss/styles.scss'

function App() {
  return (
    <div className="App">
      <section className="section">
        <div className="container">
          <h1 className="title">
            Hello World
          </h1>
          <p className="subtitle">
            My first website with <strong>Bulma</strong>!
          </p>
        </div>
      </section>

      <div className="columns">
        <div className="column">
          First column
        </div>
        <div className="column">
          Second column
        </div>
        <div className="column">
          Third column
        </div>
        <div className="column">
          Fourth column
        </div>
      </div>
    </div>
  );
}

export default App;
