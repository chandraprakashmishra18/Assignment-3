import { useState } from "react";
import AddStudentForm from "./components/AddStudentForm";
import Header from "./components/Header";
import StudentTable from "./components/StudentTable";

function App() {
  const [students, setStudents] = useState([]);

  // Add student
  const addStudent = (name, score) => {
    const newStudent = {
      id: Date.now(),
      name,
      score: Number(score),
    };

    setStudents((prev) => [...prev, newStudent]);
  };

  // Delete one
  const deleteStudent = (id) => {
    setStudents((prev) => prev.filter((s) => s.id !== id));
  };

  // Delete all
  const deleteAllStudents = () => {
    if (students.length === 0) return;

    if (window.confirm("Are you sure you want to delete all students?")) {
      setStudents([]);
    }
  };

  // ✅ Average score (derived state)
  const averageScore =
    students.length === 0
      ? 0
      : (
          students.reduce((sum, s) => sum + s.score, 0) /
          students.length
        ).toFixed(2);

  return (
    <div className="app">
      <Header
        total={students.length}
        average={averageScore}
        onDeleteAll={deleteAllStudents}
      />

      <div className="container">
        <AddStudentForm addStudent={addStudent} />

        <StudentTable
          students={students}
          onDelete={deleteStudent}
        />
      </div>
    </div>
  );
}

export default App;