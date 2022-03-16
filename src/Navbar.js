import {Link} from 'react-router-dom'
const Navbar = () => {
    return ( 
        <div className="navbar">
            <h1>Cv Creator</h1>
            <div className="links">
            <Link to="/create">Create Cv</Link>
            <Link to ="/">View Cv</Link>
            </div>
        </div>
     );
}
 
export default Navbar;