import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
    const [blogs, setBlogs] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [errors, setErrors] = useState(null)

    useEffect(() => {
        // fetch data ans set to blog array
        fetch('http://localhost:8000/blogs').then(
            res => {
                if (!res.ok) {
                    throw Error('could not fetch data from resource')
                }
                return res.json()
            }
        ).then(data => {
            setBlogs(data);
            setIsPending(false);
            setErrors(null);
        }).catch(err => {
            setErrors(err.message);
            setIsPending(false);
        })
    }, []);


    return (
        <div className="home">
            {/* losding message */}
            {isPending && <div>Loading...</div>}
            {/* display error  */}
            {errors && <div>{errors}</div>}
            {/* if blogs && evaluvate true then only <BlogList blogs={ blogs } title="All Blogs!" handleDelete = { handleDelete }/> execute */}
            {blogs && <BlogList blogs={blogs} title="All Blogs!" />}

        </div>
    );
}

export default Home;