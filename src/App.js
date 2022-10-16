import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import OrderSummary from "./components/OrderSummary";
import NotFound from "./components/NotFound";
import Products from "./components/Products";
import FeaturedProducts from "./components/FeaturedProducts";
import NewProducts from "./components/NewProducts";
import Users from "./components/Users";
import UserDetails from "./components/UserDetails";
import Admin from "./components/Admin";
import Profile from "./components/Profile";
import Login from "./components/Login";
import RequireAuth from "./components/RequireAuth";
import { AuthProvider } from "./components/auth";
const LazyAbout = React.lazy(() => import("./components/About"));

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="about"
            element={
              <React.Suspense fallback="Loading...">
                <LazyAbout />
              </React.Suspense>
            }
          />
          <Route path="order-summary" element={<OrderSummary />} />
          <Route path="order-summary" element={<Profile />} />
          <Route path="products" element={<Products />}>
            <Route index element={<FeaturedProducts />} />
            <Route path="featured" element={<FeaturedProducts />} />
            <Route path="new" element={<NewProducts />} />
          </Route>
          <Route path="users" element={<Users />}>
            <Route path=":userId" element={<UserDetails />} />
            <Route path="admin" element={<Admin />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route
            path="/profile"
            element={
              <RequireAuth>
                <Profile />
              </RequireAuth>
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
