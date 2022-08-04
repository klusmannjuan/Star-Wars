import React from "react";
import Tarjetas from "./Cards";
import { container} from "react-bootstrap";

import imgcard1 from "../assets/img/imagen1.jpg";
import imgcard2 from "../assets/img/imagen2.jpg";
import imgcard3 from "../assets/img/imagen3.jpg";

  const Cartas = [
  {
    id: 1,
    titulo: "Boba Fett",
    imagen: imgcard1,
    texto: " Boba Fett fue un cazarrecompensas humano, y el clon del infame cazarrecompensas Jango Fett. Boba fue creado por los clonadores de Kamino y era físicamente idéntico a los soldados clon creados para el Gran Ejército de la República, aunque Boba fue inalterado y no creció aceleradamente como los demás clones. Criado como el hijo de Jango, Boba aprendió las habilidades de combate necesarias para algún día convertirse en cazarrecompensas por derecho propio.",
    boton: "Mas informaciòn de Boba Fett "
  }, 
  {
    id:2,
    titulo: "Darth Vader",
    imagen: imgcard2,
    texto: " Darth Vader, un Señor Oscuro de los Sith y aprendiz del Emperador Darth Sidious. Como Lord Sith, Vader se volvió contra sus antiguos camaradas y dió caza a los Jedi sobrevivientes hasta su casi extinción. Se convirtió en un ejecutor del Imperio Galáctico, que trabajó para aplastar a la Alianza para Restaurar la República por oponerse a la voluntad de su Maestro Sith.",
    boton: "Mas informaciòn de Darth Vader"

  },
  {
    id:3,
    titulo: "Obi-Wan Kenobi",
    imagen: imgcard3,
    texto: " Obi-Wan Kenobi fue un legendario Maestro Jedi humano que sirvió en el Alto Consejo Jedi durante los últimos añosde la Era de la República. Como General Jedi, Kenobi sirvió en el Gran Ejército de la República durante las Guerras Clon. Kenobi, sin embargo, se vio obligado a exiliarse como resultado de la Gran Purga Jedi. Como mentor, Kenobi fue responsable del entrenamiento de dos miembros de la familia Skywalker, Anakin Skywalker y Luke Skywalker, sirviendo ambos como su Padawan para aprender los caminos de la Fuerza. ",
    boton: "Mas informaciòn de Obi-Wan Kenobi"
  },
  ];

  const CardsApp =() => {
    return(
        <container className="d-flex justify-content-center flex-wrap">
            {Cartas.map((Card)=>(
                <Tarjetas key={Card.id} titulo={Card.titulo} imagen={Card.imagen} texto={Card.texto}  boton={Card.boton} />
            ))}
        </container>
    );
  };
  
  export default CardsApp;