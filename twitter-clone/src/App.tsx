import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LoginPage, SignupPage, TweetsPage, NoPage } from './pages';
import { Header } from './components';
import { UserContext } from './utils/UserContext';
import './App.scss';

export const App: React.FC = () => {
  const [userId, setUserId] = useState<string | null>(() => {
    const user = localStorage.getItem('userId');
    return user && JSON.parse(user);
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
          <Route path="/*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
    </div>
  );
};
