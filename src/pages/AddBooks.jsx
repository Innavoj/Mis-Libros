import { Box, IconButton, Stack } from "@mui/material";
import { Link } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

export default function AddBooksPages() {
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
        <h1>Add Books Pages</h1>
        <Stack justifyContent= "start">

        <Link to="/misbooks">
          <IconButton size="small">
            {" "}
            <ArrowBackIcon />
          </IconButton> My Books
        </Link>
        </Stack>
      </Box>
    </>
  );
}
