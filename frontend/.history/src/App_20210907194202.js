import { useState } from 'react';
import './App.css';
import Homepage from './ComponentHomepage/Homepage';

function App() {
  const [showAccountAction, setShowAccountAction] = useState(false);
  const onShowAccountHandler = () => {
    setShowAccountAction(true);
  }
  const onHideAccountHandler = () => {
    setShowAccountAction(false);
  }
  return (
    <div className="App">
      <Homepage />
    </div>
  );
}

export default App;