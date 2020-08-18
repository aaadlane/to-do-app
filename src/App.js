import React from 'react';
import './App.css';
import Header from "./Components/Header";
import AddToDo from "./Components/AddToDo";
import ToDoS from "./Components/ToDoS";
import { Provider } from "./Context"


function App() {
  return (

    <div className="app-container">
      <Provider>
        <Header></Header>
        <AddToDo />
        <ToDoS />
      </Provider>
    </div>
  );
}

export default App;
