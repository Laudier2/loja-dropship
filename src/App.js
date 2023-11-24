import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { ToastContainer } from "react-toastify";
import { ErrorBoundary } from "react-error-boundary";
import Products from "./components/products/Products";
import Desc from "./components/descricao/descricao-produto";
import Cart from "./components/cart";
import Header from "./components/header";
import CartFinalize from "./components/cart/cartFinalize";
import Footer from "./components/footer/footer";
import Politicas from "./components/politica/Politicas";
import ReactGA from "react-ga" 

const TRACKING_ID = "G-1GXW3W538Z" 

ReactGA.initialize(TRACKING_ID)

function App() {
  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Products />,
    },

    {
      path: "/cart",
      element: <Cart />,
    },

    {
      path: "/desc",
      element: <Desc />,
    },

    {
      path: "/cartFinali",
      element: <CartFinalize />,
    },
    {
      path: "/politica",
      element: <Politicas />,
    },
  ]);  

  function ErroHandler() {
    return <h4>Houve um erro</h4>;
  }

  return (
    <>
      <Header />
      <RouterProvider router={router}>
        <ToastContainer />
        <div className="page-container">
          <div className="conatiner-wrap">
            <ErrorBoundary
              FallbackComponent={ErroHandler}
              onError={(arg1, arg2) => {
                console.log("arg1", arg1, "arg2", arg2);
              }}
              >            
            </ErrorBoundary>
            <ErrorBoundary />
          </div>
        </div>
      </RouterProvider>
      <Footer />
    </>
  );
}

export default App;
