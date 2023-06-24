import axios from "axios"

const baseUrl='http://localhost:8083/address-rest';

class AddressService
{
    addAddress(data,id)
      {
        return axios.post(baseUrl+'/add/'+id.toString(),data)
      }
    
      getByUser(id)
      {
        return axios.get(baseUrl+'/fetch/'+id.toString())
      }
      deleteAddress(data)
      {
        return axios.delete(baseUrl+'/delete/'+data.toString())
      }
    
    updateAdress(data)
      {
        return axios.put(baseUrl+'/update',data)
      }
 
}


export default new AddressService();