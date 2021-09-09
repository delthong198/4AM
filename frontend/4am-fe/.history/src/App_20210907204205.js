import { useState } from 'react';
import './App.css';
import AccountAction from './ComponentAccount/AccountAction';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
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
    <Router>
      <div className="App">
          {showAccountAction && <AccountAction onHideAccountHandler={onHideAccountHandler}/>}
          <Homepage 
            onShowAccountHandler={onShowAccountHandler}
            onHideAccountHandler={onHideAccountHandler}/>
      </div>
      <Switch>
          <Route path="/homepage">
            <Homepage />
          </Route>
      </Switch>
    </Router>
  );
}

export default App;
