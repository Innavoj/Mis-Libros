import { Box } from "@mui/material";
import Titulo from "../components/Titulo";

export default function ProductosPages() {
  return (
    <>
      <Box sx={{ flexGrow: 1,  bgcolor: "background.default", p: '3em', m: '3em', textAlign: 'center'}}>
        <Titulo texto="Productos" color="dark" />
       

      </Box>
    </>
  );
}