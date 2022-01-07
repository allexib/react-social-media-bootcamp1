import React from 'react'
import {UserContext} from "../App";

function Post({image, content, user}) {
    //const isCurrentUser = currentUser === user

    return (
        <UserContext.Consumer>
            {currentUser => (
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
            )}


        </UserContext.Consumer>
    )
}

export default Post
