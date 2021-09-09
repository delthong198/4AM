import styles from './VideoPage.module.css';

const VideoPage = (props) => {
    return (
        <div className={styles['video-category-container']}>
            <div className={`${styles['video-category']} card-deck`}>
                <div className={`${styles['video-category-item']} card`}>
                    <img className="card-img-top" src="..." alt="Card cap"/>
                    <div className="card-body">
                    <h5 className="card-title">Basketball</h5>
                    <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                </div>
                <div className={`${styles['video-category-item']} card`}>
                    <img className="card-img-top" src="..." alt="Card cap"/>
                    <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                </div>
            </div>  
        </div>
    );
}

export default VideoPage;