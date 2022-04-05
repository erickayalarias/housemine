import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';

import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export const CardText=()=> {
  return (
    <Card sx={{ maxWidth: 500 }}>
      <CardContent>
        <Typography gutterBottom variant="h2" component="div">
          Lizard
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
       
    </Card>
  );
}
