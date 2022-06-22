import "./App.css";
import Header from "./components/layout/Header/Header";
import { BrowserRouter as Router, Route } from "react-router-dom";
import WebFont from "webfontloader";
import React from "react";
import Footer from "./components/layout/Footer/Footer";
import Home from "./components/Home/Home";
import Loader from "./components/layout/Loader/Loader";
import ProductDetails from "./components/Product/ProductDetails";
import Products from "./components/Product/Products.js";
import Search from "./components/Product/Search.js";
import LoginAndSignUp from "./components/User/LoginAndSignUp";
import store from "./store";
import { loadUser, updateProfile } from "./actions/userAction";
import UserOptions from "./components/layout/Header/UserOptions";
import { useSelector } from "react-redux";
import Profile from "./components/User/Profile";
import Routes from "./components/Route/Routes";
import UpdateProfile from "./components/User/UpdateProfile";
import UpdatePassword from "./components/User/UpdatePassword";
import ForgotPassword from "./components/User/ForgotPassword";
import ResetPassword from "./components/User/ResetPassword";
import Dashboard from "./components/admin/DashBoard";
import ProductList from "./components/admin/ProductList";
import NewProduct from "./components/admin/NewProduct";
import UpdateProduct from "./components/admin/UpdateProduct";
import UsersList from "./components/admin/UsersList";
import UpdateUser from "./components/admin/UpdateUser";
import About from "./components/layout/About/About";
import Contact from "./components/layout/Contact/Contact";

function App() {
  const { isAuthenticated, user } = useSelector((state) => state.user);

  React.useEffect(() => {
    WebFont.load({
      google: {
        families: ["Roboto", "Droid Sans", "Chilanka"],
      },
    });

    store.dispatch(loadUser());
  }, []);
  return (
    <Router>
      <Header />
      {isAuthenticated && <UserOptions user={user} />}
      <Route exact path="/" component={Home} />
      <Route exact path="/product/:id" component={ProductDetails} />
      <Route exact path="/products" component={Products} />
      <Route path="/products/:keyword" component={Products} />
      <Route exact path="/search" component={Search} />
      <Route exact path="/about" component={About} />
      <Route exact path="/contact" component={Contact} />
      <Routes exact path="/account" component={Profile} />
      <Routes exact path="/me/update" component={UpdateProfile} />
      <Routes exact path="/password/update" component={UpdatePassword} />
      <Route exact path="/password/forgot" component={ForgotPassword} />
      <Route exact path="/password/reset/:token" component={ResetPassword} />
      <Route exact path="/login" component={LoginAndSignUp} />
      <Routes
        isAdmin={true}
        exact
        path="/admin/dashboard"
        component={Dashboard}
      />
      <Routes
        isAdmin={true}
        exact
        path="/admin/products"
        component={ProductList}
      />
      <Routes
        isAdmin={true}
        exact
        path="/admin/product"
        component={NewProduct}
      />

      <Routes
        isAdmin={true}
        exact
        path="/admin/product/:id"
        component={UpdateProduct}
      />
      <Routes isAdmin={true} exact path="/admin/users" component={UsersList} />
      <Routes
        isAdmin={true}
        exact
        path="/admin/users/:id"
        component={UpdateUser}
      />

      <Footer />
    </Router>
  );
}

export default App;
