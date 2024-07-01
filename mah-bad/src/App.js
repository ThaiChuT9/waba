// import logo from './logo.svg';
import './App.css';
import Pricing from './component/Pricing'
import Productlist from './component/Productlist';
import Paint from './component/paint';
import Book from './component/book';
import BookDetail from './component/bookDetail'
import NavBar from './component/navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <Router>
      <NavBar />
      <Pricing />
      <Productlist />
      <Paint />
      <Routes>
        <Route path="/" element={<Book />} />
        <Route path="/book/:id" element={<BookDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
