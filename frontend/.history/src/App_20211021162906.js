import { useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import AddVideoForm from './ComponentVideoPage/AddVideoForm';
import Router from './Router/Router';

function App() {
  const [showAddVideoForm, setShowAddVideoForm] = useState(false);
  const onShowAddVideoForm = () => {
    setShowAddVideoForm(true);
  }
  const onHideAddVideoForm = () => {
    setShowAddVideoForm(false);
  }

  return (
    <Router>
      <div className="App">
          {showAddVideoForm && <AddVideoForm onHideAddVideoForm={onHideAddVideoForm}/>}
      </div>
    </Router>
  );
}

export default App;
