/* eslint-disable react/prop-types */

const SelectedNote = ({ selectedNote }) => {
  return (
    <div className="selected-note">
      <h2>{selectedNote.title}</h2>
      <p>{selectedNote.body}</p>
    </div>
  );
};

export default SelectedNote;
