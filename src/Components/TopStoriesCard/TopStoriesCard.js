import React from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'
import './TopStoriesCard.css'

export const TopStoriesCard = ({ title, multimedia, abstract }) => {
    
    return (
        <NavLink to={`/${abstract}`} className='story-card'>
            <img 
                className='card-img'
                src={multimedia}
                alt='Still from the article'
            />
            <p className='card-title' tabindex='0'>{title}</p>
        </NavLink>
    )
}

TopStoriesCard.propTypes = {
    title: PropTypes.string,
    multimedia: PropTypes.string
}