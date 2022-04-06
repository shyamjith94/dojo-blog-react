import { useParams } from "react-router-dom";
import useFetch from "./userfetch";

const BlogDetails = () => {
    const { id } = useParams()
    const url = 'http://localhost:8000/blogs/' + id;
    const { data: blog, errors, isPending } = useFetch(url)

    return (
        <div className="blog-details">
            {isPending && <div>Loading...</div> }
            {errors && <div>{ errors }</div>}
            {blog && (
                <article>
                    <h2>{ blog.title }</h2>
                    <p>written by { blog.author }</p>
                    <div>{ blog.body }</div>
                </article>
            )}
        </div>
      );
}
 
export default BlogDetails;