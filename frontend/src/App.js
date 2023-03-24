import logo from './logo.svg';
import './App.css';
import { fetchAllProducts } from './lib/sanity/productServices';
import {useEffect, useState} from 'react'
import FrontPage from './pages/FrontPage';
import { Route, Routes } from 'react-router-dom';
import ProductPage from './pages/ProductPage';
import CategoryPage from './pages/CategoryPage';
import CategoriesPage from './pages/CategoriesPage';

function App() {
  // console.log(fetchAllProducts())

  // let PROJECT_ID = "nur9aj2o";
  // let DATASET = "production";
  // let QUERY = encodeURIComponent('*[_type == "products"]');
  // let URL = `https://${PROJECT_ID}.api.sanity.io/v2021-10-21/data/query/${DATASET}?query=${QUERY}`;

  // fetch(URL).then((results)=> results.json().then(({result})=>(console.log(result))))

  const [prods, setProds] = useState(null)

  const getProducts = async () =>{
    const data = await fetchAllProducts()
    setProds(data)
  }
  
  useEffect(()=>{
    getProducts()
  },[])

  console.log(prods)


  return (
    <Routes>
      <Route index element={<FrontPage products={prods}/>}></Route>
      <Route path=':slug' element={<ProductPage/>}/>
      <Route path='kategori'>
        <Route index element={<CategoriesPage/>}/>
        <Route path=':category' element={<CategoryPage/>}/>
        </Route>
    </Routes>
  );
}

export default App;
