import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Typography, Divider } from '@mui/material';
import './about.scss'
import aboutimg from '../../../assets/images/pexels-tima.png'
import AboutContent from './AboutContent';

export default function About() {
  return (
    <Box className="section_about">
        <Typography varient="h4" className="about_headingtext">We provide safe and cost-effective </Typography>
        <Divider className="about_heading_divider"/>
        <Typography varient="h4" className="about_headingtext">purchasing at your fingertips</Typography>
      <Grid container spacing={2} className="about_content">
        <Grid item xs={12} lg={6}>
          <AboutContent aboutprimary="Transparent and competitive pricing" aboutsecondary="Source High quality products from exporters, distributors, and dealers at your price point"/>

          <AboutContent aboutprimary="Spot and Contract Buying Relationship" aboutsecondary="To meet your sourcing needs, establish sopt orlonger-term sourcing relationship"/>

          <AboutContent aboutprimary="Secure and Protect Payments" aboutsecondary="Both buyers and sellers are fully protected. Funds are secured and released only upon satisfactorily delivery of products"/>

          <AboutContent aboutprimary="24/7 Support" aboutsecondary="Have questions or issues with your order? Our support team is always vailable around the clock/."/>
        </Grid>
        <Grid item xs={12} lg={6}>
          <img src={aboutimg} className="img-fluid about_section_img"/>
        </Grid>
      </Grid>
    </Box>
  );
}
