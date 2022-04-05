import { useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
    const [blogs, setBlogs] = useState([
        {title: "my new website 1", body: "welcome 1", author: "ramas", id:1},
        {title: "my new website 2", body: "welcome 2", author: "kiran", id:2},
        {title: "my new website 3", body: "welcome 3", author: "krish", id:3},
    ]);

    return (
        <div className="home">
            <BlogList blogs={ blogs } title="All Blogs!"/>
            <BlogList blogs={ blogs.filter((blog)=> blog.author === 'kiran') } title="kiran blogs!"/>
        </div>
      );
}
 
export default Home;