import React, { useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.min.css'
import { ErrorBoundary } from "react-error-boundary";
import Products from "./components/products/Products";
import Desc from "./components/descricao/descricao-produto";
import Cart from "./components/cart";
import CartFinalize from "./components/cart/cartFinalize";
import Footer from "./components/footer/footer";
import Politicas from "./components/politica/Politicas";
import ReactGA from "react-ga" 
import Compra from "./components/compra/Compra";
import { Bone } from "./components/products/Bone";
import { Camiseta } from "./components/products/Camiseta";
import { Short } from "./components/products/Short";
import { Calca } from "./components/products/Calca";
import { Moleton } from "./components/products/Moleton";
import { Sandalia } from "./components/products/Sandalia";
import { Tenis } from "./components/products/Tenis";
import Cadastro from "./components/Cadastro/Cadastro";

const TRACKING_ID = "G-YJVYCLYTD3" 

ReactGA.initialize(TRACKING_ID)

function App() {

  useEffect(() => {
    window.scroll({
      top: 100,
    });

  },[])

  useEffect(() => {
    ReactGA.pageview(window.location.pathname);
  }, []);
  
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
    {
      path: "/bone",
      element: <Bone />,
    },
    {
      path: "/camiseta",
      element: <Camiseta />,
    },
    {
      path: "/short",
      element: <Short />,
    },
    {
      path: "/calca",
      element: <Calca />,
    },
    {
      path: "/moleton",
      element: <Moleton />,
    },
    {
      path: "/sandalia",
      element: <Sandalia />,
    },
    {
      path: "/tenis",
      element: <Tenis />,
    },
    {
      path: "/compra",
      element: <Compra />,
    },
    {
      path: "/admin",
      element: <Cadastro />,
    },
  ]);  

  function ErroHandler() {
    return <h4>Houve um erro</h4>;
  }

  return (
    <>
      <ToastContainer autoClose={3000} />
      <RouterProvider router={router}>
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
    </>
  );
}

export default App;
