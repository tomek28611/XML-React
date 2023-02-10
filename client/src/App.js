import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/data')
      .then(res => res.json())
      .then(result => setData(result))
      .catch(error => console.error(error));
  }, []);


  return (
    <div className="App">
    {data ? 
    <div className='bg-gray-100'>
      <div className='mt-4 text-center bg-gray-200 font-semibold text-xl'>Produktů je : {data.length}</div>
      <h1 className='mt-6 font-bold text-2xl ml-4'>Názvy produktů : </h1>

      <div className='mt-4 font-italic ml-10'>
        <ul>
          {data.map(item => (
            <li key={item.$.code}>- {item.$.name}</li>

          ))}
        </ul>
      </div>

    </div> : <div>Loading...</div>}
    </div>
  );
}

export default App;
