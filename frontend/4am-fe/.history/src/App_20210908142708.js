import { useState } from 'react';
import './App.css';
import AccountAction from './ComponentAccount/AccountAction';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Homepage from './ComponentHomepage/Homepage';
import VideoCategoryPage from './ComponentVideoPage/VideoCategoryPage';
import Header from './Components/Layout/Header';


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
          <Header
            onShowAccountHandler={onShowAccountHandler}
            onHideAccountHandler={onHideAccountHandler} />
          <Switch>
              <Route path="/video-category/basketball">
                <h2 style={{top: '102px'}}>Basketball video</h2>
              </Route>

              <Route path="/video-category/calisthenic">
                <h2>Basketball video</h2>
              </Route>

              <Route path="/video-category">
                <VideoCategoryPage />
              </Route>

              <Route path="/">
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
