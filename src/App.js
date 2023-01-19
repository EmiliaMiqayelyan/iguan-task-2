import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/navbar/Navbar';
import Content from './components/content/Content';
import Beauty from './components/beauty/Beauty';
import Lifestyle from './components/lifestyle/Lifestyle';
import Services from './components/services/Service';
import Customers from './components/custom/Customers';
import Benefits from './components/benefit/Benefits';

function App() {
  return (
    <div className="App">
        <Navbar />
        <Content />
        <Beauty />
        <Lifestyle />
        <Services />
        <Customers />
        <Benefits />
    </div>
  );
}

export default App;
