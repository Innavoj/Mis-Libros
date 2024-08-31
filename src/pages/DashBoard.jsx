import { Box } from "@mui/material";
import Titulo from "../components/Titulo";

export default function DashBoardPages() {
  return (
    <>
      <Box sx={{ flexGrow: 1,  bgcolor: "background.default", p: '3em', m: '3em', textAlign: 'center'}}>
        <Titulo texto="DashBoard" color="dark" />
       

      </Box>
    </>
  );
}