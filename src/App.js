import './App.css';
import Home from "./Home";
import Products from "./Products";
import Product from './Product';
import Error from './Error';
import { Routes, Route, NavLink } from "react-router-dom"
const App = () => {
  return (<>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/products" Component={Products} />
        <Route exact path="/products/:id" Component={Product} />
        <Route exact path="/*" element={<Error/>} />
      </Routes>
      <nav>
        <div>
          <h1>Product Catalog</h1>
        </div>
        {/* <NavLink exact to="/" activeClassName="active">Home</NavLink><br></br> */}
        <NavLink to="/products" activeClassName="active">Products</NavLink>
      </nav>
    </>
  );
};
export default App;
// Routing configuration to app, Specifies the route for the products page and renders the component when the URL matches exact.
////to attribute of NavLink specifies the URL path to navigate to when the link is clicked.
//NavLink component creates a link that can be clicked to navigate to a specific route.
//Overall, this code sets up a basic React application with routing using React Router. It defines routes for the home page, products page, and product details page. The navigation links allow users to navigate between these pages, and the components render different content based on the current route and URL parameters.
