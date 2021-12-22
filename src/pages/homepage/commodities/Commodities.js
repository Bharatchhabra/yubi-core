import * as React from 'react';
import { styled } from '@mui/material/styles';
import {Box, Grid, Typography} from '@mui/material';
import CommoditiesCard from './CommoditiesCard';
import './commodities.scss'

export default function Commodities() {
  return (
    <Box className="section_commodities">
        <Typography varient="h4" className="heading_text" sx={{ padding: '0 0 40px 0',}}><b>Popular Commodities</b></Typography>
      <Grid container spacing={4}>
        <Grid item md={3} xs={12}>
          <CommoditiesCard commoditiestext="Cocoa" photoicon={require('../../../assets/images/pexels-loannes-marc.png').default}/>
        </Grid>
        <Grid item md={3} xs={12}>
          <CommoditiesCard commoditiestext="Aluminium" photoicon={require('../../../assets/images/pexels-yender-fonseca.png').default}/>
        </Grid>
        <Grid item md={3} xs={12}>
          <CommoditiesCard commoditiestext="Gold" photoicon={require('../../../assets/images/pexels-pixabay.png').default}/>
        </Grid>
        <Grid item md={3} xs={12}>
          <CommoditiesCard commoditiestext="Salmon" photoicon={require('../../../assets/images/pexels-eva.png').default}/>
        </Grid>
      </Grid>
    </Box>
  );
}
