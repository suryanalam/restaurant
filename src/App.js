import "./App.css";
import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import PrivateRoutes from "./PrivateRoutes";
import FallbackUI from "./components/fallback UI/FallbackUI";

//pages
const Home = React.lazy(() => import("./pages/home/Home"));
const Menu = React.lazy(() => import("./pages/menu/Menu"));
const Cart = React.lazy(() => import("./pages/cart/Cart"));
const Login = React.lazy(() => import("./pages/auth/Login"));
const Signup = React.lazy(() => import("./pages/auth/Signup"));

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<PrivateRoutes />}>
          <Route
            exact
            path="/"
            element={
              <Suspense fallback={<FallbackUI />}>
                <Home />
              </Suspense>
            }
          />
          <Route
            path="/menu"
            element={
              <Suspense fallback={<FallbackUI />}>
                <Menu />
              </Suspense>
            }
          />
          <Route
            path="/cart"
            element={
              <Suspense fallback={<FallbackUI />}>
                <Cart />
              </Suspense>
            }
          />
          <Route path="*" element={<h1>Not Found 404</h1>} />
        </Route>
        <Route
          path="/login"
          element={
            <Suspense fallback={<FallbackUI />}>
              <Login />
            </Suspense>
          }
        />
        <Route
          path="/signup"
          element={
            <Suspense fallback={<FallbackUI />}>
              <Signup />
            </Suspense>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
