import NavBar from './components/NavBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';

const App = () => {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/clothing' element={<p>clothing</p>} />
          <Route path='/jewelery' element={<p>Joyas</p>} />
          <Route path='/cart' element={<p>Carrito</p>} />
          <Route path='/detalle/:id' element={<p>detalle</p>} />
          <Route path='*' element={<p>404 vuelva a intenta por favor</p>} />
        </Routes>
      </Router>
    </>
  );
};

export default App;

/*import React from "react";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";

const App = () => {
  return (
    <div>
      <NavBar />
      <ItemListContainer greeting="¡Hola desde el contenedor!" />
    </div>
  );
};

export default App;

/*import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Catalogo from './Catalogo';
import DetalleProducto from './DetalleProducto';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Catalogo} />
        <Route path="/category/:id" component={Catalogo} />
        <Route path="/item/:id" component={DetalleProducto} />
      </Switch>
    </Router>
  );
}

export default App; */
