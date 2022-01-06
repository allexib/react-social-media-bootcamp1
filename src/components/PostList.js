import React from 'react'

function PostList({posts}) {
    return posts.map((post, i) => (
        <React.Fragment key={i}>
            {post.image && (
                <img
                    style={{height: 200, width: 300, objectFit: 'cover'}}
                    src={URL.createObjectURL(post.image)}
                    alt='post cover'
                />
            )}
            <p> {post.content}</p>
            <div>{post.user}</div>
        </React.Fragment>
    ))
}

export default PostList
