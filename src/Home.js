
import React from "react";
import UserDetails from "./UserDetails";
import useFetch from "./useFetch";

const Home = () => {
const url = "http://localhost:9000/blogs"
const {data:blogs,isLoading,error} = useFetch("http://localhost:9000/blogs")
  
 return ( 
 
        <div className="home">
          {error &&<div>{error}</div>}
    {isLoading && <div>Loading...</div>}
    {blogs &&<UserDetails blogs={blogs} />}
        </div>
        
     );
}
 
export default Home;