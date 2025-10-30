import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [feedbacks, setFeedbacks] = useState([]);
  const [form, setForm] = useState({ name: "", message: "", rating: 5 });

  useEffect(() => {
    axios.get("http://localhost:5001/api/feedback")
      .then(res => setFeedbacks(res.data));
  }, []);

  const submit = () => {
    axios.post("http://localhost:5001/api/feedback", form)
      .then(res => setFeedbacks([...feedbacks, res.data]));
    setForm({ name: "", message: "", rating: 5 });
  };

  const del = (id) => {
    axios.delete(`http://localhost:5001/api/feedback/${id}`)
      .then(() => setFeedbacks(feedbacks.filter(f => f._id !== id)));
  };

  return (
    <div style={{ maxWidth: "500px", margin: "50px auto" }}>
      <h2>Feedback Collector</h2>
      <input placeholder="Name" value={form.name} onChange={e=>setForm({...form, name:e.target.value})} />
      <input placeholder="Message" value={form.message} onChange={e=>setForm({...form, message:e.target.value})} />
      <input type="number" min="1" max="5" value={form.rating} onChange={e=>setForm({...form, rating:e.target.value})} />
      <button onClick={submit}>Submit</button>
      <ul>
        {feedbacks.map(f => (
          <li key={f._id}>
            {f.name} ({f.rating}/5): {f.message}
            <button onClick={()=>del(f._id)}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
