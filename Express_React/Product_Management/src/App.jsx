import {useState,useEffect} from 'react'

const App = () => {
  const [products,setProducts]= useState([]);
  const[name,setName]=useState("");
  const[price,setPrice]=useState("");
  const[category,setCategory]=useState("");
  //get Products
  const getproducts=async()=>{
    const response=await fetch("http://localhost:3000/products");
    const data=await response.json();
    setProducts(data);
  };
  //add product
  const addproduct=async(e)=>{
    e.preventDefault();
   const product={
    name:name,
    price:price,
    category:category
   };
   await fetch("http://localhost:3000/products",{
    method:"POST",
    headers:{
      "Content-Type":"application/json"
    },
    body:JSON.stringify(product)
  });
  return (
    <div>
      <table border="1" cell padding={10}>  
        <thead>
          <th>id</th>
          <th>name</th>
          <th>price</th>S
          <th>category</th>
        </thead>
        <tbody>
          <tr> </tr>
           <tr></tr>
           <tr></tr>
           <tr></tr>
           <tr></tr>
           <tr></tr>
        </tbody>
      </table>
      
    </div>
  )
}

export default App;