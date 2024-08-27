import { Button } from "@mui/material";


export default function ButtonAction({variant, color, startIcon, texto}) {
    return (
        <>
            <Button sx={{m: 2}} variant={variant} color={color} startIcon={startIcon}> {texto}</Button>
        </>
    ) 

}