
function StudentCard({ name, age, course }) {
    return (
      <article className="student-card">
        <div className="student-avatar">
          {name.charAt(0).toUpperCase()}
        </div>
  
        <div className="student-info">
          <span className="student-label">
            Студент
          </span>
  
          <h3>{name}</h3>
  
          <p>🎂 Вік: {age} років</p>
          <p>🎓 Курс: {course}</p>
        </div>
      </article>
    );
  }
  
  export default StudentCard;
  