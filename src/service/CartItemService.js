import axios from "axios"

const baseUrl='http://localhost:8083/cartitem-rest';

class CartItemService
{

    addProductToCartItem(product,userid)
    {
      return axios.post(baseUrl+"/addProduct/"+userid.toString(),product);
    }
  
    
  
    updateQty(cartitem)
    {
      return axios.put(baseUrl+"/updateQty",cartitem);
    }
  
    deleteItem(cartitem)
    {
      return axios.post(baseUrl+"/delete",cartitem);
  
    }
 
}

//const addressInstance = new AddressService();

export default new CartItemService();