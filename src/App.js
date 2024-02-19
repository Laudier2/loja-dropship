import React, { useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.min.css'
import { ErrorBoundary } from "react-error-boundary";
//import { Products } from "./components/products/Products";
import Desc from "./components/descricao/descricao-produto";
import Cart from "./components/cart";
import CartFinalize from "./components/cart/cartFinalize";
import Politicas from "./components/politica/Politicas";
import ReactGA from "react-ga" 
import Compra from "./components/compra/Compra2";
import Cadastro from "./components/Cadastro/Cadastro";
import { Vestido } from "./components/categorys/Vestido";
import { Calcado } from "./components/categorys/Calcado";
import { Relogio } from "./components/categorys/Relogio";
import { AudioVideo } from "./components/categorys/AudioVideo";
import { Rintima } from "./components/categorys/Rintima";
import { Maquiagem } from "./components/categorys/Maquiagem";
import { Conjuntof } from "./components/categorys/Conjuntof";
import { Calcaf } from "./components/categorys/Calcaf";
import { Shortm } from "./components/categorys/Shortm";
import { Shortf } from "./components/categorys/Shortf";
import { Calcam } from "./components/categorys/Calcam";
import { Camisetaf } from "./components/categorys/Camisetaf";
import { Camisetam } from "./components/categorys/Camisetam";
import { Informatica } from "./components/categorys/Informatica";
import { Ferramentas } from "./components/categorys/Ferramentas"
import { Estetica } from "./components/categorys/Estetica"
import { PoliticasDevolucaoTroca } from "./components/politicaTrocaDevolucao/politicaTrocaDevolucao";
import { Meuproduto } from "./components/Meuproduto";
import { Products } from "./components/products/Products"
import { Bone } from "./components/categorys/Bone";

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
      path: "/politicatrocadevolucao",
      element: <PoliticasDevolucaoTroca />,
    },
    {
      path: "/compra",
      element: <Compra />,
    },
    {
      path: "/admin",
      element: <Cadastro />,
    },
    {
      path: "/vestido",
      element: <Vestido />,
    }, {
      path: "/calcados",
      element: <Calcado />,
    },
    {
      path: "/relogio",
      element: <Relogio />,
    },
    {
      path: "/audiovideo",
      element: <AudioVideo />,
    },
    {
      path: "/rintima",
      element: <Rintima />,
    },
    {
      path: "/maquiagem",
      element: <Maquiagem />,
    },
    {
      path: "/conjuntof",
      element: <Conjuntof />,
    },
    {
      path: "/calcaf",
      element: <Calcaf />,
    },
    {
      path: "/shortm",
      element: <Shortm />,
    },
    {
      path: "/shortf",
      element: <Shortf />,
    },
    {
      path: "/calcam",
      element: <Calcam />,
    },
    {
      path: "/camisetaf",
      element: <Camisetaf />,
    },{
      path: "/camisetam",
      element: <Camisetam />,
    },
    {
      path: "/informatica",
      element: <Informatica />,
    },
    {
      path: "/ferramentas",
      element: <Ferramentas />,
    },
    {
      path: "/istetica",
      element: <Estetica />,
    },
    {
      path: "/meuproduto",
      element: <Meuproduto />,
    },
    {
      path: "/bone",
      element: <Bone />,
    }

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
