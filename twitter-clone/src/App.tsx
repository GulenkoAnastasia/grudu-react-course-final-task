import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LoginPage } from './pages/LogIn';
import { SignUpPage } from './pages/SignUp';
import { TweetsPage } from './pages/Tweets/Tweets';

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />}/>
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/tweets" element={<TweetsPage />} />
      </Routes>
    </BrowserRouter>
  );
}
