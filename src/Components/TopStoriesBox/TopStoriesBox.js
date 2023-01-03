import React, { useEffect, useState } from 'react'
import { TopStoriesCard } from '../TopStoriesCard/TopStoriesCard'
import PropTypes from 'prop-types'
import './TopStoriesBox.css'

export const TopStoriesBox = ({ stories, setSection }) => {

    const [filteredSections, setFilteredSections] = useState([])

    const getSections = stories.reduce((list, story) => { // creates a sections array
        if (!list.includes(story.section)) {
            list.push(story.section)
        }
        
        return list
    }, [])

    const filterStories = () => {
        
    }

    const displayCards = stories.map(story => {

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
                    <option disabled value='home'>Home</option>
                    <option value='arts'>Arts</option>
                    <option value='automobiles'>Automobiles</option>
                    <option value='books'>Books</option>
                    <option value='business'>Business</option>
                    <option value='fashion'>Fashion</option>
                    <option value='food'>Food</option>
                    <option value='health'>Health</option>
                    <option value='insider'>Insider</option>
                    <option value='magazine'>Magazine</option>
                    <option value='movies'>Movies</option>
                    <option value='nyregion'>NYRegion</option>
                    <option value='obituaries'>Obituaries</option>
                    <option value='opinion'>Opinion</option>
                    <option value='politics'>Politics</option>
                    <option value='realestate'>Real Estate</option>
                    <option value='science'>Science</option>
                    <option value='sports'>Sports</option>
                    <option value='sundayreview'>Sunday Review</option>
                    <option value='technology'>Technology</option>
                    <option value='theater'>Theater</option>
                    <option value='t-magazine'>T-Magazine</option>
                    <option value='travel'>Travel</option>
                    <option value='upshot'>Upshot</option>
                    <option value='us'>US</option>
                    <option value='world'>World</option>
                </select>
            </form>
            <div className='stories'>
                <section className='story-box'>
                    {displayCards}
                </section>
            </div>
        </div>
    )
}

TopStoriesBox.propTypes = {
    stories: PropTypes.array
}