import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import Button from 'react-bootstrap/Button';

export const DPersonaje = () => {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    async function fetchPeople() {
      const personaje = await fetch("https://swapi.dev/api/people/");
      const data = await personaje.json();
      setPeople(data.results);
    }
    fetchPeople();
  }, []);

  return (
    
    <div className="container-D ">
        
        <h1>Detalle del Personaje</h1>

        <div className="container-img">
        <img
              alt=""
              src="http://www.alucine.es/wp-content/uploads/2015/07/162.jpg"
              width="350"
              height="350"
              className=" align-top"
            />

            <div className="detalles">
              <div clasName="texto">
                <h3>nombre</h3>

                <div className="detalle-gri">
                    <div className="detalle-in">
                      <h5>Homeworld</h5>
                      <p>{people.homeworld}</p>
                      
                    </div>

                    <div className="detalle-in">
                      <h5>Films</h5>
                      <p>{people.films}</p>
                      
                    </div>

                    <div className="detalle-in">
                    <h5>Species</h5>
                    <p>{people.species}</p>

                      
                    </div>

                    <div className="detalle-in">
                    <h5>Vehicles</h5>
                    <p>{people.vehicles}</p>

                      
                    </div>

                    <div className="detalle-in">
                    <h5>starships</h5>
                    <p>{people.starships}</p>

                      
                    </div>

                    <div className="detalle-in">
                    <h5>Created</h5>
                    <p>{people.mass}</p>

                      
                    </div>

                </div>
                
              </div>
            </div>
        </div>    
        
        <div className="C-Detalle  d-flex justify-content-center flex-wrap"> 
            {people.map((people) => (    
            <div className="personajes" key={setPeople}>
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://www.latercera.com/resizer/FI4p5m12tYx731lGJxPVapPvXUo=/900x600/smart/arc-anglerfish-arc2-prod-copesa.s3.amazonaws.com/public/F6MGM2EP5NGS7M4XZEPJPXRUF4.png" />
            <div className="scroll">
                <Card.Body>
                    <Card.Text>
                    <h5>Homeworld</h5>
                    <p>{people.homeworld}</p>
                    <h5>Films</h5>
                    <p>{people.films}</p>
                    <h5>Species</h5>
                    <p>{people.species}</p>
                    <h5>Vehicles</h5>
                    <p>{people.vehicles}</p>
                    <h5>starships</h5>
                    <p>{people.starships}</p>
                    <h5>Created</h5>
                    <p>{people.mass}</p>
                    
                    
                    </Card.Text>
                </Card.Body>
                </div>
            </Card>
        </div>
        ))}
    </div>
    </div>
  );
};


export default DPersonaje;