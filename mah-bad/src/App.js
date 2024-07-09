// import logo from './logo.svg';
import './App.css';
import Pricing from './component/Pricing'
import Productlist from './component/Productlist';
import Paint from './component/paint';
import Book from './component/book';
import BookDetail from './component/bookDetail'
import NavBar from './component/navbar';
import Contactus from './component/contactus';
import Layout from './layout'
import Footer from './component/footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <Router>
      <div className='mt-16'>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Book />} />
            <Route path="/book/:id" element={<BookDetail />} />
            <Route path="/contactus" element={<Contactus />} />
            {/* Đặt các thành phần khác như Pricing, Productlist, Paint */}
            <Route path="pricing" element={<Pricing />} />
            <Route path="productlist" element={<Productlist />} />
            <Route path="paint" element={<Paint />} />
          </Route>
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
