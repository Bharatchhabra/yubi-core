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
  verify: "",
};

export const Contactform = (props) => {
  const onContinueButton = (values) => {
    console.log(values);
    props.handleNext();
    console.log("submit");
  };
  // const onContinueButton = () => {
  //   const isValid = validate();
  //   if (isValid) {
  //     // write submit function here
  //     props.handleNext();
  //     console.log("submit");
  //   }
  // };

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
              <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                  <div className="form-row">
                    <label htmlFor="email">Email</label>
                    <Field
                      type="email"
                      name="email"
                      id="email"
                      className={
                        errors.email && touched.email ? "input-error" : null
                      }
                    />
                    <ErrorMessage
                      name="email"
                      component="span"
                      className="error"
                    />
                  </div>
                </Grid>
                <Grid item xs={12} md={6}>
                  <div className="form-row">
                    <label htmlFor="phoneNumber">Phone number</label>
                    <PhoneInput
                      country={"us"}
                      className="marginBottom"
                      value={initialValues.phoneNumber}
                      // onChange={(phone) => setState({ phone })}
                    />
                  </div>
                </Grid>
                <Grid item xs={12} md={6}>
                  <div className="form-row">
                    <label htmlFor="email">Password</label>
                    <Field
                      type="password"
                      name="password"
                      id="password"
                      className={
                        errors.password && touched.password
                          ? "input-error"
                          : null
                      }
                    />
                    <ErrorMessage
                      name="password"
                      component="span"
                      className="error"
                    />
                  </div>
                </Grid>
                <Grid item xs={12} md={6}>
                  <div className="form-row">
                    <label htmlFor="email">Confirm Password</label>
                    <Field
                      type="text"
                      name="confirmPassword"
                      id="confirmPassword"
                      className={
                        errors.confirmPassword && touched.confirmPassword
                          ? "input-error"
                          : null
                      }
                    />
                    <ErrorMessage
                      name="confirmPassword"
                      component="span"
                      className="error"
                    />
                  </div>
                </Grid>
              </Grid>
            </Form>
            <Box
              sx={{
                textAlign: "center",
                marginTop: "20px",
              }}
            >
              <Button
                 variant="contained"
                 type="submit"
                 className="lightblue_btn"
              >
                Continue
              </Button>
              <Typography
                variant="subtitle2"
                component="div"
                sx={{ display: 'flex',}}
              >
                <Checkbox />
                <Typography variant="body1"
                className="contact_form">By creating an account, I agree to the{" "}
                <Link href="#" underline="none">
                 Terms of Use
                </Link>{" "}
                and acknowledge that I have read the{" "}
                <Link href="#" underline="none">
                  Privacy Policy
                </Link>
                .</Typography>
              </Typography>
            </Box>
          </div>
        );
      }}
    </Formik>
  );
};
