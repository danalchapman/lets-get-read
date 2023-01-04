import React, { useEffect, useState } from 'react'
import { TopStoriesCard } from '../TopStoriesCard/TopStoriesCard'
import PropTypes from 'prop-types'
import './TopStoriesBox.css'

export const TopStoriesBox = ({ stories }) => {

    const [section, setSection] = useState('')
    const [filteredSections, setFilteredSections] = useState([])

    useEffect(() => {
        setFilteredSections(section)
    }, [])

    const getSections = stories.reduce((list, story) => { // creates a sections array
        if (!list.includes(story.section)) {
            list.push(story.section)
        }
        
        return list
    }, [])

    const renderSectionDropdown = getSections.map((section, index) => { // renders dropdown
        return <option key={index} value={section}>{section}</option>
    })

    const displayCards = () => { // toggles displayed cards via ternary 
        const displayedStories = filteredSections.length ? filteredSections : stories
        return displayedStories.map(story => {
            return (
                <TopStoriesCard 
                    key={story.title}
                    title={story.title}
                    multimedia={story.multimedia[2].url}
                />
            )
        })
    }

    return (
        <div className='front-page'>
            <form className='side-bar'>
                <select
                    className='section-dropdown'
                    name='section'
                    onChange={event => setSection(event.target.value)}
                >
                    <option value='home'>Home</option>
                    {renderSectionDropdown}
                </select>
            </form>
            <div className='stories'>
                <section className='story-box'>
                    {displayCards()}
                </section>
            </div>
        </div>
    )
}

TopStoriesBox.propTypes = {
    stories: PropTypes.array
}