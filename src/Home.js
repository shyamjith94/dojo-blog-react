import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
    const [blogs, setBlogs] = useState(null);
    const [isPending, setIsPending] = useState(true);

    useEffect( () => {
        // fetch data ans set to blog array
        fetch('http://localhost:8000/blog').then(
            res => {
                return res.json()
            }
        ).then(data => {
            setBlogs(data)
            setIsPending(false)
        })
    }, []);


    return (
        <div className="home">
            {/* losding message */}
            { isPending && <div>Loading...</div> }
            {/* if blogs && evaluvate true then only <BlogList blogs={ blogs } title="All Blogs!" handleDelete = { handleDelete }/> execute */}
            { blogs && <BlogList blogs={ blogs } title="All Blogs!"/> }
            
        </div>
      );
}
 
export default Home;