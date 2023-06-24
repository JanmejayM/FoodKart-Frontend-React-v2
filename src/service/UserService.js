
import axios from "axios"

const baseUrl='http://localhost:8083/login-rest';

class UserService
{
    signup=(data)=>
    {
     
      return axios.post(baseUrl+'/signup',data);
    }
  
    login=(data)=>{
      return axios.post(baseUrl+'/login',data);
  
    }


    fetchById=(data)=>{
      return axios.get(baseUrl+'/fetch/'+data);
  
    }


    update=(data)=>{
      return axios.put(baseUrl+'/update',data);
  
    }
 
 
}


export default new UserService();