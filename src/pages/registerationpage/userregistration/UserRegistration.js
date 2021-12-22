import React from "react";
import { styled } from "@mui/material/styles";
import { Box, Paper, Grid, Typography, Tab, Button, Link } from "@mui/material";
import userimg from "../../../assets/images/AlluraUIWindows.png";
import { UserTab } from "./UserTab";
import "./user.scss";

export const UserRegistration = (props) => {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Box sx={{ flexGrow: 1,}}>
      <Grid container spacing={4}>
        <Grid item xs={12} md={4}>
          <img src={userimg} className="img-fluid user_img"/>
        </Grid>
        <Grid item xs={12} md={8}>
          <Typography varient="h4" className="heading_text" sx={{paddingLeft: '15px'}}>
            User Registration
          </Typography>
          <Typography varient="p" className="userform_p">
            We verify users of our platform. Only select Business Registration
            if your company is incorporated and in good standing in its
            registered jurisdiction and has a bank account in the business name.
          </Typography>
          <UserTab handleNext={props.handleNext}/>
        </Grid>
      </Grid>
    </Box>
  );
};
