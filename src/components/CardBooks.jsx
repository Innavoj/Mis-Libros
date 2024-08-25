import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";

import Typography from "@mui/material/Typography";
import ButtonAction from "./ButtonAction";
import { CardMedia } from "@mui/material";

export default function CardBooks({ title, img, precio }) {
  return (
    <>
      <div className="card">
        
          <CardMedia image={img} title={title} />

          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Precio: {precio} $
            </Typography>
          </CardContent>
          <CardActions>
            <ButtonAction variant="outlined" color="warning" texto="Buy" />
          </CardActions>
      
      </div>
    </>
  );
}
