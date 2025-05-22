import React from 'react'
import { Link } from 'react-router-dom'

//Imagine this data is fetching from backend 
const PRODUCTS = [
  {id: 'p1', title: 'Product 1'},
  {id: 'p2', title: 'Product 2'},
  {id: 'p3', title: 'Product 3'}
]

const Products = () => {
  return (
    <>
    <h2>The Prodcuts page</h2>
    <ul>
      {PRODUCTS.map( (prod) => (<li key={prod.id}><Link to={prod.id}>{prod.title}</Link></li>) )}

      {/* <li><Link to>Product -1</Link></li>
      <li><Link to>Product -2</Link></li>
      <li><Link to>Product -3</Link></li>
      <li><Link>Product -4</Link></li> */}
      {/* <li>Product -2</li>
      <li>Product -3</li>
      <li>Product -4</li>
      <li>Product -5</li> */}
    </ul>
    </>
  )
}

export default Products