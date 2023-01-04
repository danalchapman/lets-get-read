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
    url
}) => {

    const splitPubDate = published_date.split('T')
    const pubDate = splitPubDate[0]
    const pubTime = splitPubDate[1]

    const splitUpDate = updated_date.split('T')
    const upDate = splitUpDate[0]
    const uptime = splitUpDate[1]
    
    return (
        <article className='detail-view'>
            <h3>{title}</h3>
            <p className='byline'>{byline}</p>
            <img src={multimediaImage} alt={multimediaCaption} />
            <div className='section-container'>
                <p>{section}</p> 
                { subsection ? <p>{subsection}</p> : null }
            </div>
            <div className='date-container'>
                <p>Published: {pubDate} @{pubTime}</p>
                { updated_date ? <p>Updated: {upDate} @{uptime}</p> : null}
            </div>
            <p className='abstract'>{abstract}</p>
            <p><a href={url}>Full Story on NYT</a></p>
            <Link to='/'>
                <button className='return-home'>
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
    multimediaCaption: PropTypes.string
}