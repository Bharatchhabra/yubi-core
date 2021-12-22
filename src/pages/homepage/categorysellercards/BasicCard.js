import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {BsArrowRight} from 'react-icons/bs'


export default function BasicCard(props) {
  return (
    <Box
      style={{
        backgroundImage: `url(${props.photo_icon})`,
        backgroundSize: "cover",
      }}
    >
      <Card
        style={{
          background: 'rgba(0, 14, 20, 0.6)',
          borderRadius: "0",padding: '50px 8px 30px',
        }}
      >
      <CardContent>
        <Typography variant="h4" component="div" className="card_header">
          {props.cardheader}
        </Typography>
        <Typography variant="body2" className="card_content">
          {props.cardpera}
        </Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: 'right', marginTop: '40px' }}>
        <Button size="medium" className="getstarted_btn">Get Started <BsArrowRight /></Button>
      </CardActions>
    </Card>
    </Box>
  );
}
