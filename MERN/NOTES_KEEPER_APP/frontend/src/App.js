import React, { useState } from "react";
import NoteForm from "./NoteForm";
import NoteList from "./NoteList";

function App() {
  const [notes, setNotes] = useState([]);

  const handleAdd = (note) => {
    setNotes([...notes, note]);
  };

  const handleDelete = (index) => {
    setNotes(notes.filter((_, i) => i !== index));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 p-6">
      <div className="max-w-3xl mx-auto bg-white shadow-2xl rounded-2xl p-8">
        <h1 className="text-4xl font-bold text-center text-indigo-600 mb-8">
          📝 Notes Keeper
        </h1>
        <NoteForm onAdd={handleAdd} />
        <NoteList notes={notes} onDelete={handleDelete} />
      </div>
    </div>
  );
}

export default App;
