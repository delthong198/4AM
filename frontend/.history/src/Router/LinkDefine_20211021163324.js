import React from 'react'
import {
    Switch, Route
  } from "react-router-dom";

import Homepage from '../ComponentHomepage/Homepage';
import LoginPage from '../ComponentAccountPage/LoginPage';
import BlogDisplay from '../ComponentBlogPage/BlogDisplay';
import BlogListPage from '../ComponentBlogPage/BlogListPage';
import RegisterPage from '../ComponentAccountPage/RegisterPage';
import VideoDisplay from '../ComponentVideoPage/VideoDisplay';
import VideoListPage from '../ComponentVideoPage/VideoListPage';
import BlogManagerPage from '../ComponentManager/BlogManagerPage';
import VideoManagerPage from '../ComponentManager/VideoManagerPage';
import BlogCategoryPage from '../ComponentBlogPage/BlogCategoryPage';
import VideoCategoryPage from '../ComponentVideoPage/VideoCategoryPage';
import CreateBlogPage from '../ComponentCreateContent/CreateBlogPage';

import { useParams } from "react-router";
function Video() {
  let { id } = useParams();
  return  <VideoDisplay videoID={id}/>;
}

function Blog(props) {
  let { id } = useParams();
  const date = new Date().toDateString();
  return <BlogDisplay blogID={id} date={date} title='Test Title' content='This is test content. This is test content. This is test content. This is test content. This is test content. This is test content. This is test content. This is test content. This is test content. This is test content. This is test content. This is test content. This is test content. This is test content. This is test content. This is test content. This is test content. This is test content. This is test content. This is test content. This is test content. This is test content. This is test content. This is test content. This is test content. This is test content. This is test content. This is test content. This is test content. This is test content. This is test content. This is test content. This is test content. This is test content. This is test content. This is test content. This is test content. This is test content. This is test content.This is test content. This is test content. This is test content. This is test content. This is test content. This is test content.This is test content. This is test content. This is test content. This is test content. This is test content. This is test content.This is test content. This is test content. This is test content. This is test content. This is test content. This is test content. This is test content. This is test content. This is test content. This is test content. This is test content. This is test content. This is test content. This is test content. This is test content. This is test content. This is test content. This is test content. This is test content. This is test content. This is test content. This is test content. This is test content. This is test content. This is test content. This is test content. This is test content. This is test content. This is test content. This is test content. This is test content. This is test content. This is test content. This is test content. This is test content. This is test content. This is test content. This is test content. This is test content.This is test content. This is test content. This is test content. This is test content. This is test content. This is test content.This is test content. This is test content. This is test content. This is test content. This is test content. This is test content.This is test content. This is test content. This is test content. This is test content. This is test content. This is test content. This is test content. This is test content. This is test content. This is test content. This is test content. This is test content. This is test content. This is test content. This is test content. This is test content. This is test content. This is test content. This is test content. This is test content. This is test content. This is test content. This is test content. This is test content. This is test content.This is test content. This is test content. This is test content. This is test content. This is test content. This is test content.This is test content. This is test content. This is test content. This is test content. This is test content. This is test content.' imageSource='https://scontent-xsp1-2.xx.fbcdn.net/v/t1.6435-9/p526x296/238640166_3055105201434260_5329465077107434534_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=825194&_nc_ohc=dh3sQ9ho-ZcAX8yM4aM&tn=fjojGLxrqYfM2bdG&_nc_ht=scontent-xsp1-2.xx&oh=8fb8306e340dad3fd578218da9565cc3&oe=616020CF'/>
}

const LinkDefine = () => {
    return (
        <Switch>
            <Route path="/blog-category/create-new">
            <CreateBlogPage />
            </Route>

            <Route path="/blog-category/basketball/:id" children={<Blog />}/>
            <Route path="/blog-category/calisthenic/:id" children={<Blog />}/>

            <Route path="/video-category/basketball/:id" children={<Video />}/>
            <Route path="/video-category/calisthenic/:id" children={<Video />}/>

            <Route path="/blog-category/basketball">
            <BlogListPage blogType='basketball'/>
            </Route>

            <Route path="/blog-category/calisthenic">
            <BlogListPage blogType='calisthenic'/>
            </Route>

            <Route path="/video-category/basketball">
            <VideoListPage 
                videoType='basketball'
                isShownAddVideoForm={props.showAddVideoForm}
                onShowAddVideoForm={props.onShowAddVideoForm}
            />
            </Route>

            <Route path="/video-category/calisthenic">
            <VideoListPage 
                videoType='calisthenic'
                isShownAddVideoForm={props.showAddVideoForm}
                onShowAddVideoForm={props.onShowAddVideoForm} 
            />
            </Route>

            <Route path="/video-manager">
            <VideoManagerPage />
            </Route>

            <Route path="/blog-manager">
            <BlogManagerPage />
            </Route>

            <Route path="/blog-category">
            <BlogCategoryPage />
            </Route>
            
            <Route path="/video-category">
            <VideoCategoryPage/>
            </Route>

            <Route path="/login"> 
            <LoginPage />
            </Route>

            <Route path="/register"> 
            <RegisterPage />
            </Route>

            <Route path="/">
            <Homepage/>
            </Route>
        </Switch>
    )
}

export default LinkDefine;
