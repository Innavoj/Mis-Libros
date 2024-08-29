import * as React from "react";
//import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";

import Typography from "@mui/material/Typography";
//import ButtonAction from "./ButtonAction";
import { CardMedia, IconButton } from "@mui/material";
import Parrafo from "./Parrafo";
//import ShoppingCart from "@mui/icons-material/ShoppingCart";
import { AddShoppingCart } from "@mui/icons-material";

export default function CardBooks({ title, img, precio, vendido }) {

  const  handleIconClick = () => {
    alert ('add al carrito')
  }
  return (
    <>
      <div className="card">
        
          {/* <CardMedia image={img} title={title} /> */}
          <img src={img}  ratio='3 : 6' />

          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Precio: {precio} $
            </Typography>
          </CardContent>
          <CardActions>
            {vendido ? 
            (< Parrafo texto="sold" color="red" />): 
            ( <IconButton onClick={handleIconClick} size="small">
              <AddShoppingCart />
              
          </IconButton>)}
            
          </CardActions>
      
      </div>
    </>
  );
}
