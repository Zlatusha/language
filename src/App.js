import React, { useState } from 'react';
import './App.css';
import Showcase from './components/showcase';
import Dropdown from './components/dropdown';
import { rus } from './components/showcase/translator';


const App = () => {

  const [language, setLanguage] = useState(rus)
  return (
    <div className="container">
      <Dropdown setLanguage={setLanguage}/>
      <Showcase language={language}/>
    </div>
  );

}

export default App;
