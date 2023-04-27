import React from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div>
      <Container className="mx-auto w-25">
        <h3>Please Register</h3>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Your Name</Form.Label>
            <Form.Control type="text" name="name" placeholder="Enter name" required />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Photo URL</Form.Label>
            <Form.Control type="text" name="photo" placeholder="Enter photo url" required />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" name="email" placeholder="Enter email" required />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" name="password" placeholder="Password" required />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" name="accept" label="Accept Terms and Condition" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Register
          </Button>
          <br />
          <Form.Text className="text-muted">
            Already have an account? <Link to="/login">Login</Link>
          </Form.Text>
          <br />
          <Form.Text className="text-success">We'll never share your email with anyone else.</Form.Text>
          <br />
          <Form.Text className="text-danger">We'll never share your email with anyone else.</Form.Text>
        </Form>
      </Container>
    </div>
  );
};

export default Register;
