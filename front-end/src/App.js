
import './App.css';
import Nav from './component/Nav'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from './component/Footer';
import Signup from './component/Signup';
import PrivateComponent from './component/PrivateComponent';
import Login from './component/Login';
import AddProduct from './component/AddProduct';
import ProductList from './component/ProductList';
import UpdateProduct from './component/UpdateProduct';

//Hello word
//hello word2

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Nav />
      <Routes>
         
          <Route element={<PrivateComponent/>}>
          <Route path="/Product" element={<ProductList/>} />
          <Route path="/add" element={<AddProduct/>} />
          <Route path="/update/:id" element={<UpdateProduct/>} />
          <Route path="/logout" element={<h1>Logout</h1>} />
          <Route path="/Profile" element={<h1>Profile</h1>} />
          </Route>
          <Route path='/Signup' element={<Signup/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
      </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
