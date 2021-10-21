import { useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
} from "react-router-dom";
import AddVideoForm from './ComponentVideoPage/AddVideoForm';
import LinkDefine from './Router/LinkDefine';

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
          <LinkDefine />
      </div>
    </Router>
  );
}

export default App;
