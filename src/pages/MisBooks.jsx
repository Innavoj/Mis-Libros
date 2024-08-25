import { Box, Button, Grid, IconButton, Typography } from "@mui/material";
import CardBooks from "../components/CardBooks";
import AddIcon from "@mui/icons-material/Add";

import "../App.css";
import { Link } from "react-router-dom";
import ButtonAction from "../components/ButtonAction";

const libros = [
  {
    id: 1,
    title: "The Best Select",
    img: "/src/assets/img/jsi.jpg",
    precio: 20.0,
  },
  {
    id: 2,
    title: "Vida y Obra de M. Brandow",
    img: "/src/assets/img/2.jpg",
    precio: 45.0,
  },
  {
    id: 3,
    title: "Operación Condor",
    img: "/src/assets/img/3.jpg",
    precio: 50.0,
  },
  {
    id: 4,
    title: "Fund. Química",
    img: "/src/assets/img/4.jpg",
    precio: 90.0,
  },
  {
    id: 5,
    title: "Español y Líteratura",
    img: "/src/assets/img/5.jpg",
    precio: 190.0,
  },
];

export default function MisBooksPages() {
  return (
    <>
      <div>
        <div className="contenido-1">
          <h2>My Books</h2>
          <Link to={"/addbooks"} justifyItems="center">
            <ButtonAction
              variant="contained"
              color="secondary"
              startIcon={<AddIcon />}
              texto="Add"
            />
          </Link>
        </div>
        <div className="contenido-2">
          {libros.map((item) => (
            <CardBooks
              key={item.id}
              title={item.title}
              img={item.img}
              precio={item.precio}
            />
          ))}
        </div>
      </div>
    </>
  );
}
