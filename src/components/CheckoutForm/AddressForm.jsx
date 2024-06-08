import { Button, Grid, Typography } from '@material-ui/core'
import React from 'react'
import { useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import FormInput from './CustomTextField'
import {commerce} from '../../lib/commerce'
// import { useEffect } from 'react'
import {Link} from 'react-router-dom'

const AddressForm = ({checkoutToken, next}) => {
    const [shippingCountries , setShippingCountries] = useState([]);
    // const [shippingCountry , setShippingCountry] = useState('');
    // const [shippingSubdivisions , setShippingSubdivisions] = useState([]);
    // const [shippingSubdivision , setShippingSubdivision] = useState('');
    // const [shippingOptions , setShippingOptions] = useState([]);
    // const [shippingOption , setShippingOption] = useState('');
    const methods= useForm();

    // const countries = Object.entries(shippingCountries).map(([code, name])=>({id: code, label:name}))

    // const fetchShippingCountries= async(checkoutTokenId)=> {
    //     const {countries} = await commerce.services.localeListShippingCountries(checkoutTokenId)

    //     setShippingCountries(countries);
    //     setShippingCountries(Object.keys(countries)[0])
    // }

//    useEffect(()=>{
//        setShippingCountries(checkoutToken.id)

//    },[])

    return (
        <>
        <Typography variant="h6" gutterBottom>Shipping Address</Typography>
        <FormProvider {...methods}>
         <form onSubmit={methods.handleSubmit((data)=>next({...data}))}> 
             <Grid container spacing={3}>
              <FormInput required name='firstName' label='First Name'></FormInput>
              <FormInput required name='lasttName' label='Last Name'></FormInput>
              <FormInput required name='address1' label='Address'></FormInput>
              <FormInput required name='city' label='City'></FormInput>
              <FormInput required name='zip' label='ZIP/ Postal code'></FormInput>
              {/* <Grid xs={12} sm={6}>
                  <InputLabel>Shipping Country</InputLabel>
                  <Select value={shippingCountry} fullWidth onChange={(e)=> setShippingCountry(e.target.value)}>
                    {countries.map((country)=>{
                        <MenuItem key={country.id} value={country.id}>
                          {country.label}
                      </MenuItem>
                    })}
                      
                  </Select>
              </Grid> */}
              
             

             </Grid>
              <br></br>
              <br></br>
              <div style={{display:'flex', justifyContent:' space-between' }}>
                  <Button type="" component={Link} to="/cart" variant="outlined" color="secondary"  >Back to cart</Button>
                  <Button type="submit" variant="contained" color="primary" >Next</Button>
              </div>
         </form>

        </FormProvider>




        </>
    )
}

export default AddressForm
