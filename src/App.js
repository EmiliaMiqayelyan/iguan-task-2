import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/navbar/Navbar';
import Content from './components/content/Content';
import Beauty from './components/beauty/Beauty';
import Lifestyle from './components/lifestyle/Lifestyle';
import Services from './components/services/Service';
import Customers from './components/custom/Customers';
import Benefits from './components/benefit/Benefits';
import Discount from './components/discount/Discount';
import Blog from './components/blog/Blog';
import Footer from './components/footer/Footer';
// import Slider from './components/slider/Slider';
// import Carousel from './components/carousel/Carousel';

function App() {
  return (
    <div className="App">
        <Navbar />
        <Content />
        <Beauty />
        {/* <Slider /> */}
        <Lifestyle />
        <Services />
        <Customers />
        <Benefits />
        <Discount />
        <Blog />
        {/* <Carousel /> */}
        <Footer />
    </div>
  );
}

export default App;
