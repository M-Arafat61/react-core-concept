import "./App.css";
import Counter from "./Counter";
import Posts from "./Posts";
import Team from "./Team";
import Users from "./Users";

function App() {
  function handleClick() {
    alert("button clicked");
  }
  function handleClickCalc(num) {
    alert(num + 5);
  }
  function addToFive(num) {
    alert(num + 5);
  }
  return (
    <>
      <h3>React core concepts event,state</h3>
      <Users></Users>
      <Posts></Posts>
      <Team></Team>
      <Counter></Counter>
      <button onClick={handleClick}>Click</button>
      <button onClick={handleClickCalc}>Click to cal</button>
      <button onClick={() => addToFive(5)}>Click inner F</button>
    </>
  );
}

export default App;
