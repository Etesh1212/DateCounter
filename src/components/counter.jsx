// import { useState } from "react";

// import { useState } from "react";

function DateCounter() {
  const [count, setCount] = useState(0);

  const handleCounterP = () => {
    setCount((C) => c - 1);
  };

  const handleCounterN = () => {
    setCount((C) => c + 1);
  };

  return (
    <div>
      <button onClick={handleCounterP}>Prev</button>
      <span>Count</span>
      <button onClick={handleCounterN}>Next</button>
    </div>
  );
}

export default DateCounter;
