import React from "react";
import Card  from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";


const  Tarjetas =(props) => {
  return (
    <div className="col-md-3">
      <Card style={{ width: '18rem' }} class="tarjetas">
        <Card.Img variant="top" src= {props.imagen} />
        <div className="scroll">
        <Card.Body>
          <Card.Title>{props.titulo}</Card.Title>
          <Card.Text>
            {props.texto}
          </Card.Text>
          <Button variant="primary">{props.boton} </Button>
        </Card.Body>
        </div>
      </Card>
    </div>  
  );
}

export default Tarjetas;