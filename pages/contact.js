import React from 'react';
import userForm from "react-hook-form";
import Button from "react-bootstrap/button";
import Form from "react-bootstrap/form";
import * as yup from "yup";
import Layout from "../components/layout/Layout";
import Paragraph from "../components/ui/contactStyle";

const schema = yup.object().shape({
	firstName: yup.string().required("First name is required"),
	email: yup
		.string()
		.email("Please enter a valid email")
		.required("Email is required"),
	password: yup
		.string()
		.min(5, "The password must consist of 5 or more symbols.")
		.max(32, "The password can't exceed the amount of 32 symbols.")
        .required("Please enter a password"),
});

export default function App(){
    const {register, handleSubmit, watch, errors} = userForm({
        validationSchema: schema
    })
    
    function onSubmit(data){
        console.log("data", data);
    }

    
    
    return( 
        <Layout>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Form.Group>
                    <Form.Label>Email:</Form.Label>
                    <Form.Control name="email" placeholder="Email" ref={register} />
                    {errors.email && <Paragraph>{errors.email.message}</Paragraph>}
                </Form.Group>
                <Form.Group>
                    <Form.Label>Password:</Form.Label>
                    <Form.Control type="password" name="password" placeholder="Password" ref={register} />
                    {errors.email && <Paragraph>{errors.email.message}</Paragraph>}
                </Form.Group>
                <Button type="submit">Submit</Button>
            </Form>
        </Layout>
    )
}

function onSubmit(data){
    console.log(data);
}