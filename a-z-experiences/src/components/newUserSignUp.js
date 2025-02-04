import React from 'react';
import { withFormik, Form, Field } from "formik";
import axios from 'axios';
import * as Yup from 'yup';
import { Button, Form as SemForm } from "semantic-ui-react";

const newUserSignUp = ({ errors, touched}) => {

    return (
        <SemForm className="formContainers">
          <Form className="login-Form">
            <h1>Create an account:</h1>
            <SemForm.Field>
              <Field
                name="username"
                type="text"
                autoComplete="off"
                placeholder="username"
              />
              {touched.username && errors.username && (
                <p className="error">{errors.username}</p>
              )}
            </SemForm.Field>
            <SemForm.Field>
              <Field
                name="email"
                type="email"
                autoComplete="off"
                placeholder="email"
              />
              {touched.email && errors.email && (
                <p className="errorStyle">{errors.email}</p>
              )}
            </SemForm.Field>
            <SemForm.Field>
              <Field
                name="password"
                type="password"
                autoComplete="off"
                placeholder="Password"
              />
              {touched.password && errors.password && (
                <p className="error">{errors.password}</p>
              )}
            </SemForm.Field>
            <Button
              style={{
                margin: "1em auto",
                color: "gray"
              }}
              type="submit"
            >
              Sign Up &rarr;
            </Button>
          </Form>
        </SemForm>
      );
    };

const FormikForm = withFormik({
    mapPropsToValues({ username, email, password }) {
      return {
        username: username || "",
        email: email || "",
        password: password || ""
      };
    },
  
    validationSchema: Yup.object().shape({
      username: Yup.string().required(),
      email: Yup.string().required(),
      password: Yup.string()
      .min(8, "Password must be a minimum of 8 characters or longer")
      .required()
    }),
  
    handleSubmit(values, { props }) {
      axios
        .post('https://a2zexperiences.herokuapp.com/api/users/signup', {username:values.username, password:values.password})
        .then(res => {
          console.log(values);
          console.log(res);
          props.history.push("/login");
        
        })
        .catch(err => {
          console.log(values);
          console.log(err.response);
        });
    }
  })(newUserSignUp);
  
  export default FormikForm;