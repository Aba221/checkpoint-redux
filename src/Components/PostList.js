import React from 'react'
import { connect } from 'react-redux'
import '../App.css';

const mapStateToProps = state => {
    return {
        posts: state.posts
    }
}
const PostList = (props) => {
    return (
        <div>
            {props.posts.map((post) => <div id={post.id}>
                <h1 className="post-title">{post.title}</h1>
                <p className="post-content">{post.content}</p>
            </div>)}
        </div>
    )
}

export default connect(mapStateToProps)(PostList)