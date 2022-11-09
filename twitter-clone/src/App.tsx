import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LoginPage } from './pages/LogInPage';
import { SignupPage } from './pages/SignupPage';
import { TweetsPage } from './pages/Tweets/Tweets';
import { UserContext } from './utils/UserContext';
import './App.scss';
import { Header } from './components/Header/Header';

export const App: React.FC = () => {
  const [userId, setUserId] = useState<string | null>(() => {
    const user = localStorage.getItem('userId');
    return user !== null ? JSON.parse(user): null;
  });

  return (
    <div className='main'>
    <UserContext.Provider value={{userId, setUserId}}>
      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route path="/" element={<LoginPage />}/>
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/tweets" element={<TweetsPage />} />
          <Route path="/*" element={'Page not found'} />
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
    </div>
  );
};
