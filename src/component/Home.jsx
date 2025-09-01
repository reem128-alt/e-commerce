
import  '../App.css'
import Carousel from './carousel';
import ShowProduct from './showProduct';
import Header from './Header';
import Footer from '../Footer';



const Home = () => {
  
  
  return (
    <div className='h-screen relative'>
    
    <Header />
      <Carousel />
      <ShowProduct />
      <Footer/>
      </div>
      
  
       
    )
}

export default Home

