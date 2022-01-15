import Navigation from "./components/Navigation";
import axios from 'axios';
import {useState,useEffect} from 'react';


//https://gateway.marvel.com:443/v1/public/characters?apikey=

//key publico: 6fbf271c8c778fde84cb652dd69deb8c

//key privado: 3c41255e1c7aa783bf37b7ee27fe81695946ac76

//tr:1

// 16fbf271c8c778fde84cb652dd69deb8c3c41255e1c7aa783bf37b7ee27fe81695946ac76

//hash:c18fea4db9880eac713763ed54916c8a

function App() {

  const [personajes,setPersonajes]= useState([])

    useEffect(()=>{
      axios.get('https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=6fbf271c8c778fde84cb652dd69deb8c&hash=c18fea4db9880eac713763ed54916c8a')
      .then((res)=>{
        setPersonajes(res.data)
        console.log(res.data)
      })
      .catch(error=>console.log(error))
      
      
    },[])


  return (
    <>
    
      <Navigation/>
      
    </>
    
  );
}

export default App;
