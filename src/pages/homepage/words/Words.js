import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import wordsimg from '../../../assets/images/pexels-lara-jameson.png'
import fquote from '../../../assets/images/comma1.png'
import squote from '../../../assets/images/comma2.png'
import { Typography } from '@mui/material';
import './words.scss'

export default function Words() {
  return (
    <Box className="section_words">
      <Grid container spacing={2}>
        <Grid item xs={12} md={5}>
         <img src={wordsimg} className="img-fluid" />
        </Grid>
        <Grid item xs={12} md={7}>
          <Typography variant="body1" className="wordfquote"><img src={fquote} /></Typography>
          <Typography variant="h3" className="words">This is exactly what the African Union Free Trde Zone needed. We are selling all our products excelusively on the platform.</Typography>
          <Typography variant="body1" className="wordsquote"><img src={squote} /></Typography>
          <Typography variant="subtitle1" component="div" className="founder_name">Ethiopia Exports, Founder</Typography>
        </Grid>
      </Grid>
    </Box>
  );
}
