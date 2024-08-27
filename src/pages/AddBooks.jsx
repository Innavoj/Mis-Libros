import { ArrowBack, Add } from "@mui/icons-material";
import { Box, Button, IconButton, TextField } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";
 

export default function AddBooksPages() {
  const [book, setBook] = useState('');
  const [title, setTitle] = useState('');
  const [precio, setPrecio] = useState('');

  const libros = [{book, title, precio}];

 const handleButtonClick = () => {
  libros.push({book, title, precio});
  console.log(libros);
 }

  return (
    <>
      <Box
        sx={{
          flexGrow: 1,
          bgcolor: "background.default",
          p: 3,
          textAlign: "center",
        }}
      >
        <div>
          <h1>Add Books Pages</h1>
          <Link to="/misbooks"  >
            <IconButton>
              <ArrowBack />
            </IconButton>
            My Books
          </Link>
        </div>
        <div>
          <TextField sx={{ m: 2, p: 2 }} placeholder="Book" size="small" value={book} onChange={(e) => setBook(e.target.value)}/>
          <TextField sx={{ m: 2, p: 2 }}  placeholder="Title" size="small" value={title} onChange={(e) => setTitle(e.target.value)}/>
          <TextField
            sx={{ m: 2, p: 2 }}
            type="number"
            placeholder="Precio"
            size="small"
            value={precio}
            onChange={(e) => setPrecio(e.target.value)}
          />
        </div>
        <div>
          <Button onClick={handleButtonClick} variant="contained" color="warning" startIcon={<Add />}>
            Add
          </Button>
        </div>
 
 
      </Box>
    </>
  );
}
