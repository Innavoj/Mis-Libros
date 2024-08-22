
import { Box, Typography } from "@mui/material";
import CardBooks from "../components/CardBooks";

const libros = [
  { id: 1, title: "The Best Select",  img: "/src/assets/img/1.jpg", precio: 20.00 },
  { id: 2, title: "Vida y Obra de JM",  img: "/src/assets/img/2.jpg", precio: 45.00 },
  { id: 3, title: "Operacion Condor",  img: "/src/assets/img/3.jpg", precio: 50.00 },
  { id: 4, title: "Quimica",  img: "/src/assets/img/4.jpg", precio: 90.00 },

]

export default function MisBooksPages() {
  const libro = libros.map(i => 
    <li key={i.id} >{i.title} - {i.precio}</li>
  )

  return (
    <>
      <Box sx={{ flexGrow: 2,  bgcolor: "background.default", p: '4rem', m: '4rem', textAlign: 'center' }}>
        <Typography variant="h6"> My Books</Typography>
        <CardBooks />
    
        
      </Box>
    </>
  );
}
