import React, { useEffect } from "react";
import { Button } from "react-bootstrap";
import planetas from "../assets/img/planetas.jpg";
import { useParams } from "react-router-dom";
import { IoReturnUpBackSharp } from "react-icons/io5";
import { usePlanets } from "../../Hooks/usePlanets";
import './details.css';





export const DPlanetas = () => {
  const { back, getAllPlanets,dataPlanets} = usePlanets();
 

  const params = useParams();
  const listParams = [params];

  const mapeo = listParams.map((list) => list.linkname);
  const mapeo2 = listParams.map((list) => list.num);

  var nombre = mapeo[0];
  var numero = mapeo2[0];

  useEffect(() => {

    getAllPlanets(numero);

  }, []);

  const filtro = dataPlanets.filter((inFilter) => inFilter.name === nombre);

  return (
    <div>
      <Button className="btn-r btn-primary shadow mt-5 ms-5" onClick={back}>
          regresar
      </Button>
      <h1 className="text-center mb-5 text-warning ">Detalle Planeta</h1>
      <div className="container mb-5">
        <div className="card mb-3 shadow bg-dark">
          <div className="row g-0">
            <div className="col-md-5 d-md-none d-lg-block">
            <img src={planetas} className="img img-fluid img-top"  alt="General"/>
            </div>
            <div className="col-md-7">
              <div className="card-body text-light">
                <div className="ms-4 text-warning"><h3 className="card-title">Nombre planeta {nombre}</h3></div>
                <div className="ms-5">
                {filtro.map((planeta) => (
                  <div key={planeta.name} className="row mt-4 text-light">
                    <div className="col-md-6">
                      <h6><b className="text-warning">Creado</b></h6>
                      <p>{planeta.created}</p>
                      <h6><b className="text-warning">Periodo de rotación</b> </h6>
                      <p>{planeta.rotation_period}</p>
                      <h6><b className="text-warning">Periodo orbital</b> </h6>
                      <p>{planeta.orbital_period} cm</p>
                      <h6><b className="text-warning">Diametro</b> </h6>
                      <p>{planeta.diameter} kg</p>
                      
                    </div>
                    <div className="col-md-6">
                      <h6><b className="text-warning">Gravedad</b> </h6>  
                      <p>{planeta.gravity}</p>
                      <h6><b className="text-warning">Terreno</b> </h6>
                      <p>{planeta.terrain}</p>
                      <h6><b className="text-warning">Agua superficial</b> </h6>
                      <p>{planeta.superface_water}</p>
                      <h6><b className="text-warning">Población</b> </h6>
                      <p>{planeta.population}</p>
                      <h6><b className="text-warning">Clima</b> </h6>
                      <p>{planeta.climate}</p>
                    </div>
                  </div>
                ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        
      </div>
    </div>
  );
};
