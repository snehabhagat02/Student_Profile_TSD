import StudentCard from "./components/StudentCard";
import "./App.css";

function App() {
  const students = [
    {
      name: "Sneha Bhagat",
      rollNo: "IT101",
      department: "Information Technology",
      year: "Third Year",
      email: "sneha@example.com",
      skills: ["HTML", "CSS", "React"]
    },
    {
      name: "Aarav Sharma",
      rollNo: "IT102",
      department: "Information Technology",
      year: "Third Year",
      email: "aarav@example.com",
      skills: ["JavaScript", "Python", "SQL"]
    },
    {
      name: "Priya Patil",
      rollNo: "IT103",
      department: "Information Technology",
      year: "Third Year",
      email: "priya@example.com",
      skills: ["C++", "Java", "React"]
    }
  ];

  return (
    <div className="app">
      <header>
        <h1>College Student Portal</h1>
        <p>Meet our talented students</p>
      </header>

      <div className="student-container">
        {students.map((student) => (
          <StudentCard
            key={student.rollNo}
            name={student.name}
            rollNo={student.rollNo}
            department={student.department}
            year={student.year}
            email={student.email}
            skills={student.skills}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
