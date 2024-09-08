import { Fab } from "@mui/material";

export default function ButtonFab({
  onClick,
  color,
  size,
  variant,
  startIcon,
}) {
  return (
    <>
      <Fab sx={{m: 4}} onClick={onClick} color={color} size={size} variant={variant}>
        {startIcon}
      </Fab>
    </>
  );
}
