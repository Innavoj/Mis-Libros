import { Button } from "@mui/material";


export default function ButtonAction({onClick, variant, color, startIcon, texto}) {
    return (
        <>
            <Button sx={{m: 2}} onClick={onClick} variant={variant} color={color} startIcon={startIcon}> {texto}</Button>
        </>
    ) 

}