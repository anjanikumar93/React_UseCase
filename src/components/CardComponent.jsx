import React, { useContext } from "react";
import DataContext from "./dataContext";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import "./style.css";

const CardComponent = () => {
  const carData = useContext(DataContext);
  return (
    <div className="card_container">
      {carData.map((item) => (
        <Card sx={{ width: 300 }} key={item.id} className="card_area">
          <CardActionArea>
            <CardMedia
              component="img"
              height="150"
              image={item.image}
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {item.name}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      ))}
    </div>
  );
};

export default CardComponent;
