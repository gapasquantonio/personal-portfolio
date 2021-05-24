import React from "react";
import '../Components/SignUp.css'
import { Formik, Form } from "formik";
import TextField from "./TextField";
import * as Yup from 'yup';
import PrimaryButton from "./PrimaryButton";
import emailjs from 'emailjs-com';
import styled from 'styled-components';

function Signup() {
const initialValues = {
        name: "",
        email: "",
        subject: "",
        message: "",
      };
const validate = Yup.object({
    name: Yup.string()
    .max(15, 'Must be 15 characters or less')
    .required('Required'),
    subject: Yup.string()
    .max(20, 'Must be 20 characters or less')
    .required('Required'),
    email: Yup.string()
    .email('Email is invalid')
    .required('Email is required'),
    message: Yup.string()
    .min(2, "Message should be at least 2 characters.")
    .max(30, "Message should not exceed 30 characters.")
    .required("Please, provide your message!"),
   
})
const sendEmail = e => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_dozefge",
        "template_nnevz1t",
        e.target,
        "user_dfwGjtuz4udrOufGi4W0S"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
  }

  return (
    <Formik
    initialValues={initialValues}
      validationSchema={validate}
      
      
    >
      {(formik,
      
     
      ) => (
        <div>
          <div className="my-4 font-weight-bold-display-4" className="contact-title"><h4>Get in Touch</h4></div>
          <Form className="Form"  onSubmit={sendEmail}>
          <div className="form-field">
            <TextField label="Enter Your Name*" name="name" type="text" className="input" />
            </div>
            <div className="form-field">
            <TextField label="Enter your subject" name="subject" type="text" className="input" />
            </div>
            <div className="form-field">
            <TextField label="Enter your email*" name="email" type="email" className="input"/>
            </div>
            <div className="form-field" >
            <TextField label="Enter your message*" name="message" type="message" className="textarea"  />
          
            </div>
           
            <div className="but">
            <div className="form-field f-button">
          <PrimaryButton title={"Send Email"} type="submit" formik={formik} >Send Mail</PrimaryButton>
          </div>
          <div className="form-field f-button">
          <ResetButton className="buttin"  type="reset" >Reset</ResetButton>
          </div>
          </div>
          <pre>{JSON.stringify(formik.isValid,null,4)}</pre>
         
          
          </Form>
        </div>
      )}
    </Formik>
  );
}


const ResetButton = styled.button`
 background-color: var(--primary-color);
    padding: .8rem 2.5rem;
    color: white;
    cursor: pointer;
    display: inline-block;
    font-size: inherit;
    text-transform: uppercase;
    position: relative;
    transition: all .4s ease-in-out;
    &::after{
        content: "";
        position: absolute;
        width: 0;
        height: .2rem;
        transition: all .4s ease-in-out;
        left: 0;
        bottom: 0;
        opacity: .7;
    }
    &:hover::after{
        width: 100%;
        background-color: var(--white-color);
    }
`;


export default Signup;
