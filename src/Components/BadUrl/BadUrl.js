import React from 'react'
import { Link } from 'react-router-dom'
import './BadUrl.css'

export const BadUrl = () => {
    return (
        <section>
            <p>You've reached an invalid URL. Please try again, or return to the front page.</p>
            <Link to='/'>
                <button>
                    Return to the Front Page
                </button>
            </Link>
        </section>
    )
}