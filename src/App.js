import React, { useState,useEffect } from "react";
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { signInWithGoogle } from './auth/Firebase';
import Header from './components/Header.jsx';
import Landing from './components/Landing/Landing.jsx';
import Homepage from './components/Homepage/homepage.jsx';
import SignIn from './components/SignIn';

function App() {
  const [page, setPage] = useState('landing')

  const currentPage = page === 'landing' ? <Landing /> : page === 'signin' ? <Signin /> : <Homepage />

  return (
    <div className="app-container">
      <SignIn/>
        <Homepage />

    </div>
  );
}

export default App;
