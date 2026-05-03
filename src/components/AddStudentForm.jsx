import { useState } from "react";

function AddStudentForm({ addStudent }) {
  const [name, setName] = useState("");
  const [score, setScore] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name.trim() === "" || score === "") return;

    const numericScore = Number(score);

    if (numericScore < 0 || numericScore > 100) {
      alert("Score must be between 0 and 100");
      return;
    }

    addStudent(name.trim(), numericScore);

    setName("");
    setScore("");
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        type="number"
        placeholder="Enter Score"
        value={score}
        onChange={(e) => setScore(e.target.value)}
      />

      <button type="submit">Add</button>
    </form>
  );
}

export default AddStudentForm;