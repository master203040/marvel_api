import Navigation from "./components/Navigation";
import {useState,useEffect} from 'react';

 

//http://www.omdbapi.com/?i=tt3896198&apikey=a2ee356d&s=batman


function App() {

  const [series,setSeries]= useState([])

  const uri='https://www.breakingbadapi.com/api/characters ';

      const obtenerDatos = async ()=>{
        const data =await fetch(`${uri}`)
        const characters= await data.json()
        console.log(characters)
        setSeries(characters)
      }


    useEffect(()=>{
      obtenerDatos()
    },[])


  return (
    <>
      <main>
        <Navigation/>
        <div className="container mt-5">
          <div className="row">
            {series.map((item)=>(
              <div key={item} className="col-lg-3 col">
                  <div className="card mt-5" style={{minwidth:'150px'}}>
                    <img src={item.img} widt={100} heigth={100} alt=''/>
                    <div className="card-body">
                      <h5 className="card-title">titles: {item.name}</h5>
                      <hr/>
                      <p className="text-dark">Alternate Names: {item.species}</p>
                      <p className="text-dark"> Place wherei lived: {item.house}</p>
                      <p className="text-dark"> Category: {item.category}</p>
                    </div>
                  </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
    
  );
}

export default App;
