import VideoItem from "./BlogItem";
import styles from './BlogListPage.module.css';

const basketballBlog = [{
    id: 1,
    thumnailSource: 'https://scontent-xsp1-2.xx.fbcdn.net/v/t1.6435-9/213133883_3021396661471781_4317623430528260898_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=825194&_nc_ohc=YfIyt7FtekYAX8nW9r3&_nc_ht=scontent-xsp1-2.xx&oh=f557ffb1e365eb1584e9fad89310070c&oe=615DB1CC',
    title: '𝐋𝐄̂𝐍 𝐑𝐎̂̉ 𝐓𝐑𝐀́𝐈 𝐓𝐀𝐘! ',
    content: '1 tip nhỏ khá hay về cách lựa chọn tay lên rổ! Tóm tắt lại: ➖Nếu đối phương ở bên vị trí bên Vai-Hông của tay Off-Hand, bạn lên rổ tay Outside cùng với hướng bạn đi(Tay trái bên cánh trái, tay phải bên cánh phải)➖Nếu đối phương chủ động cho bạn qua người và ra sau lưng bạn để bạn mất kiểm soát về cơ thể họ, bạn nên lên rổ tay Inside để bảo vệ trái banh tốt hơn(Tay phải ở cánh trái, tay trái ở cánh phải)',
    },  
    {
        id: 2,
        thumnailSource: 'https://scontent-xsp1-2.xx.fbcdn.net/v/t1.6435-9/213133883_3021396661471781_4317623430528260898_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=825194&_nc_ohc=YfIyt7FtekYAX8nW9r3&_nc_ht=scontent-xsp1-2.xx&oh=f557ffb1e365eb1584e9fad89310070c&oe=615DB1CC',
        title: '𝐋𝐄̂𝐍 𝐑𝐎̂̉ 𝐓𝐑𝐀́𝐈 𝐓𝐀𝐘! ',
        content: '1 tip nhỏ khá hay về cách lựa chọn tay lên rổ! Tóm tắt lại: ➖Nếu đối phương ở bên vị trí bên Vai-Hông của tay Off-Hand, bạn lên rổ tay Outside cùng với hướng bạn đi(Tay trái bên cánh trái, tay phải bên cánh phải)➖Nếu đối phương chủ động cho bạn qua người và ra sau lưng bạn để bạn mất kiểm soát về cơ thể họ, bạn nên lên rổ tay Inside để bảo vệ trái banh tốt hơn(Tay phải ở cánh trái, tay trái ở cánh phải)',
    }
]

const calisthenicBlog = [
    {
        id: 1,
        videoID: 'DkSBlgMqDiU',
        thumnailSource: 'https://i.ytimg.com/vi/DkSBlgMqDiU/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDrvlSujWwi_itDZslVloEhvHFydA',
        title: 'Calisthenic Training at 4am’s Court!',
        description: '4AM Workout',
    },
    {
        id: 2,
        videoID: 'c5ts2QbMz10',
        thumnailSource: 'https://i.ytimg.com/vi/c5ts2QbMz10/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBZuXBMCzpPSk3Ian-2KIiWuczLzQ',
        title: 'StreetWorkout mùng 1 tết!',
        description: 'New year training',
    },
]

const BlogListPage = (props) => {
    var blogSource;
    if (props.videoType === 'basketball') {
        blogSource = basketballBlog;
    }
    else {
        blogSource = calisthenicBlog;
    }

    var blogList;

    if (blogSource) {
        blogList = blogSource.map(video => 
            <VideoItem
                key={video.id}
                thumnailSource={video.thumnailSource}
                title={video.title}
                description={video.description}
                videoType={props.videoType}
                videoID={video.videoID}
            />
        )
    }
    // if(props.videoType === 'basketball') {
    // }
    return (
        <div className={styles['blog-category-page']}>
            <h2 className={styles['blog-category-title']}>{props.videoType==='basketball' ? 'Basketball Videos' : 'Calisthenic Videos'}</h2>
            <div className={styles['blog-category-container']}>
                {blogList}
            </div>
        </div>
    );
}

export default BlogListPage;