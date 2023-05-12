/* eslint-disable react/prop-types */

import CustomButton from "./Button/Button";

/* eslint-disable react-refresh/only-export-components */
const NoteItem = ({ note, deleteNote, editNote, onDetailView }) => {
  const handleEdit = () => {
    editNote(note.id);
  };

  const handleDelete = (e) => {
    e.stopPropagation()
    deleteNote(note.id);
  };

  return (
    <div className="note-item" onClick={()=>onDetailView(note)}>
      <h5 className="custom-ellipsis d-block" title={note.title}>
        {note.title}
      </h5>
      <p title={note.body.substr(0, 50)}>{note.body.substr(0, 50)}...</p>
      <div className="note-buttons">
        <CustomButton handleClick={handleEdit}>Edit</CustomButton>
        <CustomButton handleClick={handleDelete} type="danger">Delete</CustomButton>
      </div>
    </div>
  );
};

export default NoteItem;
