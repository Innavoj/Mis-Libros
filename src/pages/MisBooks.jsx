import CardBooks from "../components/CardBooks";
import AddIcon from "@mui/icons-material/Add";
import "../App.css";
import ButtonAction from "../components/ButtonAction";
import { useState } from "react";
import AddBook from "../components/AddBook";
import Titulo from "../components/Titulo";
import { IconButton, TextField } from "@mui/material";
import { ArrowBack } from "@mui/icons-material";
import Parrafo from "../components/Parrafo";

let nextId = 4;

const initLibros = [
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
    title: "Español y Líteratura",
    img: "/src/assets/img/5.jpg",
    precio: 190.0,
    vendido: false,
  },
];

export default function MisBooksPages() {
  const [open, setOpen] = useState(false);
  const [book, setBook] = useState("");
  const [title, setTitle] = useState("");
  const [precio, setPrecio] = useState(0);
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
      { id: nextId++, title: title, img: book, precio: precio, vendido: false },
    ]);
    console.log(libros);
    setTitle('');
    setBook('');
    setPrecio('');
  };

  return (
    <>
      <div className="contenido-1">
        <Titulo texto="Mis Libros" color="violet" />
        {open ? (
          <IconButton onClick={handleIconClick} size="small">
            <ArrowBack />
            <Parrafo texto="back" color="dark" />
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
          {/* <AddBook libro={libros} /> */}
          <div className="contenido-1">
             
            <TextField
              sx={{ m: 1, width: '200px'}}
              label="Imagen of the Book"
              type="file"
              placeholder="Book Image"
              size="small"
              value={book}
              onChange={(e) => setBook(e.target.value)}
            />
            <TextField
              sx={{ m: 1, width: '150px' }}
              label="Title of the Book"
              type="text"
              placeholder="Title"
              size="small"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <TextField
              sx={{ m: 1, width: '150px' }}
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
            vendido={item.vendido}
          />
        ))}
      </div>
    </>
  );
}
