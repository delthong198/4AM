import { useState } from 'react';
import './App.css';
import AccountAction from './ComponentAccount/AccountAction';
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
      {showAccountAction && <AccountAction onHideAccountHandler={onHideAccountHandler}/>}
      <Homepage 
        onShowAccountHandler={onShowAccountHandler}
        onHideAccountHandler={onHideAccountHandler}/>
    </div>
  );
}

export default App;
