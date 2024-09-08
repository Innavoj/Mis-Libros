import CardBooks from "../components/CardBooks";
import AddIcon from "@mui/icons-material/Add";
import "../App.css";
import ButtonAction from "../components/ButtonAction";
import ButtonFab from "../components/ButtonFab";
import ButtonIcono from "../components/ButtonIcono";
import { useState } from "react";
//import AddBook from "../components/AddBook";

import Titulo from "../components/Titulo";
import { TextField } from "@mui/material";
import { ArrowBack } from "@mui/icons-material";
//import Parrafo from "../components/Parrafo";

let nextId = 4;

const initLibros = [
  {
    id: 1,
    title: "El Mejor Libro para leer",
    img: "/src/assets/img/jsi.jpg",
    precio: 20.0,
    count: 1,
    vendido: true,
  },
  {
    id: 2,
    title: "Vida y Obra de M. Brandow",
    img: "/src/assets/img/2.jpg",
    precio: 45.0,
    count: 1,
    vendido: false,
  },
  {
    id: 3,
    title: "Operación Condor US",
    img: "/src/assets/img/3.jpg",
    precio: 50.0,
    count: 5,
    vendido: false,
  },
  {
    id: 4,
    title: "Español y Líteratura",
    img: "/src/assets/img/5.jpg",
    precio: 190.0,
    count: 2,
    vendido: false,
  },
];

export default function MisBooksPages() {
  const [open, setOpen] = useState(false);
  const [img, setImg] = useState("");
  const [title, setTitle] = useState("");
  const [precio, setPrecio] = useState(0);
  const [count, setCount] = useState(0);
  const [vendido, setVendido] = useState(false);
  const [libros, setLibros] = useState(initLibros);

  const handleButtonClick = () => {
    setOpen(true);
  };

  const handleIconClick = () => {
    setOpen(false);
  };

  const handleAddBooks = () => {
    setLibros([
      ...libros,
      {
        id: nextId++,
        title: title,
        img: img,
        precio: precio,
        count: count,
        vendido: vendido,
      },
    ]);
    console.log(libros);
    setTitle("");
    setImg("");
    setPrecio("");
    setVendido(false);
  };

  return (
    <>
      <div className="contenido-1">
        <Titulo texto="Mis Libros" color="dark" />
        {open ? (
          <ButtonIcono
            onClick={handleIconClick}
            color="inherit"
            size="small"
            startIcon={<ArrowBack />}
          />
        ) : (
          <ButtonFab
            onClick={handleButtonClick}
            color="secondary"
            size="small"
            variant="circular"
            startIcon={<AddIcon />}
          />
        )}
      </div>
      {open && (
        <>
          {/* <AddBook libro={libros} /> */}
          <div className="contenido-1">
            <TextField
              sx={{ m: 1, width: "200px" }}
              label="Imagen of the Book"
              type="file"
              placeholder="Book Image"
              size="small"
              value={img}
              onChange={(e) => setImg(e.target.value)}
            />
            <TextField
              sx={{ m: 1, width: "150px" }}
              label="Title of the Book"
              type="text"
              placeholder="Title"
              size="small"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <TextField
              sx={{ m: 1, width: "150px" }}
              label="Price of the Book"
              type="number"
              placeholder="Precio"
              size="small"
              value={precio}
              onChange={(e) => setPrecio(e.target.value)}
            />
          </div>
          <div className="contenido-1">
            <ButtonAction
              onClick={handleAddBooks}
              variant="outlined"
              color="success"
              texto="Agregar"
            />
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
            count={item.count}
            vendido={item.vendido}
          />
        ))}
      </div>
    </>
  );
}
