import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from './Components/Header';
import Footer from './Components/Footer';
import HomePage from './Pages/HomePage';
import ServicePage from './Pages/ServicePage';
import ProjectPage from './Pages/ProjectPage';
import Subscribe from './Components/Subscribe';
import ProductPage from './Pages/ProductPage';


const App = () => {
  return (
    <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/products" element={<ProductPage/>} />
          <Route path="/service" element={<ServicePage />} />
          <Route path="/project" element={<ProjectPage />} />
        </Routes>
        <Subscribe/>
        <Footer />
      
      
      </BrowserRouter>
  );
};

export default App;