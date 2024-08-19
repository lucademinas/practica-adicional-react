import './App.css'
import Products from './components/products/Products';


const products = ["table","couch","chair1","chair2"];

const App = () => {

  
  return (
    <Products products = {products}/>
  )
}

export default App
