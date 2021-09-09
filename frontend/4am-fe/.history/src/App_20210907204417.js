import { useState } from 'react';
import './App.css';
import AccountAction from './ComponentAccount/AccountAction';
import {
  BrowserRouter as Router,
  Switch,
  Route,
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
          <Switch>
              <Route path="/homepage">
                <Homepage 
                  onShowAccountHandler={onShowAccountHandler}
                  onHideAccountHandler={onHideAccountHandler}/>
              </Route>
          </Switch>
      </div>
    </Router>
  );
}

export default App;
