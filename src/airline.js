import React from "react";
import { useLocation } from "react-router-dom";

export default function Aairline() {
  const { state } = useLocation();
  console.log(state[0].country);
  return (
    <>
      <div className="row">
        <div className="col"></div>
        <div className="col p-3">
          <div>
            <div class="card" style={{ width: "18rem" }}>
              <img
                src={state[0].logo}
                className=" img-fluid p-2 d-block"
                alt={state[0].name}
              />
              <div className="card-body">
                <h5 className="card-title">{state[0].name}</h5>
                <p className="card-text">{state[0].slogan}</p>
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">{state[0].country}</li>
                <li className="list-group-item">{state[0].established}</li>
                <li className="list-group-item">{state[0].head_quaters}</li>
              </ul>
              <div className="card-body">
                <a href={state[0].website} class="card-link">
                  {state[0].website}
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col"></div>
      </div>
    </>
  );
}
