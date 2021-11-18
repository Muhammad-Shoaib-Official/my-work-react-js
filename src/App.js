import React from "react";
import GlobalSyle from './globalStyle';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { Navbar, Footer } from "./components";
import Home from "./pages/HomePage/Home";
import Products from "./pages/ProductsPage/Products";
import Services from "./pages/ServicesPage/Services";
import About from "./pages/AboutPage/About";
import Contact from "./pages/ContactPage/Contact";
import ScrollToTop from "./components/ScrollToop";

function App() {
  return (
      <Router>
        <GlobalSyle />
        <ScrollToTop />
        <Navbar />
        <Switch>
          <Route path= "/" exact component = {Home} />
          <Route path= "/products" exact component = {Products} />
          <Route path= "/services" exact component = {Services} />
          <Route path= "/about" exact component = {About} />
          <Route path= "/contact" exact component = {Contact} />
        </Switch>
        <Footer />
     </Router>
    
  );
}

export default App;
