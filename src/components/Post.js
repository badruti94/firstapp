import { useEffect, useState } from 'react'
import axios from 'axios'

const Post = (props) => {
    console.log(props);
    const id = props.match.params.post_id
    const [post, setPost] = useState([])

    useEffect(() => {
        (async () => {
            const res = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
            setPost(res.data)
        })()

    }, [])

    return (
        <div>
            <div className="card">
                <div className="card-header">
                    {post.title}
                </div>
                <div className="card-body">
                    <p className="card-text">{post.body}</p>
                </div>
            </div>
        </div>
    )
}

export default Post
