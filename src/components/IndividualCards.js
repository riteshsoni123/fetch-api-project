import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

function IndividualCards(props) {
  const { avatar, email, first_name, last_name } = props.data;
  return (
    <>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          height="300"
          image={avatar}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom component="div">
            Email: {email}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Name: {first_name + " " + last_name}
          </Typography>
        </CardContent>
      </Card>
    </>
  );
}

export default IndividualCards;
