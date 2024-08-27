import { Add } from "@mui/icons-material";
import { Box, IconButton } from "@mui/material";
import { Link } from "react-router-dom";

export default function MisBooksPages() {
  return (
    <div>
      <Box
        sx={{
          flexGrow: 1,
          bgcolor: "background.default",
          p: 3,
          textAlign: "center",
        }}
      >
        <div>
          <h1>My Books</h1>
        </div>
        <div>
          <Link to="/addbooks">
            <IconButton>
              <Add />
            </IconButton>
            Add
          </Link>
        </div>
      </Box>
    </div>
  );
}
