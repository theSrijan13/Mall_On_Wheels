import React from 'react'
import {Grid} from '@material-ui/core';
import Product from './Product/Product';
import useStyles from './styles'


// const products =[
//     {id: 1, name: 'Shoes', description:  "running shoes", price: "$ 200", image:'https://media.istockphoto.com/photos/running-shoes-picture-id1249496770?b=1&k=20&m=1249496770&s=170667a&w=0&h=_SUv4odBqZIzcXvdK9rqhPBIenbyBspPFiQOSDRi-RI=' } ,
//     {id: 2, name: ' Macbook', description: 'Laptop for productivity', price: '$ 10000', image:'https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1720&q=80'}]

const Products =({ products, OnAddToCart }) =>{
    const classes =useStyles();
    return(
    <main className={classes.content}>
      <div className={classes.toolbar}></div>
        <Grid container justify="center" spacing={4}>
        {
            products.map((product) =>(
                <Grid item key={product.id} xs={12} sm={6}  md={4} lg={3}>
                   <Product product={product} OnAddToCart={OnAddToCart} />
                </Grid>
             ) )
        }
        </Grid>
    </main>
    )
}

export default Products;
