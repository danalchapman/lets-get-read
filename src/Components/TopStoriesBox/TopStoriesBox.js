import React from 'react'
import { TopStoriesCard } from '../TopStoriesCard/TopStoriesCard'
import PropTypes from 'prop-types'
import './TopStoriesBox.css'

export const TopStoriesBox = ({ stories, setSection }) => {

    const storyCards = stories.map(story => {
        return (
            <TopStoriesCard 
                key={story.title}
                title={story.title}
                multimedia={story.multimedia[2].url}
            />
        )
    })

    return (
        <div className='front-page'>
            <form className='side-bar'>
                <select
                    className='section-dropdown'
                    name='section'
                    onChange={event => setSection(event.target.value)}
                >
                    <option></option>
                    <option></option>
                    <option></option>
                    <option></option>
                    <option></option>
                    <option></option>
                    <option></option>
                    <option></option>
                    <option></option>
                    <option></option>
                    <option></option>
                    <option></option>
                    <option></option>
                    <option></option>
                    <option></option>
                    <option></option>
                    <option></option>
                    <option></option>
                    <option></option>
                    <option></option>
                    <option></option>
                    <option></option>
                    <option></option>
                    <option></option>
                </select>
            </form>
            <div className='stories'>
                <section className='story-box'>
                    {storyCards}
                </section>
            </div>
        </div>
    )
}

TopStoriesBox.propTypes = {
    stories: PropTypes.array
}