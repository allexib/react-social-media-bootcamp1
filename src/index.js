import React, {Fragment} from 'react'
import ReactDOM from 'react-dom'

const baseUrl = 'https://api.github.com/users/'

function App() {
    const [username, setUsername] = React.useState('allexib')
    const [user, setUser] = React.useState(null)

    React.useEffect(() => {
        async function getUser(route) {
            const response = await fetch(`${baseUrl}${route}`)
            const data = await response.json()
            setUser(data)
        }

        getUser(username)
        // fetch(endpoint)
        //     .then(response => response.json())
        //     .then(data => setUser(data))
    }, [])

    return (
        <div>
            <input type='text' placeholder='input username'
                   onChange={event => setUsername(event.target.value)}/>
            <button>search</button>
            <button>clear</button>
            {user ? (
                <div>

                    <h2>{user.name}</h2>
                    <p>{user.bio}</p>
                    <img alt='avatar' src={user.avatar_url} style={{height: 350}}/>
                </div>
            ) : (
                <p>loading</p>
            )}
        </div>
    )
}


const rootNode = document.getElementById('root')
ReactDOM.render(<App/>, rootNode)

