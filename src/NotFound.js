import { Link } from "react-router-dom";
const NotFound = () => {

    return ( 
        <div className="notfound">
            <h1>Sorry </h1>
            <p>This page does not exist pls click on click to go to the previous page</p>
            <Link to='/'> Go back to home</Link>
        </div>
     );
}
 
export default NotFound;