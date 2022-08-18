import React from "react";
import Card  from "react-bootstrap/Card";
import Personajes from "../../Pages/Personajes";

const  Cpersonajes =(Personajes) => {
    return (
      <div className="col-md-3">
        <Card style={{ width: '18rem' }} class="personajes">
          <Card.Img variant="top" src= {Personajes.imagen} />
          <Card.Body>
            <Card.Title>{Personajes.name}</Card.Title>
            <Card.Description>
                <strong>Heigth</strong>
                <p>{Personajes.heigth}</p>
                <strong>Mass</strong>
                <p>{Personajes.mass}</p>
                <strong>Hair_color</strong>
                <p>{Personajes.hair_color}</p>
            </Card.Description>
          </Card.Body>
        </Card>
      </div>  
    );
  }
  
  export default Cpersonajes;

