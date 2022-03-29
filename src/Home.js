import { useState } from "react";

const Home = () => {
    const [blogs, setBlogs] = useState([
        {title: "my new website 1", body: "welcome 1", author: "ramas", id:1},
        {title: "my new website 2", body: "welcome 2", author: "kiran", id:2},
        {title: "my new website 3", body: "welcome 3", author: "krish", id:3},
    ]);

    return (
        <div className="home">
            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                <h2>{ blog.title }</h2>
                <p>written by { blog.author }</p>
                <p>body is { blog.body }</p>
                </div>
            ))}
        </div>
      );
}
 
export default Home;