import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LoginPage } from './pages/LogIn';
import { SignUpPage } from './pages/SignUp';
import { TweetsPage } from './pages/Tweets/Tweets';
import './App.scss';

export const App = () => {
  return (
    <div className='main'>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />}/>
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/tweets" element={<TweetsPage />} />
        <Route path="/*" element={'Page not found'} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}
