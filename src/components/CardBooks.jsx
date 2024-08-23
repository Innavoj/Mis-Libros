import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";



export default function CardBooks({title, img, precio}) {
 

  return (
 
        <Card sx={{ display: "flex", maxWidth: 350, m:2}}>
        <CardMedia
            component="img"
            height="140"
            image={img}
            alt={title}
        />
        <CardContent>
          <Typography sx={{ textAlign: 'center'}}  variant="h6" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Precio: {precio} $
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
  
 
  );
}
