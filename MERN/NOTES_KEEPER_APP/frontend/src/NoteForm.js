import React, { useState } from "react";

function NoteForm({ onAdd }) {
  const [note, setNote] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (note.trim()) {
      onAdd(note);
      setNote("");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col sm:flex-row gap-3 mb-6"
    >
      <input
        type="text"
        value={note}
        onChange={(e) => setNote(e.target.value)}
        placeholder="Write your note..."
        className="flex-1 p-3 border-2 border-indigo-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400"
      />
      <button
        type="submit"
        className="bg-indigo-600 text-white px-5 py-3 rounded-xl font-medium hover:bg-indigo-700 transition"
      >
        Add Note
      </button>
    </form>
  );
}

export default NoteForm;
