import React,{useEffect, useState} from "react";
import { useParams } from "react-router-dom";

import UserService from "../../../service/UserService";


const Account = () => {

 useEffect(() => {

    getUser();
  },[]);
    const { id } = useParams();
  
    const getUser = async () => {

      try{
      const response = await UserService.fetchById(id);
      setUser(response.data);
      setPassword(response.data.password)
      }
      catch(error)
      {
        window.alert("error")
      }
    };
  
    const [editSwitch,setEditSwitch]=useState(false)
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
  
    const [user, setUser] = useState({
      id: 0,
      username: '',
      password: '',
      firstname: '',
      lastname: '',
      phone: '',
      role: '',
    });
  
   
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setUser((prevUser) => ({
        ...prevUser,
        [name]: value,
      }));
    };
  
    const handlePasswordChange = (e) => {
      setPassword(e.target.value);
    };
  
    const handleSubmit = (e) => {
     if(window.confirm("Are you sure to update the data?"))
     {
      setEditSwitch(false)
      e.preventDefault();
  
      // Perform JavaScript validation
      if (user.username === '') {
        setMessage('Please enter your email address');
      } else if (!isValidEmail(user.username)) {
        setMessage('Please enter a valid email address');
      } else if (user.password === '') {
        setMessage('Please enter your password');
      } else if (user.password.length < 6) {
        setMessage('Password must be at least 6 characters long');
      }
     
      else {
        // Validation passed, perform update logic here
        setMessage('');
        // Continue with your update logic or redirect to a different page
        user.password=password

  UserService.update(user).then(
res=>{
  sessionStorage.setItem('log',JSON.stringify(res.data))
}
  ).catch(
error=>{
  window.alert(error)
}
  )
      }
      }
    };
  
    const isValidEmail = (email) => {
      // Simple email validation using regex
      const emailRegex = /^\S+@\S+\.\S+$/;
      return emailRegex.test(email);
    };
  
    return (
      <div style={{height:'100%'}}>
        <div className="container" style={{height:'90vh'}}>
          <form onSubmit={handleSubmit} style={{maxWidth:'800px',height:'500px'}}>
            <div>
              <label>First Name:</label>
              <input
                className="form-control"
                type="text"
                name="firstname"
                value={user.firstname}
                onChange={handleChange}
                disabled={!editSwitch}
              />
            </div>
            <div>
              <label>Last Name:</label>
              <input
                className="form-control"
                type="text"
                name="lastname"
                value={user.lastname}
                onChange={handleChange}
                disabled={!editSwitch}

              />
            </div>
            <div>
              <label>Username:</label>
              <input
                className="form-control"
                type="email"
                name="username"
                value={user.username}
                disabled={true}

              />
            </div>
           
            <div>
              <label>Password:</label>
              <input
                className="form-control"
                type="password"
                value={password}
                onChange={handlePasswordChange}
                disabled={!editSwitch}

              />
            </div>
            <div style={{ marginBottom: '20px' }}>
              <label>Phone:</label>
              <input
                className="form-control"
                type="text"
                name="phone"
                value={user.phone}
                onChange={handleChange}
                disabled={!editSwitch}

              />
            </div>
            <button className="form-control btn btn-warning mb-3" type="button" onClick={()=>{setEditSwitch(true)}} disabled={editSwitch}>Edit</button>
            
            <button className="form-control btn btn-info" type="submit" disabled={!editSwitch} >
              Update
            </button>
            
  
            {message && <p className="message">{message}</p>}
          </form>

        </div>
      </div>
    );
  };
  
  export default Account;
  