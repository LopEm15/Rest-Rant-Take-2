const React = require('react')
const Def = require('../default')

function show (data) {
    let comments = (
        <h3 className="inactive">
            No comments yet!
        </h3>
    )
    if (data.place.comments.length) {
        comments = data.place.comments.map (c => {
            return (
                <div className="border">
                    <h2 className="rant">{c.rant ? 'Rant! 😡' : 'Rave! 😻'}</h2>
                    <h4>{c.content}</h4>
                    <h3>
                        <strong>- {c.author}</strong>
                    </h3>
                    <h4>Rating: {c.stars}</h4>
                </div>
            )
        })
    }
    return (
        <Def>
          <main className="show">
            <div className="row">
                <h1>{data.place.name}</h1>
            <div className="col-sm-6">
                    <img src={data.place.pic}/>
                    <h3>
                        Located in {data.place.city}, {data.place.state}
                    </h3>
            </div>
            <div className="col-sm-6">
                <h2>Rating</h2>
                <p className="text-center">Not Rated</p>
                <h3>
                    {data.place.showEstablished()}
                </h3>
                <h4>
                    Serving {data.place.cuisines}
                </h4>
                <a href={`/places/${data.id}/edit`} className="btn btn-warning">
                    Edit
                </a>
                <form method="POST" action={`/places/${data.id}?_method=DELETE`}>
                    <button type="submit" className="btn btn-danger">
                        Delete
                    </button>
                </form>
                </div>
                <div>
                <h2>Comments</h2>
                {comments}
                </div>
                <div className="comment form">
                    <form method="POST" action="/show">
                        <div className="row">
                        <div className="col-sm-6 col-md-4 col-lg-3 form-group forms-name">
                                <label htmlFor="author">Author:</label>
                                <input className="form-control"
                                placeholder="Your name here"
                                type="text"
                                id="author"
                                name="author"/>
                            </div>
                            <div className="col-sm-6 col-md-4 col-lg-3 form-group forms-name">
                                <label htmlFor="content">Content</label>
                                <input className="form-control"
                                placeholder="Write your comment here!"
                                type="textarea"
                                id="content"
                                name="content"/>
                            </div>
                            <div className="col-sm-6 col-md-4 col-lg-3 form-group forms-name">
                                <label htmlFor="stars" for="formControlRange"className="text-warning d-flex p-2">Star Rating</label>
                                <input className="form-control-range"
                                type="range"
                                id="formControlRange"
                                name="stars"/>
                            </div>
                            <div className="col-sm-6 col-md-4 col-lg-3  d-flex p-2">
                                <label htmlFor="rant" className="checkbox d-flex p-2">Rant 🤬 </label>
                                    <input
                                    className="checkbox d-flex p-2"
                                    type="checkbox" 
                                    id="rant" 
                                    name="rant"
                                    />
                            </div>
                        </div>
                            <div className="p-2">
                                <input 
                                className=" btn-primary p-2" 
                                type="submit" 
                                value="Add Comment"
                                />
                            </div>
                    </form>
                </div>
            </div>
          </main>
        </Def>
    )
}

module.exports = show
