/* eslint-disable react/prop-types */
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
const ShowNote = ({  note, handleCloseModal }) => {
  
  return (
    <Modal show={note} onHide={handleCloseModal}>
      <Modal.Header>
        <Modal.Title>{note.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <p>{note.body}</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleCloseModal}>
          Close
        </Button>

      </Modal.Footer>
    </Modal>
  );
};

export default ShowNote;
