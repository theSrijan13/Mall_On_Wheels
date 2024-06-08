import React from 'react'
import { Typography, Button, Grid, Container } from '@material-ui/core';
import useStyles from './styles'
import CardItem from './CardItem/CardItem';
import { useHistory } from 'react-router-dom';
import Alert from 'react-bootstrap/Alert'
import Badge from 'react-bootstrap/Badge'


const Cart = ({ cart, HandelUpdateCartQty, HandelEmptyCart, HandelRemoveFromCart }) => {


    const history = useHistory();
    // const redirect = () => {
    //     history.push('/checkout')
    // }
    const classes = useStyles();

    const EmptyCart = () => (
        <Alert variant="danger" >
            <Alert.Heading>Oh snap! Shopping Cart is Empty! 😕</Alert.Heading>
            <p>
                Pick up some items to your cart for a Checkout...🥰😀
            </p>
        </Alert>
    );

    const FilledCart = () => (
        <>
            <div>
                
                <Grid container spacing={2}>
                    {cart.line_items.map((item) => (
                        <Grid item xs={12} sm={4} key={item.id}>
                            <CardItem item={item} onUpdateCartQty={HandelUpdateCartQty} onRemoveFromCart={HandelRemoveFromCart} />
                        </Grid>
                    ))}
                </Grid>
            </div>
            <div className={classes.cardDetails}>
                <Typography variant="h5" ><Badge bg="success">Subtotal</Badge><Typography variant="h4">{cart.subtotal.formatted_with_symbol}</Typography></Typography>
                <div>
                    <Button className={classes.emptyButton} size='large' type="button" variant="contained" color="secondary" onClick={HandelEmptyCart} >Empty Cart</Button>
                    <Button href="/Checkout" size='large' type="button" variant="contained" color="primary" >Checkout</Button>
                </div>
            </div>
        </>
    );
    if (!cart.line_items)
        return 'Loading...'

    return (
        <Container>
            <div className={classes.toolbar}></div>
            <Alert className={classes.title} variant="dark" >
                <Alert.Heading>YOUR SHOPPING CART</Alert.Heading>
            </Alert>
            {!cart.line_items.length ? <EmptyCart /> : <FilledCart />}
        </Container>
    )
}

export default Cart
