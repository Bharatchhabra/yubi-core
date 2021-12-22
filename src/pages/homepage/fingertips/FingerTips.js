import * as React from "react";
import { styled } from "@mui/material/styles";
import { Box, Grid, Typography, Button } from "@mui/material";
import "./fingertips.scss";
import mobileimg from "../../../assets/images/Group62.png";
import fingertipslogo from "../../../assets/images/logoYubi11.png";
import appstore from "../../../assets/images/images-removebg-preview 1.png";

export default function FingerTips() {
  return (
    <Box className="fingertip_section">
      <Grid container spacing={0}>
        <Grid item xs={12} lg={4}>
          <img src={fingertipslogo} />
          <Typography
            variant="h4"
            sx={{
              color: "#000",
              fontFamily: "Roboto",
              fontSize: "40px",
              lineHeight: "47px",
            }}
          >
            <b>Introducing YUBI</b>
          </Typography>
          <Typography variant="h3" sx={{
              color: "#000",
              fontFamily: "Roboto",
              fontSize: "25px",
              lineHeight: "29px",
              padding: '25px 0'
            }}>Digital Trading at your finger tips</Typography>
            <img src={appstore} />
        </Grid>
        <Grid item xs={12} lg={8}>
          <img src={mobileimg} className="img-fluid" />
        </Grid>
      </Grid>
    </Box>
  );
}
