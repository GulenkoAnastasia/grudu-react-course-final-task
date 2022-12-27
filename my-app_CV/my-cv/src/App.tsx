import React from 'react'
import { Header } from './components/Header'
import './App.scss'
import { Summary } from './components/Summary'

export const App: React.FC = () => {
  return (
    <>
      <Header></Header>
      <main>
        <Summary></Summary>
      </main>
    </>
  )
}
