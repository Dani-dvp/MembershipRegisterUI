import React, { useState, useContext } from "react";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";
import axios from "axios";
import "./loginpage.css";
import { AdminContext } from "../context/adminContext";

const LoginPage = () => {
  const { admin, setAdmin } = useContext(AdminContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleButtonAfterLogin = () => {
    setAdmin(null);
  };
  const handleOnSubmit = () => {
    axios
      .get(`http://localhost:5296/administrator/login/${username}/${password}`)
      .then((response) => {
        setAdmin(response.data);
        alert("You have successfully logged in");
        console.log(response.data);
      });
  };
  return (
    <div>
      <h1>Only administrators can log in</h1>
      <div className="loginpage">
        <Form className="form">
          <Form.Group className="first-form" controlId="formGroupEmail">
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="username"
              placeholder="Enter username"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
            />
          </Form.Group>
          <Form.Group className="second-form" controlId="formGroupPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </Form.Group>
        </Form>
        <Button variant="success" onClick={handleOnSubmit}>
          Login
        </Button>
      </div>
    </div>
  );
};

export default LoginPage;
