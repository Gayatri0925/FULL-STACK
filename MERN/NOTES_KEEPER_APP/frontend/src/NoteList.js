import React from "react";

function NoteList({ notes, onDelete }) {
  if (!notes || notes.length === 0)
    return <p className="text-center text-gray-500">No notes yet 🗒️</p>;

  return (
    <ul className="space-y-4">
      {notes.map((note, index) => (
        <li
          key={index}
          className="flex justify-between items-center bg-indigo-50 p-4 rounded-xl shadow-sm hover:shadow-md transition"
        >
          <span className="text-gray-800">{note}</span>
          <button
            onClick={() => onDelete(index)}
            className="text-red-500 hover:text-red-700 transition"
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}

export default NoteList;
