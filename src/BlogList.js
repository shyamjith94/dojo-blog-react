
const BlogList = (props) => {
    const blogs = props.blogs;
    const title = props.title
    const handleDelete = props.handleDelete
    
    return (
        <div className="blog-list">
            <h2>{ title }</h2>
            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <h2>{blog.title}</h2>
                    <p>written by {blog.author}</p>
                    <p>body is {blog.body}</p>
                    <button onClick={ ()=> handleDelete(blog.id) }>delete blog</button>
                </div>
            ))}
        </div>
    );
}

export default BlogList;