import React from 'react'
import {UserContext} from "../App";

function Post({image, content, user}) {
    const currentUser = React.useContext(UserContext)
    const isCurrentUser = currentUser === user

    return (
        <>
            {image && (
                <img
                    style={{height: 300, width: 300, objectFit: 'cover'}}
                    src={URL.createObjectURL(image)}
                    alt='post cover'
                />
            )}
            <p> {content}</p>
            <div style={{color: currentUser === user && 'green'}}>{user}</div>
        </>
    )
}


export default Post
