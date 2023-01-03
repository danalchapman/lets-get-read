import React, { useEffect, useState } from 'react'
import { TopStoriesCard } from '../TopStoriesCard/TopStoriesCard'
import PropTypes from 'prop-types'
import './TopStoriesBox.css'

export const TopStoriesBox = ({ stories }) => {

    const [section, setSection] = useState('Home')
    const [filteredSections, setFilteredSections] = useState([])

    const getSections = stories.reduce((list, story) => { // creates a sections array
        if (!list.includes(story.section)) {
            list.push(story.section)
        }
        
        return list
    }, [])

    const renderSectionDropdown = getSections.map(section => { // renders dropdown
        return <option value={section}>{section}</option>
    })

    // const getFilteredSection = () => {
    //     const filtered = 
    // }

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
                    {renderSectionDropdown}
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