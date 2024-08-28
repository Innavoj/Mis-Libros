import { TextField } from "@mui/material";
import { useState } from "react";


export default function AddBook() {
  const [book, setBook] = useState("");
  const [title, setTitle] = useState("");
  const [precio, setPrecio] = useState(0);
  const [vendido, setVendido] = useState(false);

  return (
    <>
    <div className="contenido-1">
      <TextField
        sx={{ m: 2, p: 2 }}
        placeholder="Book Image"
        size="small"
        value={book}
        onChange={(e) => setBook(e.target.value)}
      />
      <TextField
        sx={{ m: 2, p: 2 }}
        placeholder="Title"
        size="small"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <TextField
        sx={{ m: 2, p: 2 }}
        type="number"
        placeholder="Precio"
        size="small"
        value={precio}
        onChange={(e) => setPrecio(e.target.value)}
      />
      
    </div>
     
    </>
  );
}
