import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Records from './components/Records';
import Title from './components/Title';

function App() {

  const [records, setRecords] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
      .then((response) => response.json())
      .then((result) => setRecords(result), console.log('result', records));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <Title/>
      <Records records={records}/>
    </div>
  );
}

export default App;
