import "./styles.css";
import { students, getInitials, getPercentage, getRank } from "./studentData.js";

function StudentCard({ name, department, marks, total, tags }) {
  const initials   = getInitials(name);
  const percentage = getPercentage(marks, total);
  const rank       = getRank(percentage);

  return (
    <div className="card">
      <div className="card-stripe" />

      <div className="card-body">
        <div className="card-top-row">
          <div className="avatar">
            <span className="avatar-text">{initials}</span>
          </div>
          <span className={`rank-badge ${rank.high ? "rank-high" : ""}`}>
            {rank.label}
          </span>
        </div>

        <h2 className="student-name">{name}</h2>
        <p className="student-dept">{department}</p>

        <div className="divider" />

        <div className="marks-row">
          <div>
            <p className="marks-label">Marks</p>
            <p className="marks-value">
              {marks}
              <span className="marks-total">/{total}</span>
            </p>
          </div>

          <div className="bar-wrap">
            <div className="bar-track">
              <div
                className="bar-fill"
                style={{ width: `${percentage}%` }}
              />
            </div>
            <p className="bar-pct">{percentage}%</p>
          </div>
        </div>
      </div>

      <div className="card-footer">
        {tags.map((tag) => (
          <span key={tag} className="footer-tag">{tag}</span>
        ))}
      </div>
    </div>
  );
}

export default function StudentList() {
  return (
    <div className="wrapper">
      <div className="page-header">
        <p className="page-eyebrow">Exercise 02</p>
        <h1 className="page-title">
          Student <span>Cards</span>
        </h1>
      </div>

      <div className="grid">
        {students.map((student) => (
          <StudentCard
            key={student.id}
            name={student.name}
            department={student.department}
            marks={student.marks}
            total={student.total}
            tags={student.tags}
          />
        ))}
      </div>
    </div>
  );
}
