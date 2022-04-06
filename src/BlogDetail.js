import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import useFetch from "./userfetch";

const BlogDetails = () => {
    const { id } = useParams();
    const url = 'http://localhost:8000/blogs/' + id;
    const { data: blog, errors, isPending } = useFetch(url);

    const history = useHistory();

    const handleClick = () =>{
        fetch(url, {
            method: "DELETE",
        }).then( (e) => {
            history.push("/")
        } )
    }

    return (
        <div className="blog-details">
            {isPending && <div>Loading...</div> }
            {errors && <div>{ errors }</div>}
            {blog && (
                <article>
                    <h2>{ blog.title }</h2>
                    <p>written by { blog.author }</p>
                    <div>{ blog.body }</div>
                    <button onClick={ handleClick }>Delete</button>
                </article>
            )}
        </div>
      );
}
 
export default BlogDetails;