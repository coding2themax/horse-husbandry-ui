import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import JSON from './breed.json'
import Breed from './breed';
import Header from './breed_header';

class App extends React.Component {

  state = {
    breedList: JSON,
  }

  render() {

    const {breedList} = this.state;
    return (
      <>
      <Header/>
      <Breed breedList={breedList}/>
      </>
    );
  }
}

// ========================================

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
