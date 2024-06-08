
import { Button, Divider, Paper, Step, StepLabel, Stepper, Typography } from '@material-ui/core'
import React, { useState } from 'react'
import useStyles from './styles'
import AddressForm  from '../AddressForm';
import PaymentForm from '../PaymentForm'
import { useEffect } from 'react';
import {commerce} from '../../../lib/commerce'
import {Link} from  'react-router-dom'



const steps = ['Shiping adress', 'Payment details']


const Checkout = ({cart,order, OnCaptureCheckout}) => {

    const [activeStep, setActiveStep] = useState(0);
    const [checkoutToken, setCheckoutToken] = useState(null);
    const classes = useStyles();
    const [shippingData, setShippingData] = useState({})

    useEffect(()=>{
          const generateToken = async ()=>{
              try{
                  const token = await commerce.checkout.generateToken(cart.id, {type:'cart'})

                  console.log(token);

                  setCheckoutToken(token);
              }catch(error){
                  console.log(error);
              }
          }
       generateToken();
    }, [cart])

    const nextStep = () => setActiveStep((prevActiveStep)=> prevActiveStep +1);
    const backStep = () => setActiveStep((prevActiveStep)=> prevActiveStep -1);

    const next = (data)=>{
        setShippingData(data);

        nextStep();
    }

    const Form =() => activeStep ===0
     ? <AddressForm  next={next} />
     : <PaymentForm checkoutToken={checkoutToken} backStep={backStep} OnCaptureCheckout={OnCaptureCheckout} order={order} nextStep={nextStep} />
    const Confirmation = () =>{
        <>
        <div>
            <Typography variant="h5">Thank you for your purchase , </Typography>
            <Divider className={classes.divider}></Divider>
            <Typography variant="subtitile2">Order ref: </Typography>
        </div>
        <br></br>
        <Button component={Link} to="/" variant="outlined" type='button'>Back to Home</Button>
    </>
    }
    return (
        <div>
            <div className={classes.toolbar}></div>
            <main className={classes.layout}>
                <Paper className={classes.paper} >
                    <Typography variant="h4" align="center">Checkout </Typography>
                    <Stepper activeStep={activeStep} className={classes.stepper}>
                         {steps.map((step)=>(
                             <Step key={step}>
                                 <StepLabel>{step}</StepLabel>
                             </Step>
                         ))}
                    </Stepper>
                    {activeStep === steps.length ? <Confirmation /> :  <Form />}
                </Paper>
            </main>
        </div>
    )
}
   

export default Checkout
