import * as React from "react";
//import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Typography from "@mui/material/Typography";
//import ButtonAction from "./ButtonAction";
import { Card, CardMedia, IconButton } from "@mui/material";
import Parrafo from "./Parrafo";
//import ShoppingCart from "@mui/icons-material/ShoppingCart";
import { AddShoppingCart } from "@mui/icons-material";

export default function CardBooks({ title, img, precio, count, vendido }) {
  const handleIconClick = () => {
    alert("add al carrito");
  };
  return (
    <>
      <div>
        <Card variant="outlined" sx={{ width: 245, height: 200, m: 2, bgcolor: 'darkgrey', color: 'white'}}>
          <CardMedia image="/src/assets/img/jsi.jpg" title={title}  />
          {/* <img src={img} alt={title} ratio='3 / 6' /> */}

          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Precio: {precio} $ 
            </Typography>
            <Typography variant="body2" color="text.secondary">
              En Stock: {count}
            </Typography>
          </CardContent>
           
          <CardActions>
            <IconButton aria-label="add to favorites">
              <FavoriteIcon />
            </IconButton>
            {vendido ? (
              <Parrafo texto="sold" color="red" />
            ) : (
              <IconButton onClick={handleIconClick} size="small">
                <AddShoppingCart  />
              </IconButton>
            )}
          </CardActions>
        </Card>
      </div>
    </>
  );
}
