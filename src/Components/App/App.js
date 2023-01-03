import React, { useEffect, useState } from 'react';
import { TopStoriesBox } from '../TopStoriesBox/TopStoriesBox';
import { getData } from '../../apiCalls'
import './App.css';

export const App = () => {

  const [stories, setStories] = useState([])
  const [error, setError] = useState('')

  useEffect(() => {
    getData() 
      .then(data => setStories(data.results))
      .catch(error => setError(`Oops. ${error.message} Please try again.`))
  }, [])

  return (
    <main className='main-page'>
      <h1>Let's Get Read</h1>
      { error && <h2>{error}</h2> }
      { stories.length ? 
      <TopStoriesBox 
        stories={stories}
      /> :
      <h2>Loading...</h2>}
    </main>
  )
}
