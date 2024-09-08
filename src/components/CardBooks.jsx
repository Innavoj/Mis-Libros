import * as React from "react";
//import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Typography from "@mui/material/Typography";
//import ButtonAction from "./ButtonAction";
import { Badge, Card, CardMedia, IconButton } from "@mui/material";
import Parrafo from "./Parrafo";
//import ShoppingCart from "@mui/icons-material/ShoppingCart";
import { AddShoppingCart } from "@mui/icons-material";
//import ButtonIcono from "./ButtonIcono";

export default function CardBooks({ title, img, precio, count, vendido }) {
  const [favorite, setFavorite] = React.useState(1);

  const handleAddClick = () => {
    alert("add al carrito");
  };
  const handleFavoriteClick = () => {
    setFavorite(favorite + 1);
  };
  return (
    <>
      <div>
        <Card className="card"
          variant="outlined"
          sx={{
            width: 245,
            height: 225,
            m: 2,
            bgcolor: "darkgrey",
            color: "white",
          }}
        >
          <CardMedia image="/src/assets/img/jsi.jpg" title={title} />
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
            <IconButton onClick={handleFavoriteClick} color="inherit">
              <Badge badgeContent={favorite} color="error">
                <FavoriteIcon />
              </Badge>
            </IconButton>

            {vendido ? (
              <Parrafo texto="sold" color="red" />
            ) : (
              <IconButton onClick={handleAddClick} color="inherit">
                <AddShoppingCart />
              </IconButton>
 
            )}
          </CardActions>
        </Card>
      </div>
    </>
  );
}
