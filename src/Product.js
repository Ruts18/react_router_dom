import { useLocation, useParams } from "react-router-dom";
const Product = () => { 
  const Location =useLocation();
  console.log(Location);
  
  const { id } = useParams();
  return (
    <div>
      <h2>Product Details</h2>
      <p>Product ID: {id}</p>
            {/* Render product details based on the productId */}
    </div>
  );
};
  export default Product;
  //to acess the URL parameters
  //const { id } = useParams();: Uses the useParams hook to extract the id parameter from the URL.
  //<p>Product ID: {id}</p>: Renders the id parameter extracted from the URL.
