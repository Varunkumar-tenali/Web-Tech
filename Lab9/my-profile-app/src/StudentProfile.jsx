import "./styles.css";
import { student, getInitials } from "./studentData.js";

export default function StudentProfile() {
  const name       = student.name;
  const id         = student.id;
  const department = student.department;
  const year       = student.year;
  const section    = student.section;
  const status     = student.status;

  const initials = getInitials(name);

  return (
    <div className="wrapper">
      <div className="card">

        <div className="card-top">
          <p className="badge">Student Profile</p>

          <div className="avatar-row">
            <div className="avatar">
              <span className="avatar-initials">{initials}</span>
            </div>
            <div className="name-block">
              <h1 className="student-name">{name}</h1>
              <p className="student-id">{id}</p>
            </div>
          </div>
        </div>

        <div className="details-grid">
          <div className="detail-cell">
            <p className="detail-label">Department</p>
            <p className="detail-value">{department}</p>
          </div>

          <div className="detail-cell">
            <p className="detail-label">Year</p>
            <p className="detail-value">{year}</p>
          </div>

          <div className="detail-cell">
            <p className="detail-label">Section</p>
            <p className="detail-value">{section}</p>
          </div>

          <div className="detail-cell">
            <p className="detail-label">Status</p>
            <p className="detail-value">{status}</p>
          </div>
        </div>

        <div className="card-footer">
          <span className="footer-left">VIT University</span>
          <span className="status-dot">
            <span className="dot" />
            Active
          </span>
        </div>

      </div>
    </div>
  );
}
