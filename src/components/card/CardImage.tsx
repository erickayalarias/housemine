import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import Typography from '@mui/material/Typography';

export function CardImage({
  province,
  price,
  image,
  description,
  children,
}) {
  

let imagenErick = require(`../../images/${image}`)
  // let logo = require(image);

  // const image2 = image || 'https://source.unsplash.com/random';

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia>
      </CardMedia>
      <CardContent>
        <img src={imagenErick} alt="pepe" width={100} height={100} />
        <Typography gutterBottom variant="h5" component="div">
          {province}
        </Typography>
        <Typography gutterBottom variant="subtitle2" component="div">
          {description}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          $ {price}
        </Typography>
      </CardContent>
    </Card>
  );
}
