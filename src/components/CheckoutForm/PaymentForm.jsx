import { Button, Divider, Typography, } from '@material-ui/core'
import { CardElement, Elements, ElementsConsumer } from '@stripe/react-stripe-js'
import React from 'react'
import Review from '../CheckoutForm/Reiview'
import {loadStripe} from '@stripe/stripe-js'

const stripePromise= loadStripe('pk_test_51JhunASD1vYUye2fj1o01Twx9JSsdQzWs8xd3wqZivmVowvzNKUDeWhRLOxcUm68a2DwSJ14nbHaJiZ2xTKz6sBC00kIeY98oY');

const PaymentForm = ({checkoutToken, backStep, OnCaptureCheckout,shippingData, nextStep}) => {
    const handelSubmit= (event, elements, stripe) =>{
        event.prevetDefault();
        if(!stripe || !elements) return ;
        const cardElement = elements.getElement(CardElement) ;
        const {error, paymentMethod} =  stripe.createPaymentMethod({type: 'cart', card: cardElement})

        if(error){
            console.log(error)
        }else{
            const orderData = {
        line_items: checkoutToken.live.line_items,
        customer: { firstname: shippingData.firstName, lastname: shippingData.lastName, email: shippingData.email },
        shipping: { name: 'International', street: shippingData.address1, town_city: shippingData.city, county_state: shippingData.shippingSubdivision, postal_zip_code: shippingData.zip, country: shippingData.shippingCountry },
        fulfillment: { shipping_method: shippingData.shippingOption },
        payment: {
          gateway: 'stripe',
          stripe: {
            payment_method_id: paymentMethod.id,
          },
        },
      };

      OnCaptureCheckout(checkoutToken.id, orderData);
      
      nextStep();
        }
    }
    return (
    <>
      <Review checkoutToken={checkoutToken} />
      <Divider />
      <Typography variant="h6" gutterBottom style={{ margin: '20px 0' }}>Payment method</Typography>
      <Elements stripe={stripePromise}>
        <ElementsConsumer>{({ elements, stripe }) => (
          <form onSubmit={(e) => handelSubmit(e, elements, stripe)}>
            <CardElement />
            <br /> <br />
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <Button variant="outlined" onClick={backStep}>Back</Button>
              <Button type="submit" variant="contained" disabled={!stripe} color="primary">
                Pay {checkoutToken.live.subtotal.formatted_with_symbol}
              </Button>
            </div>
          </form>
        )}
        </ElementsConsumer>
      </Elements>
    </>
  );
}

export default PaymentForm
