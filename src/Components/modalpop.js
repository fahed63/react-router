import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Modal } from "react-bootstrap";
import "./modalpop.css";
import MovieList from "./movieList";

function ModalAdd({ addmovie }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [newmovie, setNewmovie] = useState({
    Title: "",
    Description: "",
    Rate: 1,
    PosterUrl: "",
  });
  const handleChange = (e) => {
    setNewmovie({ ...newmovie, [e.target.name]: e.target.value });
  };
  const handleSave = () => {
    addmovie(newmovie);
    handleClose();
    setNewmovie({
      Title: "",
      Description: "",
      Rate: 1,
      PosterUrl: "",
    });
  };

  return (
    <>
      <Button className="PlusButton" variant="primary" onClick={handleShow}>
        +
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add a new movie</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <label>Movie title</label>
            <input
              placeholder="What is it the title of the movie"
              type="text"
              name="Title"
              onChange={handleChange}
            ></input>
          </div>
          <div>
            <label>Description</label>
            <input
              placeholder="What is it about"
              type="text"
              name="Description"
              onChange={handleChange}
            ></input>
          </div>
          <div>
            <label>PosterUrl</label>
            <input
              placeholder="Enter a valid posterUrl"
              type="text"
              name="PosterUrl"
              onChange={handleChange}
            ></input>
          </div>
          <div>
            <label>Movie rate</label>
            <input
              placeholder="How do you rate it ?"
              type="text"
              name="Rate"
              onChange={handleChange}
            ></input>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSave}>
            Save Changes and add movie
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalAdd;