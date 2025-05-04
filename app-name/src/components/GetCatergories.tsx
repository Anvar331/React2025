import { useState } from 'react';

function GetCategories() {

    const [category, setCategory] = useState([]);

    fetch('https://dummyjson.com/products/category-list')
 .then(res => res.json())
 .then(data => console.log(data));
 }

 export default GetCategories;