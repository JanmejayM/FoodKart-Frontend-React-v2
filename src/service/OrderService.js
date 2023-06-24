import axios from "axios"

const baseUrl='http://localhost:8083/order-rest';

class OrderService
{


    getByUserId(userid)
    {
      return axios.get(baseUrl+'/getUserOrder/'+userid.toString())
    }

    getAllOrders()
    {
      return axios.get(baseUrl+'/getall')
    }
    addToOrder(address,userId)
    {
      return axios.post(baseUrl+`/addOrder/${userId}?address=${address}`,null)
    }
  
  
    getByOrderId(id)
    {
      return axios.get(baseUrl+'/get/'+id.toString())
    }
  
    getRevenue(date)
    {
      return axios.get(baseUrl+'/getdailyRevenue?date='+date)
  
    }
    getRevenueMonthy(date1,date2)
    {
      return axios.get(baseUrl+`/getRevenueMonthly?fromdate=${date1}&todate=${date2}`)
  
    }
 
}


export default new OrderService();