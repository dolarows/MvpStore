import "semantic-ui-css/semantic.min.css";
import React, { Component } from "react";
import { Route } from "react-router";
import { Layout } from "./components/Layout";
import Customers from "./components/CustomersComponents/Customers";
import Products from "./components/ProductsComponents/Products";
import Stores from "./components/StoresComponents/Stores";
import Sales from "./components/SalesComponent/Sales";

import "./custom.css";

export default class App extends Component {
  static displayName = App.name;

  render() {
    return (
      <Layout>
        <Route exact path="/" component={Customers} />
        <Route path="/products" component={Products} />
        <Route path="/stores" component={Stores} />
        <Route path="/sales" component={Sales} />
      </Layout>
    );
  }
}
