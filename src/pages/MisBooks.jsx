import CardBooks from "../components/CardBooks";
import AddIcon from "@mui/icons-material/Add";
import "../App.css";
import ButtonAction from "../components/ButtonAction";
import { useState } from "react";
import AddBook from "../components/AddBook";
import Titulo from "../components/Titulo";
import { IconButton } from "@mui/material";
import { ArrowBack } from "@mui/icons-material";
import Parrafo from "../components/Parrafo";

const libros = [
  {
    id: 1,
    title: "The Best Select",
    img: "/src/assets/img/jsi.jpg",
    precio: 20.0,
    vendido: true,
  },
  {
    id: 2,
    title: "Vida y Obra de M. Brandow",
    img: "/src/assets/img/2.jpg",
    precio: 45.0,
    vendido: false,
  },
  {
    id: 3,
    title: "Operación Condor",
    img: "/src/assets/img/3.jpg",
    precio: 50.0,
    vendido: false,
  },
  {
    id: 4,
    title: "Fund. Química",
    img: "/src/assets/img/4.jpg",
    precio: 90.0,
    vendido: false,
  },
  {
    id: 5,
    title: "Español y Líteratura",
    img: "/src/assets/img/5.jpg",
    precio: 190.0,
    vendido: false,
  },
];

export default function MisBooksPages() {
  const [open, setOpen] = useState(false);

  const handleButtonClick = () => {
    setOpen(true);
  };

  const handleIconClick = () => {
    setOpen(false);
  };

  return (
    <>
      <div className="contenido-1">
        <Titulo texto="Mis Libros" />
        {open ? 
        (
          <IconButton onClick={handleIconClick} size="small">
              <ArrowBack />
              <Parrafo texto="back" />
            </IconButton>
        ) : (
          <ButtonAction
          onClick={handleButtonClick}
          variant="contained"
          color="secondary"
          startIcon={<AddIcon />}
          texto="Add Book"
        />
        )}
        
      </div>
      {open && (
        <>
          <AddBook />
          <div className="contenido-1">
            <ButtonAction variant="outlined" color="success" texto="Agregar" />
          </div>
        </>
      )}
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
    </>
  );
}
