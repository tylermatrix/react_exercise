import Todo from "./components/Todo";

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
