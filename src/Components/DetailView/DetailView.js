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
            <p>{section}</p> 
            { subsection ? <p>{subsection}</p> : null }
            <p>Published: {published_date}</p>
            { updated_date ? <p>Updated: {updated_date}</p> : null}
            <p>{abstract}</p>
            {/* <a href={shortUrl}>Link to Full Article</a> */}
            <Link to='/'>
                <button>
                    Return to the Front Page
                </button>
            </Link>
        </article>
    )
}

DetailView.propTypes = {
    title: PropTypes.string, 
    section: PropTypes.string, 
    subsection: PropTypes.string, 
    abstract: PropTypes.string, 
    byline: PropTypes.string,
    published_date: PropTypes.string,
    updated_date: PropTypes.string,
    multimediaImage: PropTypes.string,
    multimediaCaption: PropTypes.string,
    shortUrl: PropTypes.string
}