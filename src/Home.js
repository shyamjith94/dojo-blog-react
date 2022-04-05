import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
    const [blogs, setBlogs] = useState(null);



    useEffect( () => {
        // fetch data ans set to blog array
        fetch('http://localhost:8000/blog').then(
            res => {
                return res.json()
            }
        ).then(data => { setBlogs(data) })
    }, []);


    return (
        <div className="home">
             {/* if blogs && evaluvate true then only <BlogList blogs={ blogs } title="All Blogs!" handleDelete = { handleDelete }/> execute */}
            {blogs && <BlogList blogs={ blogs } title="All Blogs!"/>}
            
        </div>
      );
}
 
export default Home;