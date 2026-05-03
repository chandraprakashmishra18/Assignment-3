function Header({ total, average, onDeleteAll }) {
  return (
    <header className="header">
      <h1>Student Manager</h1>

      <div className="header-actions">
        <span className="badge">{total} Students</span>

        <span className="badge">
          Avg: {average}
        </span>

        <button
          className="delete-all-btn"
          onClick={onDeleteAll}
          disabled={total === 0}
        >
          Delete All
        </button>
      </div>
    </header>
  );
}

export default Header;