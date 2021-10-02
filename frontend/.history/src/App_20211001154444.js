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
import BlogDisplay from './ComponentBlogPage/BlogDisplay';
import BlogListPage from './ComponentBlogPage/BlogListPage';
import AddVideoForm from './ComponentVideoPage/AddVideoForm';
import VideoDisplay from './ComponentVideoPage/VideoDisplay';
import VideoListPage from './ComponentVideoPage/VideoListPage';
import CreateBlogForm from './ComponentBlogPage/CreateBlogForm';
import BlogCategoryPage from './ComponentBlogPage/BlogCategoryPage';
import VideoCategoryPage from './ComponentVideoPage/VideoCategoryPage';

function Video() {
  let { id } = useParams();
  return  <VideoDisplay videoID={id}/>;
}

function Blog() {
  let { id } = useParams();
  const date = new Date().toDateString();
  return <BlogDisplay blogID={id} date={date} title='Test Title' content='This is test content. This is test content. This is test content. This is test content. This is test content. This is test content. This is test content. This is test content. This is test content. This is test content. This is test content. This is test content. This is test content. This is test content. This is test content. This is test content. This is test content. This is test content. This is test content. This is test content. This is test content. This is test content. This is test content. This is test content. This is test content. This is test content. This is test content. This is test content. This is test content. This is test content. This is test content. This is test content. This is test content. This is test content. This is test content. This is test content. This is test content. This is test content. This is test content.This is test content. This is test content. This is test content. This is test content. This is test content. This is test content.This is test content. This is test content. This is test content. This is test content. This is test content. This is test content.' imageSource='https://scontent-xsp1-2.xx.fbcdn.net/v/t1.6435-9/p526x296/238640166_3055105201434260_5329465077107434534_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=825194&_nc_ohc=dh3sQ9ho-ZcAX8yM4aM&tn=fjojGLxrqYfM2bdG&_nc_ht=scontent-xsp1-2.xx&oh=8fb8306e340dad3fd578218da9565cc3&oe=616020CF'/>
}

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
          <Header onShowAccountHandler={onShowAccountHandler}/>
          <Switch>
              <Route path="/blog-category/basketball/create-new"> 
                <CreateBlogForm /> 
              </Route>
              <Route path="/blog-category/calisthenic/create-new">
                <CreateBlogForm /> 
              </Route>
              <Route path="/blog-category/basketball/:id" children={<Blog />} />
              <Route path="/blog-category/calisthenic/:id" children={<Blog />} />

              <Route path="/video-category/basketball/:id" children={<Video />} />
              <Route path="/video-category/calisthenic/:id" children={<Video />} />

              <Route path="/blog-category/basketball">
                <BlogListPage 
                  blogType='basketball'/>
              </Route>

              <Route path="/blog-category/calisthenic">
                <BlogListPage 
                  blogType='calisthenic'/>
              </Route>

              <Route path="/video-category/basketball">
                <VideoListPage 
                  videoType='basketball'
                  isShownAddVideoForm={showAddVideoForm}
                  onShowAddVideoForm={onShowAddVideoForm}
                />
              </Route>

              <Route path="/video-category/calisthenic">
                <VideoListPage 
                  videoType='calisthenic'
                  isShownAddVideoForm={showAddVideoForm}
                  onShowAddVideoForm={onShowAddVideoForm} 
                />
              </Route>

              <Route path="/blog-category">
                <BlogCategoryPage />
              </Route>
              
              <Route path="/video-category">
                <VideoCategoryPage/>
              </Route>

              <Route path="/">
                <Homepage/>
              </Route>

          </Switch>
      </div>
    </Router>
  );
}

export default App;
