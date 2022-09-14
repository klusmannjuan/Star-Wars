import React, { useEffect } from "react";
import { Button } from "react-bootstrap";
import { usePerson } from "../../Hooks/usePerson";
import { useParams } from "react-router-dom";




export const DPersonaje = () => {
  const { back, getAllPerson, dataPeople } = usePerson();


  const params = useParams();
  const listParams = [params];

  const mapeo = listParams.map((list) => list.linkname);
  const mapeo2 = listParams.map((list) => list.num);

  var nombre = mapeo[0];
  var numero = mapeo2[0];


  useEffect(() => {

    getAllPerson(numero);

  }, []);


  const filtro = dataPeople.filter((inFilter) => inFilter.name === nombre);

  return (
    <div>
      <Button className="btn-r btn-primary shadow mt-5 ms-5" onClick={back}>
          Regresar
      </Button>
      <h1 className="text-center text-warning mb-5">Detalle del Personaje</h1>
      <div className="container mb-5">
        <div className="card mb-23 shadow bg-dark">
          <div className="row g-0">
            <div className="col-md-5 d-md-none d-lg-block">
            <img src='https://fondosmil.com/fondo/23628.jpg' className="img img-fluid img-top " alt="General"  />
            </div>
            <div className="col-md-7">
              <div className="card-body text-light">
                <div className="ms-4"><h3 className="card-title text-warning">Nombre: {nombre}</h3></div>
                <div className="ms-4">
                {filtro.map((persona) => (
                  <div key={persona.name} className="row mt-4">

                    <div className="col-md-6">
                      <h5><b className="text-warning">Creado</b> </h5>
                      <p>{persona.created}</p>
                      <h5><b className="text-warning">Año de nacimiento</b> </h5>
                      <p>{persona.birth_year}</p>
                      <h5><b className="text-warning">Altura</b> </h5>
                      <p>{persona.height} cm</p>
                      <h5><b className="text-warning">Peso</b> </h5>
                      <p>{persona.mass} kg</p>
                      <h5><b className="text-warning">Genero</b></h5>
                      <p>{persona.gender}</p>
                    </div>

                    <div className="col-md-6">
                      <h5><b className="text-warning">Editado</b></h5>
                      <p>{persona.edited}</p>
                      <h5><b className="text-warning">Color de ojos</b></h5>
                      <p>{persona.eye_color}</p>
                      <h5><b className="text-warning">Color de cabello</b> </h5>
                      <p>{persona.hair_color}</p>
                      <h5><b className="text-warning">Color de piel</b> </h5>
                      <p>{persona.skin_color}</p>
                    </div>

                  </div>
                ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

