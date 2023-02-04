const React = require('react')
const Def = require('../default')

function show (data) {
    return (
        <Def>
          <main className="show">
            <h1>{data.place.name}</h1>
           <div><img src={data.place.pic}/></div>
            <h2>Rating</h2>
            <p className="text-center">Not Rated</p>
            <h2>Description</h2>
            <p className="text-center">
            Located in {data.place.city}, {data.place.state}
            </p>
            <h2>Comments</h2>
            <p className="text-center">No comments yet!</p>
            <a href={`/places/${data.id}/edit`} className="btn btn-warning">
                Edit
            </a>
            <form method="POST" action={`/places/${data.id}?_method=DELETE`}>
                <button type="submit" className="btn btn-danger">
                    Delete
                </button>
            </form>
          </main>
        </Def>
    )
}

module.exports = show
