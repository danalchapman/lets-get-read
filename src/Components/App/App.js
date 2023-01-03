import React, { useEffect } from 'react';
import { TopStoriesBox } from '../TopStoriesBox/TopStoriesBox';
import { getData } from '../../apiCalls'
import './App.css';

export const App = () => {

  // useEffect(() => {
  //   getData()
  // })

  return (
    <main className='main-page'>
      <h1>Let's Get Read</h1>
      <TopStoriesBox />
    </main>
  )
}
