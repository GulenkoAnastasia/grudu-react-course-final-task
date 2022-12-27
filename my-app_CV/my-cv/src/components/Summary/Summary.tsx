import React from 'react'
import { DATA } from '../../constants'
import './Summary.scss'

export const Summary: React.FC = () => {
  return (
        <section className='summary'>{DATA.summary}</section>
  )
}
