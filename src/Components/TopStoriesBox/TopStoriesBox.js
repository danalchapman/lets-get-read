import React, { useEffect, useState } from 'react'
import { TopStoriesCard } from '../TopStoriesCard/TopStoriesCard'
import PropTypes from 'prop-types'
import './TopStoriesBox.css'

export const TopStoriesBox = ({ stories }) => {

    const [section, setSection] = useState('')
    const [filteredStories, setFilteredStories] = useState([])

    useEffect(() => {
        getFilteredStories() 
        // eslint-disable-next-line
    }, [section])

    const getSections = stories.reduce((list, story) => {
        if (!list.includes(story.section)) {
            list.push(story.section)
        }
        
        return list
    }, [])

    const renderSectionDropdown = getSections.map((section, index) => { 
        return <option key={ index } value={ section }>{ section }</option>
    })

    const getFilteredStories = () => {
        const filtered = stories.reduce((list, story) => {
            if (story.section === section) {
                list.push(story)
            }

            return list
        }, [])

        setFilteredStories(filtered)
    }

    const displayCards = () => { 
        const displayedStories = filteredStories.length ? filteredStories : stories
        
        return displayedStories.map((story, index) => {
            return (
                <TopStoriesCard 
                    key={ story.title }
                    title={ story.title }
                    multimedia={ story.multimedia[2].url }
                    abstract={ story.abstract }
                    caption={ index }
                />
            )
        })
    }

    return (
        <div className='front-page'>
            <form className='side-bar'>
                <label 
                    className='section-label' 
                    htmlFor='section'
                >
                    Find stories by Topic:
                <select
                    className='section-dropdown'
                    name='section'
                    onChange={event => setSection(event.target.value)}
                >
                    <option value='home'>Home</option>
                    { renderSectionDropdown }
                </select>
                </label>
            </form>
            <div className='stories'>
                <section className='story-box' tabIndex='0'>
                    { displayCards() }
                </section>
            </div>
        </div>
    )
}

TopStoriesBox.propTypes = {
    stories: PropTypes.array
}