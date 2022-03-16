import {Link} from 'react-router-dom'
const UserDetails = ({blogs}) =>{
   

 return (
  <>
    {blogs.map(blog =>(
        <div className="preview" key={blog.id}>
          <Link to={ `/cv/${blog.id}`}>
                
                  <h1>Name: {blog.userName}</h1>
                  <p>Age: {blog.age} years</p>
                  <p> Email: {blog.email}</p>
                
          </Link>
         
           </div>
      ))}</>
 )
}
export default UserDetails