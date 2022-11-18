import "./App.css";
import List from "./List";
import data from "./data";
import { useState } from "react";

function App() {
  const [people, setPeople] = useState(data);

  const removeItem = (id) => {
    setPeople((oldValue) => oldValue.filter((value) => value.id !== id));
  };

  const reloadAllItem = () => {
    setPeople(data);
  };

  return (
    <div className="App">
      <header className="App-header p-3">
        <h1 className="text-light">This is my Events</h1>
        <section className="people-list">
          <List data={people} removeItem={removeItem} />
        </section>
      </header>
    </div>
  );
}

export default App;
