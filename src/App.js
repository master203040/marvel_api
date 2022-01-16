import Navigation from "./components/Navigation";
import {useState,useEffect} from 'react';



function App() {

  const [personajes,setPersonajes]= useState([])

  const uri='https://kitsu.io/api/edge/trending/anime';

    function getCharacter(){
      fetch(uri)
      .then(res=>res.json())
      .then(response=>{
        const {data=[]}=response
        console.log(data)
        setPersonajes(data)
      })
    }


    useEffect(()=>{
      getCharacter()
    },[])


  return (
    <>
    
      <Navigation/>
      <div className="container mt-5">
        <div className="row">
          {personajes.map((personajes,index)=>(
            <div key={index} className="col-lg-3 col">
                <div className="card mt-5" style={{minwidth:'200px'}}>
                  <img src={personajes.image} alt=''/>
                  <div className="card-body">
                    <h5 className="card-title">titles:{personajes.name}</h5>
                    <hr/>
                    <p className="text-dark">createdAt:{personajes.explanation}</p>
                    <p className="text-dark"> popularityRank:{}</p>
                    <p className="text-dark"> Id:{}</p>
                  </div>
                </div>
            </div>
          ))}

        </div>
      </div>
    </>
    
  );
}

export default App;
