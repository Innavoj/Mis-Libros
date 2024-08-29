import { Box } from "@mui/material";
import Titulo from "../components/Titulo";
import Parrafo from "../components/Parrafo";

export default function AboutPages() {
  return (
    <>
      <Box sx={{ flexGrow: 1,  bgcolor: "background.default", p: 3, textAlign: 'center'}}>
        <Titulo texto="Store Book" color="violet" />
        <Parrafo texto="Store Book es una App para pùblicar y vender libros. Està realizada en ReactJs + Material UI" />
        <Parrafo texto="Todo aquel que desee pùblicar y vender sus libros, puede sentirse libre de hacerlo aquì." />
        

      </Box>
    </>
  );
}