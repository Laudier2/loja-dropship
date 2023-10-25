import React from "react";
import { ToastContainer } from "react-toastify";
import { ErrorBoundary } from "react-error-boundary";
import { Route, Switch } from "react-router-dom";
import Products from "./components/products/Products";
import Desc2 from "./components/descricao/descricao-produto";
import Cart from "./components/cart";
import Header from "./components/header";
import CartFinalize from "./components/cart/cartFinalize";

function App() {
  //const id = localStorage.getItem("id");

  //const prodFilter = prod.filter((req) => req.id === id);

  function ErroHandler() {
    return <h4>Houve um erro</h4>;
  }

  return (
    <>
      <Header />
      <ToastContainer />
      <div className="page-container">
        <div className="conatiner-wrap">
          <ErrorBoundary
            FallbackComponent={ErroHandler}
            onError={(arg1, arg2) => {
              console.log("arg1", arg1, "arg2", arg2);
            }}
          ></ErrorBoundary>
          <Switch>
            <Route exact path="/cart" component={Cart} />
            <Route exact path="/cartFinali" component={CartFinalize} />
            <Route exact path="/" component={Products} />
            <Route exact path="/desc" component={Desc2} />
          </Switch>

          <ErrorBoundary />
        </div>
      </div>
    </>
  );
}

export default App;
