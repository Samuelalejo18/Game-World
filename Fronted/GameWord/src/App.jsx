/* eslint-disable no-unused-vars */
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './context/auth.context';
import { SuccessfulRegistration } from './pages/SuccessfulRegistration';
import { Wordgame } from './pages/Wordgame';
import HomePage from './pages/home';
import LoginPage from './pages/loginPage';
import RegisterPage from './pages/registerPage';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/SuccessfulRegistration" element={<SuccessfulRegistration />} />
          <Route path="/wordgame" element={<Wordgame />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
