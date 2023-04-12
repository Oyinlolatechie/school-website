import React from 'react';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import HomePage from './components/HomePage/HomePage';
import Navbar from './components/HomePage/Navbar';
import AboutUsPage from './components/About-us-page/AboutUs';
import Admission from './components/AdmissionPage/Admission'
import NewsPage from './components/NewPage/NewsPage';
import NewsContent from './components/NewPage/NewsContent';

function App() {
  return (
   <Router>
    <div className="app">
      <Navbar />
    </div>
    <div className="pages">
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/About-us' element={<AboutUsPage />} />
        <Route path='/Admission' element={<Admission />} /> 
        <Route path='/News' element={<NewsPage />} /> 
        <Route path='News/:id' element={<NewsContent />} /> 
      </Routes>
    </div>

   </Router>
    
  );
}

export default App;
