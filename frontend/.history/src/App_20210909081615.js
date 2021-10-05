import { useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { useParams } from "react-router";
import Header from './Components/Layout/Header';
import Homepage from './ComponentHomepage/Homepage';
import VideoDisplay from './ComponentVideoPage/VideoDisplay';
import AccountAction from './ComponentAccount/AccountAction';
import VideoListPage from './ComponentVideoPage/VideoListPage';
import BlogCategoryPage from './ComponentBlogPage/BlogCategoryPage';
import VideoCategoryPage from './ComponentVideoPage/VideoCategoryPage';

function Video() {
  let { id } = useParams();
  return  <VideoDisplay videoID={id}/>;
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