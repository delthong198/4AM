import { useState } from 'react';
import './App.css';
import AccountAction from './ComponentAccount/AccountAction';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { useParams } from "react-router";
import Homepage from './ComponentHomepage/Homepage';
import VideoCategoryPage from './ComponentVideoPage/VideoCategoryPage';
import Header from './Components/Layout/Header';
import VideoListPage from './ComponentVideoPage/VideoListPage';
import VideoDisplay from './ComponentVideoPage/VideoDisplay';
import Cookies from 'universal-cookie';

function Video() {
  let { id } = useParams();
  return  <VideoDisplay videoID={id}/>;
}

function App() {
  const cookies = new Cookies();
  cookies.set(key1, value1, {secure: true, sameSite: 'none'});
  cookies.set(key2, value2, {secure: true, sameSite: 'none'});
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
              <Route path="/video-category/calisthenic/:id" children={<Video />} />
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
