import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import BasicCard from './BasicCard';
import CommoditiesCard from '../../../pages/homepage/commodities/CommoditiesCard'

export default function CardContent() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={8}>
        <Grid item xs={12} md={4}>
          <BasicCard cardheader="EXPORTERS" cardpera="Buy from verified Tier 1 Exporters worldwide. We vet exporters to ensure they meet the highest quality of standart" photo_icon={require('../../../assets/images/exporters.png').default} />
        </Grid>
        <Grid item xs={12} md={4}>
          <BasicCard cardheader="DISTRIBUTORS" cardpera="Our distributors purchase from Tier 1 suppliers and distribute to national accounts. Net pyment Terms available on apptoved credit" photo_icon={require('../../../assets/images/distributors.png').default} />
        </Grid>
        <Grid item xs={12} md={4}>
          <BasicCard cardheader="DEALERS" cardpera="Our dealers purchase from distributors and resell mainly to retailers and SMEs. Many orders are shipped same day" photo_icon={require('../../../assets/images/dealers.png').default} />
        </Grid>
      </Grid>
    </Box>
  );
}
