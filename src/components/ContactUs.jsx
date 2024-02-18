import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import "./home.css";
import { useSelector } from "react-redux";

const ContactUs = () => {
  const data = useSelector((state) => state.users);
  return (
    <div className="home_container">
      {data.map((item) => (
        <Card sx={{ maxWidth: 345 }} className="home_card">
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image={item.image}
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
               Phone:- {item.phone}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {item.service}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      ))}
    </div>
  );
};

export default ContactUs;
