import React, { useEffect, useState } from 'react';
import { usePerson } from '../Hooks/usePerson';
import { Card, ListGroupItem } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { ListGroup } from 'react-bootstrap';
import { ImNext2 } from "react-icons/im";
import { ImPrevious2 } from "react-icons/im";
import {Link} from 'react-router-dom';


export const Personajes = () => {

  const {getAllPerson,dataPeople, Counter, Preview, Next} = usePerson();
  const [disabledL, setDisabledL] = useState(false);
  const [disabledR, setDisabledR] = useState(false);


  useEffect(()=>{

    getAllPerson(Counter);

    if(Counter ===9){
      setDisabledR(true);
    } else {
      setDisabledR(false);
    }

    if(Counter ===1){
      setDisabledL(true);
    } else {
      setDisabledL(false);
    }
  
    
  }, [dataPeople])

  return (
    <div>
      <div className='text-center'><h1 className='text-warning m-4'>Personajes</h1></div>
      <div className='d-flex flex-wrap'>
      {dataPeople.map((people) => (
        
            <Card
            bg='secondary'
            key={people.name}
            text='black'
            style={{ width: '18rem' }}
            className="m-4 shadow"
            >

           <Card.Img variant="top" src='https://www.elcorteingles.es/ideas-y-consejos/cultura-y-ocio/material/blog/cultura-y-ocio/11592_1610105106_mejores-personajes-de-star-wars.jpg' />
            <Card.Body>
                <Card.Title className="text-center"><h4>{people.name}</h4></Card.Title>
                <ListGroup>

                  <ListGroup.Item><strong>Altura:</strong> {people.height}</ListGroup.Item>
                  <ListGroup.Item><strong>Peso:</strong> {people.mass} Kg</ListGroup.Item>
                  <ListGroup.Item><strong>Cumpleaños:</strong> {people.birth_year}</ListGroup.Item>
                  <ListGroup.Item><strong>Genero:</strong> {people.gender}</ListGroup.Item>
                  <ListGroup.Item><strong>Color de ojos:</strong> {people.eye_color}</ListGroup.Item>
                  <ListGroup.Item><strong>Color de cabello:</strong> {people.hair_color}</ListGroup.Item>
                  
                </ListGroup>

               
                <div className='text-center mt-3'>
                  <Link to={`/details/${people.name}/${Counter}`} key ={people.name}>
                    <Button className="m-auto" variant="primary"> Detalles</Button>
                  </Link>
                </div>
            </Card.Body>
        </Card>
      ))}

      <div className='container text-center'>
        <Button id="back" className='mx-2 text-light shadow' disabled={disabledL} variant='dark' onClick={Preview}><ImPrevious2/></Button>
          <strong>{Counter}</strong>
        <Button id="next" className='mx-2 text-light shadow' disabled={disabledR}  variant='dark' onClick={Next}><ImNext2/></Button>
      </div>
      </div>
    </div>
  )
}
