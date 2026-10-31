function StudentCard({ name, rollNo, department, year, email, skills }) {
  const initials = name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2);

  return (
    <article className="student-card">
      <div className="avatar" aria-hidden="true">
        {initials}
      </div>
      <h2>{name}</h2>
      <p className="department">{department}</p>

      <div className="student-details">
        <p>
          <strong>Roll No:</strong> {rollNo}
        </p>
        <p>
          <strong>Year:</strong> {year}
        </p>
        <p>
          <strong>Email:</strong> {email}
        </p>
      </div>

      <h3>Skills</h3>
      <div className="skills">
        {skills.map((skill) => (
          <span key={skill}>{skill}</span>
        ))}
      </div>
    </article>
  );
}

export default StudentCard;
