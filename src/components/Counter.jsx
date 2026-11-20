
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((prev) => prev + 1);
  };

  const decrement = () => {
    setCount((prev) => Math.max(0, prev - 1));
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <section className="counter-card">
      <div className="counter-header">
        <span className="counter-icon">📊</span>
        <h2>Лічильник відвідувань</h2>
      </div>

      <p className="counter-description">
        Кількість відвідувань заняття
      </p>

      <div className="counter-value">
        {count}
      </div>

      <div className="counter-buttons">
        <button
          className="btn-primary"
          onClick={increment}
        >
          +1 відвідування
        </button>

        <button
          className="btn-secondary"
          onClick={decrement}
          disabled={count === 0}
        >
          −1
        </button>

        <button
          className="btn-reset"
          onClick={reset}
          disabled={count === 0}
        >
          ↻ Скинути
        </button>
      </div>
    </section>
  );
}

export default Counter;
