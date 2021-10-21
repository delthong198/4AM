import React from 'react'

const Router = () => {
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

export default Router
