import React from 'react';
import { Switch, Route } from 'react-router-dom';
// components
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Pages/HomePage/Home';
import Services from './Components/Pages/Services/Services';
import Products from './Components/Pages/Products/Products';
import SignUp from './Components/Pages/SignUp/SignUp';
import Footer from './Components/Pages/Footer/Footer';

// style
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/services" component={Services} />
        <Route exact path="/products" component={Products} />
        <Route exact path="/sign-up" component={SignUp} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
