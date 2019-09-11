import React, { Component } from 'react';
import './App.css';
import DogsListContainer from './components/DogListContainer';
import {Route} from 'react-router-dom'
import DogBreedImagesContainer from './components/DogBreedImagesContainer'

class App extends Component {
  render() {
    return (
      <div className="App">
         <main>
            <Route exact path="/" component={DogsListContainer} />
            <Route path="/dog-breeds/:breed" component={DogBreedImagesContainer} />
         </main>
      </div>
    );
  }
}

export default App;
