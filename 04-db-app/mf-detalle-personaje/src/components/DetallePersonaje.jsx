import { useEffect, useState } from "react";
import React from "react";
import { useParams, NavLink } from "react-router-dom";

const DetallePersonaje = () => {
  const [personaje, setPersonaje] = useState({});
  const { id } = useParams();

  const getData = async () => {
    const res = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
    const data = await res.json();
    setPersonaje(data);
    console.log(data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <NavLink
        to="/personajes"
        className="bg-blue-400 p-3 text-white rounded-md shadow-lg"
      >
        {"<"} Go to characters
      </NavLink>
      <div className="my-5">
        <div>
          <img
            src={personaje.image}
            alt={personaje.name}
            className="rounded-lg"
          />
        </div>
        <div className="font-bold">Name: {personaje.name}</div>
        <div className="font-bold">Status: {personaje.status}</div>
        <div className="font-bold">Specie: {personaje.species}</div>
        <div className="font-bold">Gender: {personaje.gender}</div>
      </div>
    </>
  );
};

export default DetallePersonaje;
