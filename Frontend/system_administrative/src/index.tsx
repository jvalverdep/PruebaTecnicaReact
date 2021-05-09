import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import reportWebVitals from './reportWebVitals';
import { ListProduct } from './pages/Product/ListProduct'
import { Navarbar } from './components/NavBar/Navarbar'
import { Listbrands } from './pages/Brands/Listbrands'
import { BrandsForm } from './pages/Brands/BrandsForm'
import { ProductForm } from './pages/Product/ProductsForm'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LoginForm from './pages/Login/LoginForm';
import { BrandsItem } from './pages/Brands/BrandsItem'
import { ProductItem } from './pages/Product/ProductItem'
import { Home } from './pages/Home/Home'
import { Error } from './pages/Error/Error'
ReactDOM.render(

  <>
    <BrowserRouter>
      <Navarbar />
      <Switch>
        <Route exact path="/login" component={LoginForm}></Route>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/products" component={ListProduct}></Route>
        <Route exact path="/products/new" component={ProductForm}></Route>
        <Route exact path="/products/:id/edit" component={ProductForm}></Route>
        <Route exact path="/products/:id/detail" component={ProductItem}></Route>
        <Route exact path="/brands" component={Listbrands}></Route>
        <Route exact path="/brands/new" component={BrandsForm}></Route>
        <Route exact path="/brands/:id/edit" component={BrandsForm}></Route>
        <Route exact path="/brands/:id/detail" component={BrandsItem}></Route>
        <Route exact path="/brands" component={Listbrands}></Route>
        <Route path="*"> <Error /> </Route>
      </Switch>
      <ToastContainer />
    </BrowserRouter>
  </>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
