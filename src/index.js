import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import JSON from './breed.json'
import Breed from './breed';

class App extends React.Component {
  render() {
    return (

      <header>
        <div>Logo</div>
        <div className='input-now'>input</div>
        <Breed/>
        <input/>
      </header>
    );
  }
}

// ========================================

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
