import React from 'react';
import Product from './Product';
import App from './App.tsx'

export default function ProductCard({Product, text}) {
    return <button className={`btn ${Product}`}>{text ? text : "Add to cart"} </button>;
  }


