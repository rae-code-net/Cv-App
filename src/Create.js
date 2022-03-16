import { useState } from "react";
import { useHistory } from "react-router-dom";
const Create = () =>{
    const [userName,setName] = useState("");
    const [email, setemail] = useState("");
    const [address, setaddress] = useState("");
    const [dateOfBirth, setdateOfBirth] = useState("");
    const [age, setage] = useState("");
    const [description, setdescription] = useState("");
    const [gender, setgender] = useState("");
    const [image,setimage] = useState("")
    const [language,setLang] = useState("")
    const [qualification, setqualification] = useState("");
    const [father, setfather] = useState("");
    const [mother, setmother] = useState("");
    const [school, setschool] = useState("");
    const [mobile, setmobile] = useState("");
    const [isPending,setPending] = useState(false)
    const histroy = useHistory()
    const handleSubmit = (e) =>{
        e.preventDefault()
        setPending(true)
        const infomation = {userName,language,qualification,email,address,dateOfBirth,age,description,gender,image,father,mother,school}
    
        fetch("http://localhost:9000/blogs",{
        method:"POST",
        headers : {"Content-Type":"application/json"},
        body : JSON.stringify(infomation)
        })
        .then(() =>{
            setPending(false)
            alert("User Has Successfully Created a CV")
            histroy.push("/")
        }
       )}
    const onImageChange = (event) => {
        event.preventDefault()
        if (event.target.files && event.target.files[0]) {
          setimage(URL.createObjectURL(event.target.files[0]));
        }
       }
    return (
        <div className="create">
            <h1>Add a New Cv</h1>
         
            <form onSubmit={handleSubmit}>
           
            <br />
            <input type="file" onChange={onImageChange} className="filetype" />

                <br />
                <label> <h3>Full Name</h3></label>
                
                <input type="text"
                required
                value={userName}
                onChange ={e => setName(e.target.value)}
                />
                <br />
                 <label><h3>Email</h3></label>
                 
                <input type="email"
                required
                value={email}
                onChange ={e => setemail(e.target.value)}
                />
                <br />
                <label><h3>Contact</h3></label>
                
                <input type="text"
                required
                value={mobile}
                onChange ={e => setmobile(e.target.value)}
                />
                <br />
                <br />
                 <label><h3>Address</h3></label>
               
                <input type="text"
                required
                value={address}
                onChange ={e => setaddress(e.target.value)}
                />
                <br />
                 <label><h3>Date of Birth</h3></label>
                 
                <input type="date"
                value={dateOfBirth}
                required
                onChange ={e => setdateOfBirth(e.target.value)}
                />
              
                  <label><h3>Age</h3></label>
                  
                <input type="number"
                required
                value={age}
                onChange ={e => setage(e.target.value)}
                />
                <br />
                   <br />
                 <label> <h3>Name of Father</h3></label>
            
                <input type="text"
                required
                value={father}
                onChange ={e => setfather(e.target.value)}
                />
                <br />
                   <br />
                 <label><h3>Name of Mother</h3></label>
                
                                <input type="text"
                required
                value={mother}
                onChange ={e => setmother(e.target.value)}
                />
                <br />
                <br />
                 <label><h3>Language</h3></label>
                
                <input type="text"
                required
                value={language}
                onChange ={e => setLang(e.target.value)}
                />
                   <br />
                 <label><h3>Name of School Attended</h3></label>
                
                <input type="text"
                required
                value={school}
                onChange ={e => setschool(e.target.value)}
                />
              
                 <br />
                 <label><h3>Qualification</h3></label>
                 
                <input type="text"
                required
                value={qualification}
                onChange ={e => setqualification(e.target.value)}
                />
                <br />
                <br />
                 <label> <h3>Gender</h3></label>
                 
                <select 
                required
                value={gender}
                onChange ={e => setgender(e.target.value)}>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>

                </select>
                
                <br />
                <label > <h3>Description</h3> </label>
            
                <textarea
                required
                value={description}
                onChange ={e => setdescription(e.target.value)}
                ></textarea>
                <br />
                
                <br />
             {!isPending && <button>Add CV</button>}
             {isPending && <button disabled>Adding Cv</button>}
            </form>
        </div>
    )
}
export default Create;