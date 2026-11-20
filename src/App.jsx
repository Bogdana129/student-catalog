
import { useState } from "react";
import StudentCard from "./components/StudentCard";
import Counter from "./components/Counter";
import "./App.css";

const students = [
  { id: 1, name: "Богдана", age: 18, course: 2 },
  { id: 2, name: "Марія", age: 19, course: 2 },
  { id: 3, name: "Олександр", age: 20, course: 3 },
  { id: 4, name: "Анна", age: 18, course: 1 },
  { id: 5, name: "Максим", age: 21, course: 4 },
  { id: 6, name: "Софія", age: 19, course: 3 },
];

function App() {
  const [showStudents, setShowStudents] = useState(true);
  const [selectedCourse, setSelectedCourse] = useState("all");

  const filteredStudents = students.filter((student) => {
    return (
      selectedCourse === "all" ||
      student.course === Number(selectedCourse)
    );
  });

  const visibleStudents = showStudents ? filteredStudents : [];

  return (
    <div className="app">
      <header className="header">
        <div className="header-badge">
          🎓 STUDENT MANAGEMENT
        </div>

        <h1>Каталог студентів</h1>

        <p>
          Інтерактивна система перегляду студентів
          та обліку відвідувань
        </p>
      </header>

      <main className="main-content">
        <section className="statistics">
          <div className="stat-card">
            <span>👥 Усього студентів</span>
            <strong>{students.length}</strong>
          </div>

          <div className="stat-card">
            <span>📚 Зараз відображається</span>
            <strong>{visibleStudents.length}</strong>
          </div>

          <div className="stat-card">
            <span>🎓 Курсів навчання</span>
            <strong>
              {new Set(students.map((s) => s.course)).size}
            </strong>
          </div>
        </section>

        <section className="catalog-section">
          <div className="section-header">
            <div>
              <h2>Наші студенти</h2>
              <p>Переглядай та фільтруй список студентів</p>
            </div>
          </div>

          <div className="toolbar">
            <label htmlFor="courseFilter">
              Фільтр за курсом:
            </label>

            <select
              id="courseFilter"
              value={selectedCourse}
              onChange={(event) =>
                setSelectedCourse(event.target.value)
              }
            >
              <option value="all">Усі курси</option>
              <option value="1">1 курс</option>
              <option value="2">2 курс</option>
              <option value="3">3 курс</option>
              <option value="4">4 курс</option>
            </select>

            <button
              className="toggle-btn"
              onClick={() =>
                setShowStudents((prev) => !prev)
              }
            >
              {showStudents
                ? "🙈 Приховати студентів"
                : "👀 Показати студентів"}
            </button>
          </div>

          {visibleStudents.length > 0 ? (
            <div className="students-grid">
              {visibleStudents.map((student) => (
                <StudentCard
                  key={student.id}
                  name={student.name}
                  age={student.age}
                  course={student.course}
                />
              ))}
            </div>
          ) : (
            <div className="empty-state">
              <span>🔍</span>
              <h3>Студентів не знайдено</h3>
              <p>
                Спробуй змінити фільтр або
                показати студентів.
              </p>
            </div>
          )}
        </section>

        <Counter />
      </main>

      <footer className="footer">
        Student Catalog © 2026
      </footer>
    </div>
  );
}

export default App;
