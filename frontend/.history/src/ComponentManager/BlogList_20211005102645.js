import BlogItem from "./BlogItem";
import styles from './BlogList.module.css';

const blogs = [{
    id: 1,
    blogID: 'basketball-1',
    type: 'basketball',
    thumnailSource: 'https://scontent-xsp1-2.xx.fbcdn.net/v/t1.6435-9/213133883_3021396661471781_4317623430528260898_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=825194&_nc_ohc=YfIyt7FtekYAX8nW9r3&_nc_ht=scontent-xsp1-2.xx&oh=f557ffb1e365eb1584e9fad89310070c&oe=615DB1CC',
    title: '𝐋𝐄̂𝐍 𝐑𝐎̂̉ 𝐓𝐑𝐀́𝐈 𝐓𝐀𝐘! ',
    content: '1 tip nhỏ khá hay về cách lựa chọn tay lên rổ! Tóm tắt lại: ➖Nếu đối phương ở bên vị trí bên Vai-Hông của tay Off-Hand, bạn lên rổ tay Outside cùng với hướng bạn đi(Tay trái bên cánh trái, tay phải bên cánh phải)➖Nếu đối phương chủ động cho bạn qua người và ra sau lưng bạn để bạn mất kiểm soát về cơ thể họ, bạn nên lên rổ tay Inside để bảo vệ trái banh tốt hơn(Tay phải ở cánh trái, tay trái ở cánh phải)',
    },  
    {
        id: 2,
        blogID: 'basketball-2',
        type: 'basketball',
        thumnailSource: 'https://scontent-xsp1-2.xx.fbcdn.net/v/t1.6435-9/213133883_3021396661471781_4317623430528260898_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=825194&_nc_ohc=YfIyt7FtekYAX8nW9r3&_nc_ht=scontent-xsp1-2.xx&oh=f557ffb1e365eb1584e9fad89310070c&oe=615DB1CC',
        title: '𝐋𝐄̂𝐍 𝐑𝐎̂̉ 𝐓𝐑𝐀́𝐈 𝐓𝐀𝐘! ',
        content: '1 tip nhỏ khá hay về cách lựa chọn tay lên rổ! Tóm tắt lại: ➖Nếu đối phương ở bên vị trí bên Vai-Hông của tay Off-Hand, bạn lên rổ tay Outside cùng với hướng bạn đi(Tay trái bên cánh trái, tay phải bên cánh phải)➖Nếu đối phương chủ động cho bạn qua người và ra sau lưng bạn để bạn mất kiểm soát về cơ thể họ, bạn nên lên rổ tay Inside để bảo vệ trái banh tốt hơn(Tay phải ở cánh trái, tay trái ở cánh phải)',
    },
    {
        id: 3,
        blogID: 'basketball-3',
        type: 'basketball',
        thumnailSource: 'https://scontent-xsp1-2.xx.fbcdn.net/v/t1.6435-9/213133883_3021396661471781_4317623430528260898_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=825194&_nc_ohc=YfIyt7FtekYAX8nW9r3&_nc_ht=scontent-xsp1-2.xx&oh=f557ffb1e365eb1584e9fad89310070c&oe=615DB1CC',
        title: '𝐋𝐄̂𝐍 𝐑𝐎̂̉ 𝐓𝐑𝐀́𝐈 𝐓𝐀𝐘! ',
        content: '1 tip nhỏ khá hay về cách lựa chọn tay lên rổ! Tóm tắt lại: ➖Nếu đối phương ở bên vị trí bên Vai-Hông của tay Off-Hand, bạn lên rổ tay Outside cùng với hướng bạn đi(Tay trái bên cánh trái, tay phải bên cánh phải)➖Nếu đối phương chủ động cho bạn qua người và ra sau lưng bạn để bạn mất kiểm soát về cơ thể họ, bạn nên lên rổ tay Inside để bảo vệ trái banh tốt hơn(Tay phải ở cánh trái, tay trái ở cánh phải)',
    },  
    {
        id: 4,
        blogID: 'basketball-4',
        type: 'basketball',
        thumnailSource: 'https://scontent-xsp1-2.xx.fbcdn.net/v/t1.6435-9/213133883_3021396661471781_4317623430528260898_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=825194&_nc_ohc=YfIyt7FtekYAX8nW9r3&_nc_ht=scontent-xsp1-2.xx&oh=f557ffb1e365eb1584e9fad89310070c&oe=615DB1CC',
        title: '𝐋𝐄̂𝐍 𝐑𝐎̂̉ 𝐓𝐑𝐀́𝐈 𝐓𝐀𝐘! ',
        content: '1 tip nhỏ khá hay về cách lựa chọn tay lên rổ! Tóm tắt lại: ➖Nếu đối phương ở bên vị trí bên Vai-Hông của tay Off-Hand, bạn lên rổ tay Outside cùng với hướng bạn đi(Tay trái bên cánh trái, tay phải bên cánh phải)➖Nếu đối phương chủ động cho bạn qua người và ra sau lưng bạn để bạn mất kiểm soát về cơ thể họ, bạn nên lên rổ tay Inside để bảo vệ trái banh tốt hơn(Tay phải ở cánh trái, tay trái ở cánh phải)',
    },
    {
        id: 5,
        blogID: 'calisthenic-1',
        type: 'calisthenic',
        thumnailSource: 'https://scontent-xsp1-2.xx.fbcdn.net/v/t1.6435-9/213133883_3021396661471781_4317623430528260898_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=825194&_nc_ohc=YfIyt7FtekYAX8nW9r3&_nc_ht=scontent-xsp1-2.xx&oh=f557ffb1e365eb1584e9fad89310070c&oe=615DB1CC',
        title: '𝐋𝐄̂𝐍 𝐑𝐎̂̉ 𝐓𝐑𝐀́𝐈 𝐓𝐀𝐘! ',
        content: '1 tip nhỏ khá hay về cách lựa chọn tay lên rổ! Tóm tắt lại: ➖Nếu đối phương ở bên vị trí bên Vai-Hông của tay Off-Hand, bạn lên rổ tay Outside cùng với hướng bạn đi(Tay trái bên cánh trái, tay phải bên cánh phải)➖Nếu đối phương chủ động cho bạn qua người và ra sau lưng bạn để bạn mất kiểm soát về cơ thể họ, bạn nên lên rổ tay Inside để bảo vệ trái banh tốt hơn(Tay phải ở cánh trái, tay trái ở cánh phải)',
        },  
    {
        id: 6,
        blogID: 'calisthenic-2',
        type: 'calisthenic',
        thumnailSource: 'https://scontent-xsp1-2.xx.fbcdn.net/v/t1.6435-9/213133883_3021396661471781_4317623430528260898_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=825194&_nc_ohc=YfIyt7FtekYAX8nW9r3&_nc_ht=scontent-xsp1-2.xx&oh=f557ffb1e365eb1584e9fad89310070c&oe=615DB1CC',
        title: '𝐋𝐄̂𝐍 𝐑𝐎̂̉ 𝐓𝐑𝐀́𝐈 𝐓𝐀𝐘! ',
        content: '1 tip nhỏ khá hay về cách lựa chọn tay lên rổ! Tóm tắt lại: ➖Nếu đối phương ở bên vị trí bên Vai-Hông của tay Off-Hand, bạn lên rổ tay Outside cùng với hướng bạn đi(Tay trái bên cánh trái, tay phải bên cánh phải)➖Nếu đối phương chủ động cho bạn qua người và ra sau lưng bạn để bạn mất kiểm soát về cơ thể họ, bạn nên lên rổ tay Inside để bảo vệ trái banh tốt hơn(Tay phải ở cánh trái, tay trái ở cánh phải)',
    },
    {
        id: 7,
        blogID: 'calisthenic-3',
        type: 'calisthenic',
        thumnailSource: 'https://scontent-xsp1-2.xx.fbcdn.net/v/t1.6435-9/213133883_3021396661471781_4317623430528260898_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=825194&_nc_ohc=YfIyt7FtekYAX8nW9r3&_nc_ht=scontent-xsp1-2.xx&oh=f557ffb1e365eb1584e9fad89310070c&oe=615DB1CC',
        title: '𝐋𝐄̂𝐍 𝐑𝐎̂̉ 𝐓𝐑𝐀́𝐈 𝐓𝐀𝐘! ',
        content: '1 tip nhỏ khá hay về cách lựa chọn tay lên rổ! Tóm tắt lại: ➖Nếu đối phương ở bên vị trí bên Vai-Hông của tay Off-Hand, bạn lên rổ tay Outside cùng với hướng bạn đi(Tay trái bên cánh trái, tay phải bên cánh phải)➖Nếu đối phương chủ động cho bạn qua người và ra sau lưng bạn để bạn mất kiểm soát về cơ thể họ, bạn nên lên rổ tay Inside để bảo vệ trái banh tốt hơn(Tay phải ở cánh trái, tay trái ở cánh phải)',
        },  
    {
        id: 8,
        blogID: 'calisthenic-4',
        type: 'calisthenic',
        thumnailSource: 'https://scontent-xsp1-2.xx.fbcdn.net/v/t1.6435-9/213133883_3021396661471781_4317623430528260898_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=825194&_nc_ohc=YfIyt7FtekYAX8nW9r3&_nc_ht=scontent-xsp1-2.xx&oh=f557ffb1e365eb1584e9fad89310070c&oe=615DB1CC',
        title: '𝐋𝐄̂𝐍 𝐑𝐎̂̉ 𝐓𝐑𝐀́𝐈 𝐓𝐀𝐘! ',
        content: '1 tip nhỏ khá hay về cách lựa chọn tay lên rổ! Tóm tắt lại: ➖Nếu đối phương ở bên vị trí bên Vai-Hông của tay Off-Hand, bạn lên rổ tay Outside cùng với hướng bạn đi(Tay trái bên cánh trái, tay phải bên cánh phải)➖Nếu đối phương chủ động cho bạn qua người và ra sau lưng bạn để bạn mất kiểm soát về cơ thể họ, bạn nên lên rổ tay Inside để bảo vệ trái banh tốt hơn(Tay phải ở cánh trái, tay trái ở cánh phải)',
    }
]

const BlogList = (props) => {
    const blogList = blogs.map(blog => 
        <BlogItem
            key={blog.id}
            thumnailSource={blog.thumnailSource}
            title={blog.title}
            content={blog.content}
            blogType={blog.type}
            blogID={blog.blogID}
        />
    )


    return (
        <div className={styles['blog-list']}>
            <form className={styles['create-blog-form']} action={`/blog-category/${props.blogType}/create-new`}>
                <button type="submit" className="btn btn-primary">
                    Tạo blog
                </button>
            </form>
            <div className={styles['blog-category-container']}>
                {blogList}
            </div>
        </div>
    );
}

export default BlogList;