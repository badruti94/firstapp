import React from 'react'

const Post = (props) => {
    console.log(props);
    const id = props.match.params.post_id
    return (
        <div>
            <div className="card">
                <div className="card-header">
                    {id}
                </div>
                <div className="card-body">
                    <h5 className="card-title">Special title treatment</h5>
                    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </div>
    )
}

export default Post
