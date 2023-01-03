import { TopStoriesCard } from '../TopStoriesCard/TopStoriesCard'
import './TopStoriesBox.css'

export const TopStoriesBox = () => {
    return (
        <div className='front-page'>
            <nav className='nav-bar'>
                <p>Other Stories</p>
            </nav>
            <div className='stories'>
                <section className='topics'>
                    <p>Topic</p>
                </section>
                <TopStoriesCard />
            </div>
        </div>
    )
}