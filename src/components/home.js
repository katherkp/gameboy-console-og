import React from 'react'

export const Home = () => {
    return (
        <Def>
            <main>
                <h1>Video Game Review Here</h1>
                <div>
                    <img src="/images/kirby-phone.jpg" alt="Kirby playing game on a phone" />
                <a href="/videogame-review">
                    <button className="btn-primary">Video Game Review Page</button>
                </a>
                </div>
            </main>
        </Def>
    )
}

module.exports = home