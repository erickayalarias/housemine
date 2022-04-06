import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';

import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export const CardText = ({ children, title, body, height }) => {
  return (
    <Card sx={{ maxWidth: 1100, height: { height } }}>
      <CardContent>
        <Typography
          gutterBottom
          variant="h1"
          component="div"
          color="text.primary"
          sx={{ fontWeight: 'bold', pt: 7 }}
        >
          {title}
        </Typography>
        <Typography
          variant="body1"
          color="primary"
          sx={{ fontSize: 20, pt: 3 }}
        >
          {body}
        </Typography>
        {children}
      </CardContent>
      <CardActions></CardActions>
    </Card>
  );
};
