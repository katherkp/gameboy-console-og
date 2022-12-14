const React = require('react')
const Def = require('../default')

function index (data) {
    let videogamesFormated = data.videogames.map((videogame) => {
        return (
            <div className="col-sm-6">
                <h2>
                    <a href={`/videogames/${videogame.id}`}>
                    {videogame.name}
                    </a>
                </h2>
            </div>
        )
    }

    )
}