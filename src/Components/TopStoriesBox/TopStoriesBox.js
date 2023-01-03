import { TopStoriesCard } from '../TopStoriesCard/TopStoriesCard'
import './TopStoriesBox.css'

export const TopStoriesBox = ({ stories }) => {

    const storyCards = stories.map(story => {
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
            <nav className='nav-bar'>
                <p>Other Stories</p>
            </nav>
            <div className='stories'>
                <section className='topics'>
                    <p>Topic</p>
                </section>
                <section className='story-box'>
                    {storyCards}
                </section>
            </div>
        </div>
    )
}