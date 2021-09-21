import React from 'react';
import { Link } from 'react-router-dom';
import styles from './RecentBlogs.module.css';

const RecentBlogs = () => {
    const recentBlogs = [{
        id: 1,
        blogID: 'basketball-1',
        thumnailSource: 'https://scontent-xsp1-2.xx.fbcdn.net/v/t1.6435-9/213133883_3021396661471781_4317623430528260898_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=825194&_nc_ohc=YfIyt7FtekYAX8nW9r3&_nc_ht=scontent-xsp1-2.xx&oh=f557ffb1e365eb1584e9fad89310070c&oe=615DB1CC',
        title: '𝐋𝐄̂𝐍 𝐑𝐎̂̉ 𝐓𝐑𝐀́𝐈 𝐓𝐀𝐘! ',
        content: '1 tip nhỏ khá hay về cách lựa chọn tay lên rổ! Tóm tắt lại: ➖Nếu đối phương ở bên vị trí bên Vai-Hông của tay Off-Hand, bạn lên rổ tay Outside cùng với hướng bạn đi(Tay trái bên cánh trái, tay phải bên cánh phải)➖Nếu đối phương chủ động cho bạn qua người và ra sau lưng bạn để bạn mất kiểm soát về cơ thể họ, bạn nên lên rổ tay Inside để bảo vệ trái banh tốt hơn(Tay phải ở cánh trái, tay trái ở cánh phải)',
        },  
        {
            id: 2,
            blogID: 'basketball-2',
            thumnailSource: 'https://scontent-xsp1-2.xx.fbcdn.net/v/t1.6435-9/213133883_3021396661471781_4317623430528260898_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=825194&_nc_ohc=YfIyt7FtekYAX8nW9r3&_nc_ht=scontent-xsp1-2.xx&oh=f557ffb1e365eb1584e9fad89310070c&oe=615DB1CC',
            title: '𝐋𝐄̂𝐍 𝐑𝐎̂̉ 𝐓𝐑𝐀́𝐈 𝐓𝐀𝐘! ',
            content: '1 tip nhỏ khá hay về cách lựa chọn tay lên rổ! Tóm tắt lại: ➖Nếu đối phương ở bên vị trí bên Vai-Hông của tay Off-Hand, bạn lên rổ tay Outside cùng với hướng bạn đi(Tay trái bên cánh trái, tay phải bên cánh phải)➖Nếu đối phương chủ động cho bạn qua người và ra sau lưng bạn để bạn mất kiểm soát về cơ thể họ, bạn nên lên rổ tay Inside để bảo vệ trái banh tốt hơn(Tay phải ở cánh trái, tay trái ở cánh phải)',
        }
    ]
    return (
        <div className={styles['recent-blogs-container']}>
            <h2 className={styles['recent-blogs-heading']}>Bài viết gần đây</h2>
            <div className={`${styles['blog-list']} card-deck`}>
                <Link to='/blog-category/basketball/1'>
                    <div className={styles['recent-blogs-item']}>
                        <img className={styles['recent-blogs-item-img']} src={recentBlogs[0].thumnailSource} alt="Card cap"/>
                        <div className={styles['recent-blogs-item-body']}>
                            <h5 className={styles['body-title']}>{recentBlogs[0].title}</h5>
                            <p className={styles['body-description']}>{recentBlogs[0].content}.</p>
                        </div>
                    </div>
                </Link>
                <Link to='/blog-category/basketball/2'>
                    <div className={styles['recent-blogs-item']}>
                        <img className={styles['recent-blogs-item-img']} src={recentBlogs[1].thumnailSource} alt="Card cap"/>
                        <div className={styles['recent-blogs-item-body']}>
                            <h5 className={styles['body-title']}>{recentBlogs[1].title}</h5>
                            <p className={styles['body-description']}>{recentBlogs[1].content}</p>
                        </div>
                    </div>
                </Link>
            </div>  
        </div>
    )
}

export default RecentBlogs
