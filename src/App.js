import "./App.css";
import { Route, Routes } from "react-router-dom";

//pages
import Home from ".//pages/home/Home";
import Menu from ".//pages/menu/Menu";
import Cart from ".//pages/cart/Cart";
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";
import PrivateRoutes from "./PrivateRoutes";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<PrivateRoutes />}>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/menu/:id" element={<h1>Menu Item</h1>} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<h1>Not Found 404</h1>} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;
