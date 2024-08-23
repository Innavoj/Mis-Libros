import { Box, Button, Grid, Typography } from "@mui/material";
import CardBooks from "../components/CardBooks";
import { Link } from "react-router-dom";
import "../App.css";

const libros = [
  {
    id: 1,
    title: "The Best Select",
    img: "/src/assets/img/1.jpg",
    precio: 20.0,
  },
  {
    id: 2,
    title: "Vida y Obra de JM",
    img: "/src/assets/img/2.jpg",
    precio: 45.0,
  },
  {
    id: 3,
    title: "Operacion Condor",
    img: "/src/assets/img/3.jpg",
    precio: 50.0,
  },
  { id: 4, title: "Quimica", img: "/src/assets/img/4.jpg", precio: 90.0 },
];

export default function MisBooksPages() {
  return (
    <>
      <Box sx={{ flexGrow: 1, p: "4rem", m: "4rem", textAlign: "center" }}>
        <Grid container display="flex" justifyContent="space-evenly">
          <Typography variant="h5"> My Books</Typography>

          <Button variant="contained" color="secondary">
            {" "}
            + Add
          </Button>
        </Grid>
        {libros.map((item) => (
          <CardBooks
            key={item.id}
            title={item.title}
            img={item.img}
            precio={item.precio}
          />
        ))}
      </Box>
    </>
  );
}
