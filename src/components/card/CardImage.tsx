import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import Typography from '@mui/material/Typography';

export function CardImage({
  province,
  price,
  image = 'pexels-athena-6782749.jpg',
  description,
  children,
}) {
  let imagenErick = require(`../../images/${image}`);

  // let logo = require(image);

  // const image2 = image || 'https://source.unsplash.com/random';

  return (
    <Card sx={{ maxWidth: 300 }}>
      <CardContent>
        <img src={imagenErick} alt="pepe" width={250} height={300} />
        <Typography gutterBottom variant="h5" component="div">
          {province}
        </Typography>
        <Typography gutterBottom variant="subtitle2" component="div">
          {description}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {price} €
        </Typography>
      </CardContent>
    </Card>
  );
}
