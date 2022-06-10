import { Routes, Route } from "react-router-dom";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

import LayoutDashboard from "./layouts/Dashboard";
import Product from "./pages/Product";
import AddProduct from "./pages/AddProduct";
import EditProduct from "./pages/EditProduct";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LayoutDashboard />}>
        <Route index element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/add-product" element={<AddProduct />} />
        <Route path="/edit-product/:id" element={<EditProduct />} />
      </Route>
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
    </Routes>
  );
}

export default App;
