import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('shyam');
    const [isPending, setIsPending] = useState(false);

    // redirect page after submit
    const history = useHistory();


    
    const handleSubmit = (e) =>{
        e.preventDefault();
        const url = 'http://localhost:8000/blogs';
        const blog = { title, body, author };

        setIsPending(true);
        
        fetch(url, {
            method: 'POST',
            headers: { "content-type": "application/json"},
            body: JSON.stringify(blog)
        }).then( () => {
            console.log("done");
            setIsPending(false);
            // go back homepage
            history.push('/');
        })
    }


    return (
        <div className="create">
            <h2>Add new blog</h2>
            <form onSubmit={ handleSubmit }>
                <label>Blog title</label>
                <input
                    type="text"
                    required
                    value={ title }
                    onChange={ (e)=> setTitle(e.target.value) }
                />
                <label>Blog body</label>
               <textarea
               required
               value={ body }
               onChange={ (e) => setBody(e.target.value) }
               ></textarea>
               <label>Blog author</label>
                <select
                value={ author }
                onChange={ (e) => setAuthor(e.target.value) }
                >
                    <option value="mario">mario</option>
                    <option value="shyam">shyam</option>
                    <option value="kiran">kiran</option>
                </select>
                { !isPending && <button>submit blog</button>}
                { isPending && <button disabled>adding blog..</button>}
            </form>
        </div>
    );
}

export default Create;