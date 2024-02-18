import React, { useState, useContext } from "react";
import { useDispatch } from "react-redux";
import DataContext from "./dataContext";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";
import { addUser } from "../store/slices/UserSlice";
import {
  Button,
  FormControl,
  FormGroup,
  Input,
  Typography,
  styled,
} from "@mui/material";
import "./style.css";

const Container = styled(FormGroup)`
  width: 75%;
  margin: 5% auto 0 auto;
  & > div {
    margin-top: 20px;
  }
`;

const defaultValue = {
  model: "",
  color: "",
  manufacture: "",
  insurance: "",
  kms: "",
  location: "",
  owners: "",
  transmission: "",
  externals: "",
  photo: "",
};

const CardComponent = () => {
  const carData = useContext(DataContext);
  const [user, setUser] = useState(defaultValue);
  const [cardData, setCardData] = useState({});
  const dispatch = useDispatch();

  const onChangeValue = (e) => {
    //console.log(e.target.name, e.target.value);
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const findCardData = (data) => {
    setCardData(data);
  };

  const addCardDetails = () => {
    setUser(cardData);
    console.log("card data.....", cardData);
    dispatch(addUser(cardData));
    setCardData({
      model: "",
      color: "",
      manufacture: "",
      insurance: "",
      kms: "",
      location: "",
      owners: "",
      transmission: "",
      externals: "",
      photo: "",
    });
  };

  return (
    <div style={{ marginTop: "5em" }}>
      <div className="card_container">
        {carData.map((item) => (
          <Card
            sx={{ width: 300 }}
            key={item.id}
            className="card_area"
            onClick={() => findCardData(item)}
          >
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
      <Container>
        <div className="form_group">
          <div>
            <FormControl>
              <div
                className="left_group"
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  marginBottom: "2em",
                  flexWrap: "wrap",
                }}
              >
                <Button variant="outlined" className="button_details">
                  Model
                </Button>
                <Input
                  className="input_dimendion"
                  onChange={(e) => onChangeValue(e)}
                  name="model"
                  placeholder="Model"
                  value={cardData.model}
                  required
                />
              </div>
            </FormControl>
            <FormControl>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  marginBottom: "2em",
                  flexWrap: "wrap",
                }}
              >
                <Button variant="outlined" className="button_details">
                  Color
                </Button>
                <Input
                  className="input_dimendion"
                  onChange={(e) => onChangeValue(e)}
                  name="color"
                  placeholder="Color"
                  value={cardData.color}
                  required
                />
              </div>
            </FormControl>
            <FormControl>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  marginBottom: "2em",
                }}
              >
                <Button variant="outlined" className="button_details">
                  Year Of Manufacture
                </Button>
                <Input
                  className="input_dimendion"
                  onChange={(e) => onChangeValue(e)}
                  name="manufacture"
                  placeholder="Manufacture"
                  value={cardData.manufacture}
                  required
                />
              </div>
            </FormControl>
            <FormControl>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  marginBottom: "2em",
                }}
              >
                <Button variant="outlined" className="button_details">
                  Insurance Valid Up to
                </Button>
                <Input
                  className="input_dimendion"
                  onChange={(e) => onChangeValue(e)}
                  name="insurance"
                  placeholder="Insurance"
                  value={cardData.insurance}
                  required
                />
              </div>
            </FormControl>
            <FormControl>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  marginBottom: "2em",
                }}
              >
                <Button variant="outlined" className="button_details">
                  Kms
                </Button>
                <Input
                  className="input_dimendion"
                  onChange={(e) => onChangeValue(e)}
                  name="kms"
                  placeholder="Kms"
                  value={cardData.kms}
                  required
                />
              </div>
            </FormControl>
          </div>
          <div>
            <FormControl>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  marginBottom: "2em",
                }}
              >
                <Button variant="outlined" className="button_details">
                  Location
                </Button>
                <Input
                  className="input_dimendion"
                  onChange={(e) => onChangeValue(e)}
                  name="location"
                  placeholder="Location"
                  value={cardData.location}
                  required
                />
              </div>
            </FormControl>
            <FormControl>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  marginBottom: "2em",
                }}
              >
                <Button variant="outlined" className="button_details">
                  No Of Owners
                </Button>
                <Input
                  className="input_dimendion"
                  onChange={(e) => onChangeValue(e)}
                  name="owners"
                  placeholder="Owners"
                  value={cardData.owners}
                  required
                />
              </div>
            </FormControl>
            <FormControl>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  marginBottom: "2em",
                }}
              >
                <Button variant="outlined" className="button_details">
                  Transmission
                </Button>
                <Input
                  className="input_dimendion"
                  onChange={(e) => onChangeValue(e)}
                  name="transmission"
                  placeholder="Transmission"
                  value={cardData.transmission}
                  required
                />
              </div>
            </FormControl>
            <FormControl>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  marginBottom: "2em",
                }}
              >
                <Button variant="outlined" className="button_details">
                  Externals Fitments
                </Button>
                <Input
                  className="input_dimendion"
                  onChange={(e) => onChangeValue(e)}
                  name="externals"
                  placeholder="Externals"
                  value={cardData.externals}
                  required
                />
              </div>
            </FormControl>
            <FormControl>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  marginBottom: "2em",
                }}
              >
                <Button variant="outlined" className="button_details">
                  Photo
                </Button>
                <Input
                  className="input_dimendion"
                  onChange={(e) => onChangeValue(e)}
                  name="photo"
                  placeholder="Photo"
                  value={cardData.photo}
                  required
                />
              </div>
            </FormControl>
          </div>
        </div>
        <FormControl>
          <div className="submit_group">
            <Button
              className="submit_button"
              variant="contained"
              onClick={() => addCardDetails()}
            >
              Submit
            </Button>
          </div>
        </FormControl>
      </Container>
    </div>
  );
};

export default CardComponent;
