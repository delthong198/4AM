import styles from './VideoPage.module.css';

const VideoPage = (props) => {
    return (
        <div className={styles['video-category-container']}>
            
        </div>
        <div class="card-deck">
            <div class="card">
                <img class="card-img-top" src="..." alt="Card image cap"/>
                <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                </div>
            </div>
            <div class="card">
                <img class="card-img-top" src="..." alt="Card image cap"/>
                <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                </div>
            </div>
        </div>  
    );
}

export default VideoPage;