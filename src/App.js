
import { useState,useEffect } from 'react';
import './App.css';
import axios from 'axios';

function App() {

  const [title, setTitle] = useState('');
  const [text, setText] = useState('');

const URL= 'https://api.jokes.one/jod'

  useEffect(() => {
    axios.get(URL)
    .then((response) =>{
    const joke = response.data.contents.jokes[0].joke
    setTitle(joke.title)
    setText(joke.text)
    }).catch(error =>{
      console.log(error)
      alert("Retrieving joke of the day failed!")
    })
  }, [])
  

  return (
    <div>
      <h3>Joke of the day</h3>
      <h4>{title}</h4>
      <p>{text}</p>
    </div>
  );
}

export default App;
