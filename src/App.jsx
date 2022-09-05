import './App.scss';
import React from 'react';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Results from './components/Results';
import request from './components/request';

const App = () => {
  const [selectedOption, setSelectedOption] = React.useState(request.fetchTrending)
  return <div className='app'>
    <Header setSelectedOption={setSelectedOption} />
    <Navbar setSelectedOption={setSelectedOption} />
    <Results selectedOption={selectedOption} />
  </div> 
};

export default App;