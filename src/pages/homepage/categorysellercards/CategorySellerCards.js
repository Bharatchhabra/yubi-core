import * as React from "react";
import {CssBaseline, Box, Container, Grid, Typography, Divider } from "@mui/material";
import './categorysellercards.scss'
import CardContent from "./CardContent";


export default function CategorySellerCards() {
  return (
    <React.Fragment>
        <Box className="category_cards">
          <Grid container spacing={2}>
            <Grid item md={6} xs={12} sx={{ padding: '0px 0px 40px 0', }}>
                <Typography varient="h4" className="heading_text">We make everything easy with category sellers</Typography>
                <Divider />
            </Grid>
          </Grid>
          <CardContent />
        </Box>
    </React.Fragment>
  );
}
