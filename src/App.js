import React, {useState} from 'react';
import {Header, Main, Footer} from './components'
import './App.css';

function App() {
  const [theme, setTheme] = useState('light');

  return (
    <div className={theme === 'dark' ? "dark-app" : "app"}>
      <Header theme={theme} setTheme={setTheme} />
      <Main theme={theme} />
      <Footer theme={theme} />
    </div>
  );
}

export default App;
