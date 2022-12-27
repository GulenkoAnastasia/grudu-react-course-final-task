import React from 'react'
import { DATA } from '../../constants'
import './Header.scss'

export const Header: React.FC = () => {
  return (
        <header className='header'>
          <div className="header__firstName">{DATA.firstName}</div>
          <div className="header__lastName">{DATA.lastName}</div>
          <div className="header__spec">{DATA.position.toUpperCase()}</div>
        </header>
  )
}
