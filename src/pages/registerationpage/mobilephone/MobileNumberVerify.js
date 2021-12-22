import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Grid, Checkbox, Link, Button, Typography, Box } from "@mui/material";
import * as Yup from "yup";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";


const signInSchema = Yup.object().shape({
  phoneNumber: Yup.string().required("Phone Number is required"),
});

const initialValues = {
  phoneNumber: "",
};

export const MobileNumberVerify = (props) => {
  const onContinueButton = (values) => {
    console.log(values);
    props.handleNext();
    console.log("submit");
  };
  return (
    <Formik
    initialValues={initialValues}
    validationSchema={signInSchema}
    onSubmit={onContinueButton}
    >
      {(formik) => {
        const { errors, touched, isValid, dirty } = formik;
        return (
          <div className="container">
            <Form>
              <Grid container spacing={4}>
                <Grid item xs={12} md={6}>
                  <div className="form-row">
                    <label htmlFor="phoneNumber">Phone number</label>
                    <PhoneInput
                      country={"us"}
                      name="phoneNumber"
                      id="phoneNumber"
                      className="marginBottom"
                      value={initialValues.phoneNumber}
                      // onChange={(phone) => setState({ phone })}
                    />
                  </div>
                </Grid>
              </Grid>
              
              <Box>
                <Button variant="outlined" className="resend">
                  Cancel
                </Button>
                <Button  variant="contained"
                  type="submit"
                  className="lightblue_btn">
                  Submit
                </Button>
              </Box>
            </Form>
          </div>
        );
      }}
    </Formik>
  );
};
