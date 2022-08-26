import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import Button from 'react-bootstrap/Button';

export const Personajes = () => {
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
    
      <div className="d-flex justify-content-center flex-wrap">
        {" "}
        {people.map((people) => (
          <div className="personajes" key={setPeople}>

              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src="https://estaticos.muyinteresante.es/media/cache/760x570_thumb/uploads/images/test/5cbeea135cafe88451149213/sw1.jpg" />
                <div className="scroll">
                <Card.Body>
                  <Card.Title>{people.name}</Card.Title>
                  <Card.Text>
                  
                    <h5>Genero</h5>
                    <p>{people.gender}</p>
                    <h3>Nacimiento</h3>
                    <p>{people.birth_year}</p>
                    <h3>Altura</h3>
                    <p>{people.height}</p>
                    <h3>Color de ojos</h3>
                    <p>{people.eye_color}</p>
                    <h3>Color de cabello</h3>
                    <p>{people.hair_color}</p>
                    <h3>Peso en KG:</h3>
                    <p>{people.mass}</p>
                    <h3>Color piel </h3>
                    <p>{people.skin_color}</p>
              </Card.Text>
              <a href="./Pages/DPersonaje"><Button variant="outline-primary">Detalle</Button>{' '}</a>
            </Card.Body>
            </div>
          </Card>
        </div>
      ))}
    </div>
  );
};


export default Personajes;
