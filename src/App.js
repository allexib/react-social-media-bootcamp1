import React from 'react'
import Login from './components/Login'
import Header from './components/Header'
import CreatePost from './components/CreatePost'

function App() {
    const [user, setUser] = React.useState('reed')
    const [posts, setPosts] = React.useState([])

    React.useEffect(() => {
        document.title = user ? `${user}'s Feed` : 'Please login'
    }, [user])

    if (!user) {
        return <Login setUser={setUser}/>
    }

    return <>
        <Header user={user} setUser={setUser}/>
        <CreatePost user={user} setPosts={setPosts} posts={posts}/>
        {posts.map((post, i) => (
            <React.Fragment key={i}>
                {post.image && (
                    <img
                        style={{height: 200, width: 300, objectFit: 'cover'}}
                        src={URL.createObjectURL(post.image)}
                        alt='post cover'
                    />
                )}
                <p> {post.content}</p>
                <div>{user}</div>
            </React.Fragment>
        ))}
    </>
}

export default App
