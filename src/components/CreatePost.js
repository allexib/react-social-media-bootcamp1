import React from 'react'

function CreatePost({user, setPosts, posts}) {
    const [content, setContent] = React.useState('')
    const [image, setImage] = React.useState(null)

    function handleSubmit(event) {
        event.preventDefault()
        const post = {content, image, user}
        const newPost=[post, ...posts]
        setPosts(newPost)

    }

    return (
        <div>
            <h1>Create New Post</h1>
            <form onSubmit={handleSubmit}>
                <input type='text' placeholder='add post content'
                       onChange={event => setContent(event.target.value)}
                />
                <input type='file'
                       onChange={event => setImage(event.target.files[0])}
                />
                <button type='submit'>submit post</button>
            </form>
        </div>
    )
}

export default CreatePost
