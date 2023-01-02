import React, { useEffect } from 'react';
import { getData } from '../../apiCalls'
import './App.css';

export const App = () => {

  useEffect(() => {
    getData()
  })

  return (
    <main>

    </main>
  )
}
