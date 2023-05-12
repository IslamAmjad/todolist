/* eslint-disable react/prop-types */
import { useState } from "react";
import ShowNote from "./Modal/ShowNote";
import NoteItem from "./NoteItem";

const NoteList = ({ notes, deleteNote, editNote }) => {
  const [showNote, setShowNote] = useState(null);

  return (
<>

    {showNote &&<ShowNote  note={showNote} handleCloseModal={()=> setShowNote(null)}/>}

    <div className="notes-list my-2">
      <h5>{notes.length > 0 ? "Notes List" : "Click to add note"}</h5>
      {notes.map((note) => (
        <NoteItem
        key={note.id}
        note={note}
        deleteNote={deleteNote}
        editNote={editNote}
        onDetailView= {(e)=> setShowNote(e)}
        />
        ))}
    </div>
        </>
  );
};

export default NoteList;
