import Todo from "./components/Todo";
import Modal from "./components/Modal";
import Backdrop from "./components/Backdrop";

function App() {
  return (
    <div className="App">
      <div>
        <h1>My Todos</h1>
        <Todo title="Learn React" />
        <Todo title="Learn Next" />
        <Todo title="Build a project" />
      </div>
    </div>
  );
}

export default App;
