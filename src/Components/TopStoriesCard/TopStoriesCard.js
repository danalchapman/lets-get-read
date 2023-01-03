import React from 'react'
import PropTypes from 'prop-types'
import './TopStoriesCard.css'

export const TopStoriesCard = ({ title, multimedia }) => {
    return (
        <article className='story-card'>
            <img 
                className='card-img'
                src={multimedia}
                alt='Still from the article'
            />
            <h3 className='card-title'>{title}</h3>
        </article>
    )
}

TopStoriesCard.propTypes = {
    title: PropTypes.string,
    multimedia: PropTypes.string
}