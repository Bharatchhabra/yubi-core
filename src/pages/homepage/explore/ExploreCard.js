import * as React from 'react';
import { Divider,Typography,Button,CardContent,Card,Box } from '@mui/material';
import './explore.scss'

export default function ExploreCard(props) {
  return (
    <Card style={{backgroundColor: `transparent`, borderRadius: '0',}}>
      <CardContent sx={{ textAlign: 'center', }}>
        <img src={props.items} className="explore_item" />
        <Divider className="explore_divider" />
        <Typography className="explore_card_text">
         {props.commoditiestext}
        </Typography>
        
      </CardContent>
      
    </Card>
  );
}
