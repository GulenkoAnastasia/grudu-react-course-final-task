import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LoginPage } from './pages/LogInPage';
import { SignupPage } from './pages/SignupPage';
import { TweetsPage } from './pages/Tweets/Tweets';
// import './styles/reset.scss'
import './App.scss';

export const App: React.FC = () => {
  return (
    <div className='main'>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />}/>
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/tweets" element={<TweetsPage />} />
        <Route path="/*" element={'Page not found'} />
      </Routes>
    </BrowserRouter>
    </div>
  );
};
