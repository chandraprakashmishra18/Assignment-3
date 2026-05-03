function StudentRow({ student, onDelete }) {
  const { id, name, score } = student;

  // ✅ Pass / Fail logic
  const isPassed = score >= 33;

  // ✅ Grade logic
  const getGrade = (score) => {
    if (score >= 75) return "A";
    if (score >= 60) return "B";
    if (score >= 50) return "C";
    if (score >= 33) return "D";
    return "F";
  };

  const grade = getGrade(score);

  return (
    <div className="row">
      <div className="row-info">
        <span className="name">{name}</span>

        <span className="score">{score}</span>

        {/* Grade */}
        <span className={`grade grade-${grade}`}>
          {grade}
        </span>

        {/* Pass / Fail */}
        <span className={isPassed ? "status pass" : "status fail"}>
          {isPassed ? "Pass" : "Fail"}
        </span>
      </div>

      <button
        className="delete-btn"
        onClick={() => onDelete(id)}
      >
        Delete
      </button>
    </div>
  );
}

export default StudentRow;