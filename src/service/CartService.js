import axios from "axios"

const baseUrl='http://localhost:8083/cart-rest';

class CartService
{


    getById(userid)
    {
      return axios.get(baseUrl+'/getCart/'+userid.toString())
    }
    delete(cartitem)
    {
      return axios.post(baseUrl+'/deleteCartItem',cartitem)
    }
    addCart(userid)
    {
      return axios.get(baseUrl+'/addCart/'+userid.toString())
    }
 
}


export default new CartService();