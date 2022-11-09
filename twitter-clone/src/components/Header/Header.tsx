import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from "../../assets/twitter_icon.svg";
import { getUserbyId } from '../../api/api';
import { getUserAbbr } from '../../utils/getUserAbbr';
import { UserContext } from '../../utils/UserContext';
import './Header.scss';

export const Header: React.FC = () => {
  const [userName, setUserName] = useState<string>('');
  const { userId, setUserId } = useContext(UserContext);
  const navigate = useNavigate();

  const handleSignOut = () => {
    localStorage.removeItem('userId');
    setUserId(null);
    setUserName('');
    navigate('/');
  };
  useEffect(() => {
    (async() => {
      if(userId) {
        const user = await getUserbyId(userId);
        setUserName(user.name as string);
      }
    })();
  }, [userId]);

  return (
    <div className='header'>
      <div className='header__content'>
        <div className='header__logo'>
        <img src={Logo} alt="Twitter logo" />
        <span>Another Twitter Clone</span>
        </div>
        <div className='header__user'>
          <span>{userName}</span>
          <span className='header__user--abbr'>{userName && getUserAbbr(userName)}</span>
          {userName &&
            <button className='header__user--logout' onClick={handleSignOut}>Log out</button>
          }
        </div>
      </div>
    </div>
  );
};