import { Link } from "react-router-dom";

const NotFound = () => {
    return (  
        <div className="not-found">
            <h2>sorry</h2>
            <p>that page cannot found</p>
            <Link to="/">back to homepage....</Link>
        </div>
    );
}
 
export default NotFound;