import React from "react";
import Card  from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";


const  Tarjetas =(props) => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src= {props.imagen} />
      <Card.Body>
        <Card.Title>{props.titulo}</Card.Title>
        <Card.Text>
          {props.texto}
        </Card.Text>
        <Button variant="primary">{props.boton} </Button>
      </Card.Body>
    </Card>
  );
}

export default Tarjetas;