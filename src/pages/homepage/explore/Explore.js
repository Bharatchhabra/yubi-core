import * as React from 'react';
import { styled } from '@mui/material/styles';
import { Typography, Divider, Grid, Box } from '@mui/material';
import './explore.scss'
import ExploreCard from './ExploreCard';
import grains from '../../../assets/images/grains.png'
import energy from '../../../assets/images/energy.png'
import forest from '../../../assets/images/forest.png'
import meat from '../../../assets/images/meat.png'
import metals from '../../../assets/images/metals.png'
import house from '../../../assets/images/house.png'

export default function Explore() {
  return (
    <Box className="section_explore">
        <Typography varient="h4" className="about_headingtext">Explore our marketplace</Typography>
        <Divider className="explore_heading_divider"/>
        
      <Grid container spacing={2} className="explore_content">
        <Grid item xs={12} lg={2} className="explore_card_items">
          <ExploreCard commoditiestext="Agriculture" items={grains}/>
        </Grid>
        <Grid item xs={12} lg={3}>
          <ExploreCard commoditiestext="Energy" items={energy}/>
        </Grid>
        <Grid item xs={12} lg={3}>
          <ExploreCard commoditiestext="Forest Products" items={forest}/>
        </Grid>
        <Grid item xs={12} lg={3}>
          <ExploreCard commoditiestext="Livestock & Meat" items={meat}/>
        </Grid>
        <Grid item xs={12} lg={2} className="explore_card_items">
          <ExploreCard commoditiestext="Metals" items={metals}/>
        </Grid>
        <Grid item xs={12} lg={3}>
          <ExploreCard commoditiestext="OEM Products" items={house}/>
        </Grid>
      </Grid>
    </Box>
  );
}
