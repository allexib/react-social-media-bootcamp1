import React, {Fragment} from 'react'
import ReactDOM from 'react-dom'

const endpoint = 'https://api.github.com/users/allexib'

function App() {
    const [user, setUser] = React.useState(null)

    React.useEffect(() => {
        async function getUser() {
            const response = await fetch(endpoint)
            const data = await response.json()
            setUser(data)
        }
        getUser()

        // fetch(endpoint)
        //     .then(response => response.json())
        //     .then(data => setUser(data))
    }, [])


    return user ? (
        <div>
            <h2>{user.name}</h2>
            <p>{user.bio}</p>
            <img alt='avatar' src={user.avatar_url} style={{height: 350}}/>
        </div>
    ) : (
        <p>loading</p>
    )
}


const rootNode = document.getElementById('root')
ReactDOM.render(<App/>, rootNode)

