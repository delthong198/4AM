import React from 'react';

const BlogCategoryPage = (props) => {
    return (
        <div className={styles['blog-category-container']}>
            <div className={`${styles['blog-category']} card-deck`}>
                <Link to="/blog-category/basketball">
                    <div className={styles['blog-category-item']}>
                        <img className={styles['blog-category-item-img']} src={basketballImg} alt="Card cap"/>
                        <div className={styles['blog-category-item-body']}>
                            <h5 className="card-title">Basketball</h5>
                            <p className="card-text">Blog hướng dẫn luyện tập các động tác bóng rổ.</p>
                        </div>
                    </div>
                </Link>
                <Link to="/blog-category/calisthenic">
                    <div className={styles['blog-category-item']}>
                        <img className={styles['blog-category-item-img']} src={calisthenicImg} alt="Card cap"/>
                        <div className={styles['blog-category-item-body']}>
                            <h5 className="card-title">Calisthenic</h5>
                            <p className="card-text">Các bài tập street workout, calisthenic giúp rèn luyện sức khỏe.</p>
                        </div>
                    </div>
                </Link>
            </div>  
        </div>
    );
}

export default BlogCategoryPage;