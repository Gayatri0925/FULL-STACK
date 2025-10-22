import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [notes, setNotes] = useState([]);
  const [text, setText] = useState("");

  const fetchNotes = async () => {
    const res = await axios.get("http://localhost:5000/notes");
    setNotes(res.data);
  };

  useEffect(() => { fetchNotes(); }, []);

  const addNote = async () => {
    await axios.post("http://localhost:5000/notes", { text });
    setText("");
    fetchNotes();
  };

  const deleteNote = async (id) => {
    await axios.delete(`http://localhost:5000/notes/${id}`);
    fetchNotes();
  };

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h2>📝 QuickNotes</h2>
      <input value={text} onChange={(e) => setText(e.target.value)} placeholder="Write a note..." />
      <button onClick={addNote}>Add</button>
      <ul>
        {notes.map((n) => (
          <li key={n._id}>
            {n.text} <button onClick={() => deleteNote(n._id)}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;

const BASE_URL = "https://quicknotes-backend.onrender.com";

