
import axios from "axios"


const baseUrl="http://localhost:8083/product-rest"
class ProductService{



    fetchAllProducts()
      {
        return axios.get(baseUrl+'/fetch');
      }

    addProduct(product)
      {
        return axios.post(baseUrl+'/add',product);
    
      }

    deleteProduct(data)
      {
        return axios.delete(baseUrl+'/delete/'+data.toString());
      }
    
    getProductById(data)
      {
        return axios.get(baseUrl+'/fetch/'+data.toString());
      } 
    
    updateProduct(product)
      {
      return axios.put(baseUrl+'/update',product);
      }
    

}

export default new ProductService();