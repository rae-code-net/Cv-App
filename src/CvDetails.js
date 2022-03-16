import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";
import useFetch from "./useFetch"

const CvDetails = () =>{
    const {id} = useParams()
    const {data:cv,error,isLoading} = useFetch("http://localhost:9000/blogs/" + id)
    const history = useHistory()
    const DeleteCV = () =>{
        fetch("http://localhost:9000/blogs/" + cv.id,{
            
            method: "DELETE"
        })
        .then(()=>{
            alert("User has deleted blog")
            history.push('/')
        })
    }
    return (
        <div className="cvDetails">
            <h1>Cv Details : {id}</h1>
            {isLoading && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {cv && (
                <div>
                   <img src={cv.image} alt="" />
                    <h1>Name: {cv.userName}</h1>
          <p>Age: {cv.age}</p>
          <p>Address: {cv.address}</p>
          <p>Date of : {cv.dateOfBirth}</p>
          <p> Email: {cv.email}</p>
          <p>Mobile number {cv.number}</p>
          <p> Languages : {cv.language}</p>
            <p> Mother : {cv.mother}</p>
            <p>Father : {cv.father}</p>
          <p>Gender: {cv.gender}</p>
          <p> Qualification : {cv.qualification}</p>
          <p> Description: {cv.description}</p>
          <button onClick={DeleteCV}>Delete</button>
                </div>
            )}
        </div>
    )
}
export default CvDetails;