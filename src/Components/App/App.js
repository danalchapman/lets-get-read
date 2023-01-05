import React, { useEffect, useState } from 'react'
import { TopStoriesBox } from '../TopStoriesBox/TopStoriesBox'
import { DetailView } from '../DetailView/DetailView'
import { BadUrl } from '../BadUrl/BadUrl'
import { getData } from '../../apiCalls'
import { Switch, Route, Redirect } from 'react-router-dom'
import './App.css'

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
      <h1 className='title'>Let's Get Read</h1>
      { error && <h2>{ error }</h2> }
      <Switch>
        <Route exact path='/'>
          <TopStoriesBox 
            stories={ stories }
          /> 
        </Route> 
        <Route exact path='/:abstract'
          render={ ({ match }) => {
            const singleStory = stories?.find(story => story.abstract === match.params.abstract)

            if (!singleStory) {
              return <Redirect to="/" />;
            }

            return <DetailView 
              key={ singleStory.title }
              title={ singleStory.title }
              section={ singleStory.section }
              subsection={ singleStory.subsection }
              abstract={ singleStory.abstract }
              byline={ singleStory.byline }
              published_date={ singleStory.published_date }
              updated_date={ singleStory.updated_date }
              multimediaImage={ singleStory.multimedia[1].url }
              multimediaCaption={ singleStory.multimedia[1].caption }
              url={ singleStory.url }
            />
          }} 
        />
        <Route path='/*'>
          <BadUrl />
        </Route>
      </Switch>
    </main>
  )
}
