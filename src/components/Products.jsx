import React, { useEffect } from 'react'
import styled from 'styled-components'
import { popularProducts } from '../data'
import Product from './Product'
import { useState } from 'react'
import axios from "axios"

const Container = styled.div`
padding: 20px;
display: flex;
flex-wrap: wrap; 
justify-content: space-between;

    
`

const Products = ({cat, filters, sort}) => {

   const [products , setProducts] = useState([]); 
   const [filteredProducts , setFilteredProducts] = useState([]); 



   useEffect(() => {


      const getProducts = async ()=>{

        try{

          const res = await axios.get(cat ? `http://localhost:5000/api/products?category=${cat}` : 
          "http://localhost:5000/api/products"); 
          console.log(res)

        }catch(err){

        }
      }

       getProducts()

   }, [cat])





  return (
    <div>

        <Container>
           {popularProducts.map(item=>(

               <Product item = {item} key={item.id}/>

           ))}
        </Container>
    </div>
  )
}

export default Products;