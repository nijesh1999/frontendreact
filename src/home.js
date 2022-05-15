import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./App.css";

export default function Home() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://api.instantwebtools.net/v1/passenger?page=0&size=10")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        console.log(data.totalPassengers);
        setData(data.data);
      });
  }, []);
  return (
    <>
      <div>
        <nav class="navbar navbar-light bg-light">
          <div class="container-fluid ">
            <span class="navbar-brand mx-auto">
              Navbar text with an inline element
            </span>
          </div>
        </nav>
      </div>
      <div>
        {data.length === 0 ? (
          <>
            <div class="d-flex justify-content-center p-3">
              <div class="spinner-border " role="status"></div>
            </div>
          </>
        ) : (
          <table className="table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Total Trips</th>
                <th>Check Airline</th>
              </tr>
            </thead>
            <tbody>
              {data.map((data, index) => (
                <tr key={index}>
                  <td>{data.name}</td>
                  <td>{data.trips}</td>
                  <td>
                    <Link
                      type="button"
                      className="btn btn-primary"
                      to={"/airline"}
                      state={data.airline}
                    >
                      action
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </>
  );
}
