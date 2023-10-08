import React from "react";
import {
  Grid,
  Card,
  Typography,
  CardActionArea,
  CardContent,
  CardMedia,
  Chip,
} from "@mui/material";

const Cards = ({ data }) => {
  const Style = {
    positionRelative: { position: "relative" },
    statusBadge: { position: "absolute", top: "5px", right: "5px" },
  };
  let display;
  if (data) {
    display = data.map((card) => {
      let { id, name, image, status } = card;
      return (
        <Grid key={id} item md={3} xs={4}>
          <Card style={Style.positionRelative} sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="150"
                image={image}
                alt={name}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
            </CardActionArea>
            <Chip
              style={Style.statusBadge}
              label={status}
              color={status == "Alive" ? "success" : "secondary"}
            />
          </Card>
        </Grid>
      );
    });
  } else {
    display = "No Characters Found!";
  }

  return (
    <Grid container spacing={2}>
      {display}
    </Grid>
  );
};

export default Cards;
