/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
const NoteForm = ({ addNote, selectedNote, handleCloseModal }) => {
  const [title, setTitle] = useState(selectedNote ? selectedNote.title : "");
  const [body, setBody] = useState(selectedNote ? selectedNote.body : "");

  useEffect(() => {
    if (selectedNote) {
      setTitle(selectedNote.title);
      setBody(selectedNote.body);
    }
  }, [selectedNote]);

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleBodyChange = (e) => {
    setBody(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const id = selectedNote?.id || Date.now();
    if (!(title && body)) {
      alert("Please enter title and body");
      return;
    }
    addNote({
      id: id,
      title,
      body,
    });

    setTitle("");
    setBody("");
  };

  return (
    <Modal show={selectedNote} onHide={handleCloseModal}>
      <Modal.Header>
        <Modal.Title>Add Note</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={handleTitleChange}
        />
        <textarea
          placeholder="Body"
          value={body}
          onChange={handleBodyChange}
        ></textarea>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleCloseModal}>
          Close
        </Button>
        <Button variant="primary" onClick={handleSubmit}>
          {selectedNote ? "Save" : "Add"}
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default NoteForm;
