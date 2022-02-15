import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Header from "./components/Header";
import Footer from './components/Footer'
import MainPage from './pages/MainPage';
import CatalogPage from './pages/CatalogPage';
function App() {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route exact path='/' element={<MainPage/>} />
          <Route exact path='/catalog' element={<CatalogPage/>} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
