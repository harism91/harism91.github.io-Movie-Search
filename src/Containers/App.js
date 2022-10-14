import React from 'react';
import './App.css';
import MovieList from '../Components/MovieList'

class App extends React.Component {
  render() {
    return (
      <div className='container'>
        <h1 className="title">Movie Search</h1>
        <MovieList />
      </div>
    );
  }
}

export default App;
