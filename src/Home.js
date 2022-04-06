import BlogList from "./BlogList";
import useFetch from "./userfetch";

const Home = () => {
    const url = 'http://localhost:8000/blogs';
    const {data: blogs, isPending, errors} = useFetch(url)

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