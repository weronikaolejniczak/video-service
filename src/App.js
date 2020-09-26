import React, {useState} from 'react';
import {Header, Main, Footer} from './components'
import './App.css';

function App() {
  const [theme, setTheme] = useState('light');

  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
