import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Signup from './Pages/Auth/SignUp';
// import Login from './Pages/Auth/LogIn';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import NotFound from './pages/404';
import Addgoal from './pages/Addgoal';
// import ProductShow from './Pages/Products/Show';

const App = () => {
  return (
    <Router>
      <Routes>
        {/* <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} /> */}
        <Route path="/home" element={<Home />} />
        <Route path="/create" element={<Addgoal />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/404" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;









