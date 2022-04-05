import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
    const [blogs, setBlogs] = useState([
        {title: "my new website 1", body: "welcome 1", author: "ramas", id:1},
        {title: "my new website 2", body: "welcome 2", author: "kiran", id:2},
        {title: "my new website 3", body: "welcome 3", author: "krish", id:3},
    ]);

    const [name, setName] = useState('ramas')

    //delete blog
    const handleDelete = (id) =>{
        const newBlog = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlog);
    }

    useEffect( () => {
        console.log("use effecrt")
        console.log(name)
    }, [name]);


    return (
        <div className="home">
            <BlogList blogs={ blogs } title="All Blogs!" handleDelete = { handleDelete }/>
            <BlogList blogs={ blogs.filter((blog)=> blog.author === 'kiran') } title="kiran blogs!" handleDelete={ handleDelete }/>
            <button onClick={ () => setName('kiran') }> change name </button>
            <p> {name} </p>
        </div>
      );
}
 
export default Home;