import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import './DetailView.css'

export const DetailView = ({ 
    title, 
    section, 
    subsection, 
    abstract, 
    byline,
    published_date,
    updated_date,
    multimediaImage,
    multimediaCaption,
    shortUrl
}) => {
    return (
        <article>
            <h3>{title}</h3>
            <p>{byline}</p>
            <img src={multimediaImage} alt={multimediaCaption} />
            
        </article>
    )
}