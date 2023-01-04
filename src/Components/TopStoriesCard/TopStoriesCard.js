import React from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'
import './TopStoriesCard.css'

export const TopStoriesCard = ({ title, multimedia, abstract, caption }) => {
    
    return (
        <NavLink to={`/${abstract}`} className='story-card'>
            <img 
                className='card-img'
                src={multimedia}
                alt={`thumbnail from index ${caption} NYT article`}
            />
            <p className='card-title' tabIndex='0'>{title}</p>
        </NavLink>
    )
}

TopStoriesCard.propTypes = {
    title: PropTypes.string,
    multimedia: PropTypes.string
}