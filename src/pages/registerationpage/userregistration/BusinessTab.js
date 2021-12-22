import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Grid, Button, Box } from "@mui/material";
import * as Yup from "yup";
import "./user.scss";

const signInSchema = Yup.object().shape({
  firstname: Yup.string().required("First Name is required"),
  lastname: Yup.string().required("Last Name is required"),
  secondlastname: Yup.string().required("Second Last Name is required"),
});

const initialValues = {
  firstname: "",
  lastname: "",
  secondlastname: "",
};

export const BusinessTab = (props) => {
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
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <div className="form-row">
                    <label htmlFor="businessname">Business Name</label>
                    <Field
                      type="text"
                      name="businessname"
                      id="businessname"
                      className={
                        errors.businessname && touched.businessname
                          ? "input-error"
                          : null
                      }
                    />
                    <ErrorMessage
                      name="businessname"
                      component="span"
                      className="error"
                    />
                  </div>
                </Grid>
                <Grid item xs={12} md={6}>
                  <div className="form-row">
                    <label htmlFor="firstname">First Name</label>
                    <Field
                      type="text"
                      name="firstname"
                      id="firstname"
                      className={
                        errors.firstname && touched.firstname
                          ? "input-error"
                          : null
                      }
                    />
                    <ErrorMessage
                      name="firstname"
                      component="span"
                      className="error"
                    />
                  </div>
                </Grid>
                <Grid item xs={12} md={6}>
                  <div className="form-row">
                    <label htmlFor="lastname">Last Name</label>
                    <Field
                      type="text"
                      name="lastname"
                      id="lastname"
                      className={
                        errors.lastname && touched.lastname
                          ? "input-error"
                          : null
                      }
                    />
                    <ErrorMessage
                      name="lastname"
                      component="span"
                      className="error"
                    />
                  </div>
                </Grid>
                <Grid item xs={12} md={6}>
                  <div className="form-row">
                    <label htmlFor="lastname">Last Name</label>
                    <Field
                      type="text"
                      name="lastname"
                      id="lastname"
                      className={
                        errors.lastname && touched.lastname
                          ? "input-error"
                          : null
                      }
                    />
                    <ErrorMessage
                      name="lastname"
                      component="span"
                      className="error"
                    />
                  </div>
                </Grid>
                <Grid item xs={12} md={6}>
                  <div className="form-row">
                    <label htmlFor="secondlastname">Second Last Name</label>
                    <Field
                      type="text"
                      name="secondlastname"
                      id="secondlastname"
                      className={
                        errors.secondlastname && touched.secondlastname
                          ? "input-error"
                          : null
                      }
                    />
                    <ErrorMessage
                      name="secondlastname"
                      component="span"
                      className="error"
                    />
                  </div>
                </Grid>
                <Grid item xs={12} md={6}>
                  <div className="form-row">
                    <label htmlFor="feild">
                      What is the legal jurisdiction of your home?
                    </label>
                    <Field
                      type="text"
                      name="feild"
                      id="feild"
                      className={
                        errors.feild && touched.feild ? "input-error" : null
                      }
                    />
                    <ErrorMessage
                      name="feild"
                      component="span"
                      className="error"
                    />
                  </div>
                </Grid>
                <Grid item xs={12} md={6}>
                  <div className="form-row">
                    <label htmlFor="text">&nbsp;</label>
                    <Field
                      type="text"
                      name="text"
                      id="text"
                      //   className={
                      //     errors.email && touched.email ? "input-error" : null
                      //   }
                    />
                    <ErrorMessage
                      name="text"
                      component="span"
                      className="error"
                    />
                  </div>
                </Grid>
              </Grid>
              <Box sx={{ textAlign: "center" }}>
                <Button
                  variant="contained"
                  type="submit"
                  className="lightblue_btn"
                >
                  Continue
                </Button>
              </Box>
            </Form>
          </div>
        );
      }}
    </Formik>
  );
};
