import './App.css'
import ProductContext from './context/Products'
import { Product } from './types/Product'
import { useState, useEffect, FC } from 'react';
import { Box, Button, Drawer, Grid } from '@mui/material'
import ProductItem from './components/ProductItem/ProductItem';
import { Wrapper } from './styledComponents';
import { Cart } from './components/Cart/Cart';

// We want to build a raect project using typescript and the project will be ecommerce application
const App:FC = () => {
  const [products, setProducts] = useState<Product[]>([])
  const [cartList ,setCartList] = useState<Product[]>([]);
  const [isCartOpen, setisCartOpen] = useState<boolean>(false);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products').then((response) => {
    return response.json();
    }).then((data) => {
      setProducts(data);
    })
  }, [])

  useEffect(() => {
    // console.log('called');
    // Modiify the product List array
    console.log(cartList);
  }, [cartList]);

  const handleAddToCart = (product: Product) => {
    // TODO: FIX Type error
   setCartList((prevList) => {
    const isCartItemFound = cartList.find((cartItem) => cartItem.id === product.id);

    if (isCartItemFound) {
     return prevList.map((product) => {
        if (product.id === isCartItemFound?.id) {
          return { ...product, count: product.count! + 1 }
        }
      })
    }

    return [...prevList, { ...product, count: 1 }]

   })
  

  }

  const handleResetAll = () => {
      setCartList([])
  }

  const handleRemoveFromCart = (id: number) => {
    setCartList((prevList) => {
      return prevList.reduce((acc, item) => {
        if (item.id == id) {
          if (item.count == 1) {
            return acc;
          }

          return [...acc, { ...item, count: item.count! - 1 }]
        } else {
          // Corner Case (if you are an api, where the ui did not refresh)
          return [...acc, item]
        }
      }, [] as Product[])
    })
  }

  // React fake store api to fetch the products data and we can store in our context.
  return (
    <ProductContext.Provider value={{
      products,
      setProducts
    }
    }>
    <Wrapper>

     <Drawer anchor='right' open={isCartOpen} onClose={() => setisCartOpen(false)}>
       <Box minWidth={450} maxWidth={450}>
       <Cart cartItems={cartList} addToCart={handleAddToCart} removeFromCart={handleRemoveFromCart} resetAll={handleResetAll}  />
       </Box>
     </Drawer>  

     <Button onClick={() => setisCartOpen(true)}>Open cart</Button>

     <Grid container spacing={3}>
        {
          products.map((product, index) => {
            return (
              <Grid item key={index} xs={12} sm={4}> 
              <ProductItem removeFromCart={handleRemoveFromCart} addToCart={handleAddToCart} product={product}  />
              </Grid>
            )
          })
        }
     </Grid>

     </Wrapper>
    </ProductContext.Provider>
  )
}

export default App
