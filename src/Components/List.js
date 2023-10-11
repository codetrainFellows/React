import React, { useState } from "react";
import Cards from "./Cards";
import { Button, Card, Row } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import EditFort from "./EditFort";

const List = ({ students, update }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      List
      {students.map((student, index) => {
        return (
          <div key={index}>
            <Card style={{ width: "18rem" }}>
              <Card.Body>
                <Card.Title>{student.name}</Card.Title>
                <Card.Text>Email: {student.email}</Card.Text>
                <Card.Text>Gen: {student.gen}</Card.Text>
                <Card.Text>Phone: {student.phone}</Card.Text>
                <Button variant="primary" onClick={handleShow}>
                  Update
                </Button>
                <Button variant="danger">Delete</Button>
              </Card.Body>
            </Card>
            {/* <Cards student={student} /> */}
          </div>
        );
      })}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <EditFort />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default List;
