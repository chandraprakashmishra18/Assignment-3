import StudentRow from "./StudentRow";

function StudentTable({ students, onDelete }) {
  if (students.length === 0) {
    return <p className="empty">No students added yet</p>;
  }

  return (
    <div className="table">
      {students.map((student) => (
        <StudentRow
          key={student.id}
          student={student}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}

export default StudentTable;