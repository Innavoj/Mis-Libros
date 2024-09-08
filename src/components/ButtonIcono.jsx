import { IconButton } from "@mui/material";

export default function ButtonIcono({onClick, color, size, startIcon}) {
  return (
    <>
      <IconButton sx={{m: 4}} onClick={onClick} color={color} size={size}>
        {startIcon} 
      </IconButton>
    </>
  );
}
