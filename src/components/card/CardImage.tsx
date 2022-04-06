import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export function CardImage({
  province,
  price,
  image,
  description,
  children,
}) {
  const image2 = image || 'https://source.unsplash.com/random';

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia>
        <img src={image2} alt="pepe" width={50} height={50} />
      </CardMedia>
      <CardContent>
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