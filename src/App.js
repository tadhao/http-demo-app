import './App.css';
import { useState } from 'react'

function App() {

  const [responseBody, setResponseBody] = useState();
  
 const fetchData = () => {
   fetch('https://swapi.dev/api/starships/22/')
   .then(response => response.json())
   .then(data => {
     console.log(data)
     setResponseBody(data)
    })
    .catch( error => {
      console.log(error.message)
    })

 }

  return (
    <div className="App">
      <h2>Testing HTTP Request</h2>
      <button onClick={fetchData}>Sync Data</button>
      <p>Name: {responseBody?.name}</p>
      <p>Model: {responseBody?.model}</p>
      <p>Manufactureer: {responseBody?.manufacturer}</p>
    </div>
  );
}

export default App;
