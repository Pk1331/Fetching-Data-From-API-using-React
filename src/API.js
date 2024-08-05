import Card from './App';
import './App.css';
import useFetch from "./UseFetch"; // Custom Hook
function App()
{
   let products=useFetch("https://fakestoreapi.com/products")
   return(
    <div className='Pro-list'>
      {
        products.map((eve)=><Card {...eve} key={eve.id} />)
      }
    </div>
   )
}
export default App
