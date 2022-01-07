import React from 'react'

function Post({image, content, user, currentUser}) {
    const isCurrentUser = currentUser === user

    return (
        <React.Fragment>
            {image && (
                <img
                    style={{height: 200, width: 300, objectFit: 'cover'}}
                    src={URL.createObjectURL(image)}
                    alt='post cover'
                />
            )}
            <p> {content}</p>
            <div style={{color: isCurrentUser && 'green'}}>{user}</div>
        </React.Fragment>
    )
}

export default Post
