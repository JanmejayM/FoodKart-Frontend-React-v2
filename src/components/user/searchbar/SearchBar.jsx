import { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import './SearchBar.css'
import ProductService from "../../../service/ProductService";


const SearchBar = ({ setProduct }) => {
  const [input, setInput] = useState("");

  const fetchAllProductData = async (value) => {

    try{
    const response = await ProductService.fetchAllProducts();
    const products = response.data;
  
    if (value) {
      const filteredProducts = products.filter((product) =>
        product.name.toLowerCase().includes(value.toLowerCase())
      );
  
      console.log(filteredProducts);
      setProduct(filteredProducts);
    } else {
      console.log(products);
      setProduct(products)
    }

  }
catch(error)
{
  window.alert("error")
}
    


   }

   useEffect(()=>{
    fetchAllProductData("")
   },[])



  const handleChange = (value) => {
    setInput(value);
    fetchAllProductData(value)
  };

  return (
    <div className="input-wrapper">
      <FaSearch id="search-icon" />
      <input
        placeholder="Search your favourite food"
        value={input}
        onChange={(e) => handleChange(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;