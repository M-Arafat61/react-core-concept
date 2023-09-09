import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  const handleAdd = () => {
    const newCount = count + 1;
    setCount(newCount);
  };
  const handleReduce = () => {
    const newCount = count - 1;
    setCount(newCount);
  };
  return (
    <div style={{ border: "2px solid yellow", marginBottom: "20px" }}>
      <h3>Counter: {count}</h3>
      <button style={{ marginBottom: "10px" }} onClick={handleAdd}>
        Increase
      </button>
      <button style={{ marginBottom: "10px" }} onClick={handleReduce}>
        Decrease
      </button>
    </div>
  );
}
