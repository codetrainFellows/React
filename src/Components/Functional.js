import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { v4 as uuidV4 } from "uuid";

const Functional = (props) => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState();
  const [gen, setGen] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();

    const student = {
      name,
      email,
      phone,
      gen,
      id: uuidV4(),
    };

    props.createStudent(student);
  };

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Phone No.</Form.Label>
          <Form.Control
            type="tel"
            placeholder="phone"
            value={phone}
            onChange={(e) => {
              setPhone(e.target.value);
            }}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Gen</Form.Label>
          <Form.Control
            type="number"
            placeholder="Gen"
            value={gen}
            onChange={(e) => {
              setGen(e.target.value);
            }}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default Functional;
