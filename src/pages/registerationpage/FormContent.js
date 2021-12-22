import React from "react";
import { styled } from "@mui/material/styles";
import { Box, Paper, Grid, Typography, Tab, Button, Link } from "@mui/material";
import "./formcontent.scss";

export const FormContent = (props) => {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Box sx={{ flexGrow: 1,}}>
      <Grid container spacing={4}>
        <Grid item xs={12} md={4}>
        <img src={props.usersideimg} alt="" />
        </Grid>
        <Grid item xs={12} md={8}>
          <Typography varient="h4" className="heading_text" sx={{paddingLeft: '15px'}}>
            {props.mainheading}
          </Typography>
          <Typography varient="p" className="userform_p">
            {props.contentpera}
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};
