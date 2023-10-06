import React, { useContext, useState } from "react";
import classnames from 'classnames'
import { Wallet } from "@mercadopago/sdk-react";
import { Context } from "../../Context/Provaider";

const Payment = () => {
  const { preferenceId } = useContext(Context);
  const [isReady, setIsReady] = useState(false);
  const paymentClass = classnames('payment-form dark', {
    'payment-form--hidden': !isReady,
  });

  const handleOnReady = () => {
    setIsReady(true);
  }

  const renderCheckoutButton = (preferenceId) => {
    if (!preferenceId) return null;

    return (
      <Wallet
        initialization={{ preferenceId: preferenceId }}
        onReady={handleOnReady} />
    )
  }

  return (
    <div className={paymentClass}>
      <div className="container_payment">
        <div className="block-heading">
          <div className="payment-details">
            <div className="form-group col-sm-12">
              {renderCheckoutButton(preferenceId)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
