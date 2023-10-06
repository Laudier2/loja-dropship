import { Grid, Container } from "@material-ui/core";
import { initMercadoPago } from "@mercadopago/sdk-react";
import { SpinnerCircular } from 'spinners-react';
import Payment from "../mercadopago/Payment";
import Checkout from "../mercadopago/Checkout";
import { useContext } from "react";
import { Context } from "../../Context/Provaider"

//initMercadoPago("APP_USR-4118abbb-7999-4da2-a450-8ca4714dd47c");
initMercadoPago("APP_USR-4118abbb-7999-4da2-a450-8ca4714dd47c");

const Card = () => {

  const { orderData, setIsLoading, setPreferenceId, isLoading } = useContext(Context)

  //console.log(orderData[0].id)

  ///const orderData2 = { quantity: "1", price: orderData[0].price, amount: 10, description: orderData[0].description }

  const handleClick = () => {
    setIsLoading(true);
    fetch("http://localhost:8080/create_preference", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(orderData),
    })
      .then((response) => {
        return response.json();
      })
      .then((preference) => {
        setPreferenceId(preference.id);
      })
      .catch((error) => {
        console.error(error);
      }).finally(() => {
        setIsLoading(false);
      })
  };

  const renderSpinner = () => {
    if (isLoading) {
      return (
        <div className="container col-sm-1">
          <SpinnerCircular сolor='#009EE3' />
        </div>
      )
    }
  }

  return (
    <div>
      <Container id="products">
        <Grid container spacing={4}>

          <Grid item xs={12} sm={12} md={12}>
            <Checkout onClick={handleClick} description />
            {renderSpinner()}
            <Payment />
          </Grid>

        </Grid>
      </Container>
    </div>
  );
};

export default Card;
