import { useState, useEffect } from "react";
import NoteForm from "./components/Modal/NoteForm";
import NoteList from "./components/NoteList";
// import SelectedNote from "./components/SelectedNote";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import CustomButton from "./components/Button/Button";
import ShowNote from "./components/Modal/ShowNote";

const App = () => {
  const [notes, setNotes] = useState([]);
  const [filteredNotes, setFilteredNotes] = useState([]);

  const [selectedNote, setSelectedNote] = useState(null);
  const [searchKey, setSearchKey] = useState("");

  const handelSearchChange = (e) => {
    setSearchKey(e.target.value);
  };

  const filterNotes = () => {
    let result = notes.filter((item) => {
      const lowercaseSearchKey = searchKey.toLowerCase();
      const lowercaseTitle = item.title.toLowerCase();
      const lowercaseBody = item.body.toLowerCase();

      return (
        lowercaseTitle.includes(lowercaseSearchKey) ||
        lowercaseBody.includes(lowercaseSearchKey)
      );
    });
    setFilteredNotes(result);
  };

  useEffect(() => {
    filterNotes();
  }, [searchKey]);

  const addNote = (newNote) => {
    const index = notes.findIndex((note) => note.id === newNote.id);
    if (index === -1) setNotes([...notes, newNote]);
    else {
      const temp = [...notes];
      temp.splice(index, 1, newNote);
      setNotes([...temp]);
    }
    setSelectedNote(null);
  };

  const deleteNote = (id) => {
    const updatedNotes = notes.filter((note) => note.id !== id);
    setNotes(updatedNotes);
  };

  const editNote = (id) => {
    const selectedNote = notes.find((note) => note.id === id);
    setSelectedNote(selectedNote);
  };

  const openModal = () => {
    setSelectedNote({ title: "", body: "" });
  };

  const handleCloseModal = () => {
    setSelectedNote(null);
  };

  return (
    <div className="App">
      <h1>Notes App</h1>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          height: "50px",
        }}
      >
        <CustomButton cssClass={"customButton"} handleClick={openModal}>Add Note</CustomButton>
        <input
          type="text"
          placeholder="Search..."
          value={searchKey}
          onChange={handelSearchChange}
          className="customInput"
        />
      </div>

      <NoteForm
        addNote={addNote}
        selectedNote={selectedNote}
        handleCloseModal={handleCloseModal}
      />
      <NoteList
        notes={searchKey.length > 0 ? filteredNotes : notes}
        deleteNote={deleteNote}
        editNote={editNote}
      />
    </div>
  );
};

export default App;
