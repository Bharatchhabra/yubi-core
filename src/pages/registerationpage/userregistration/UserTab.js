import React, { useContext } from "react";
import { styled } from "@mui/material/styles";
import { Box, Tab, Grid, Button, Typography, Link } from "@mui/material";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { BusinessTab } from "./BusinessTab";
import IndividualTab from "./IndividualTab";
import { TramRounded } from "@material-ui/icons";

export const UserTab = (props) => {
  const [valueTab, setValueTab] = React.useState("1");
  const handleChange = (event, newValue) => {
    setValueTab(newValue);
  };
  
  return (
    <Box sx={{ width: "92%", typography: "body1" }}>
      <TabContext value={valueTab}>
        <Box sx={{ borderBottom: 1, borderColor: "transparent" }}>
          <TabList className="tabheader" onChange={handleChange} aria-label="">
            <Tab label="Business Registration" value="1" />
            <Tab label="Individual Registration" value="2" />
          </TabList>
        </Box>
        <TabPanel value="1">
        <BusinessTab handleNext={props.handleNext}/>  
        </TabPanel>
        <TabPanel value="2">
          <IndividualTab handleNext={props.handleNext}/>
        </TabPanel>
        <Box sx={{ textAlign: "center" }}>
         
          <Typography
            variant="subtitle2"
            className="user_footer"
            component="div"
          >
            Have Account?
            <Link href="#" underline="none">
              {" "}
              Log in
            </Link>
          </Typography>
        </Box>
      </TabContext>
    </Box>
  );
};