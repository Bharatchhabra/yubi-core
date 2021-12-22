import * as React from 'react';
import { styled } from '@mui/material/styles';
import {Box, Grid, Typography, Button} from '@mui/material';
import './trading.scss'
import tradingimg from '../../../assets/images/GDPC_Logistics-min_2 1.png'

export default function Trading() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={0}>
        <Grid item xs={12} lg={7} className="trading_section">
        <Typography varient="h4" sx={{ padding: '10px 0',}} className="heading_text"><b>Digital Trading</b></Typography>
        <Typography varient="h4" sx={{ padding: '20px 0',}} className="headingtext">Bring Your Business into Digital Economy</Typography>
        <Typography varient="p" className="trading_pera">We embarce advances in digital currency and suply chain automation to streamline global trading and to provide a safe secure, and enhnced customer service experience</Typography>
        <Button variant="contained" className="more_btn">More</Button>
        </Grid>
        <Grid item xs={12} lg={5}>
            <img src={ tradingimg } className="img-fluid"/>
        </Grid>
      </Grid>
    </Box>
  );
}
