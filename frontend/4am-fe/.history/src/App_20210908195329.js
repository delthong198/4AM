import { useState, useParams } from 'react';
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
import VideoListPage from './ComponentVideoPage/VideoListPage';

function Video() {
  let { id } = useParams();
  return  <h2 style={{'margin-top':'120px'}}>id</h2>;
}

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
              <Route path="/video-category/basketball/:id" children={<Video />} />
              <Route path="/video-category/basketball">
                <VideoListPage videoType='basketball' />
              </Route>

              <Route path="/video-category/calisthenic">
                <VideoListPage videoType='calisthenic' />
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
