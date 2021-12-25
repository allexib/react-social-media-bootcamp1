import React, {Fragment} from 'react'
import ReactDOM from 'react-dom'

function Header(props) {
    return <h1>hi react {props.username}</h1>
}

function Layout(props) {
    return <div style={{background: 'gold'}}>
        {props.children}
    </div>
}

function Login() {
    return <p>please login</p>
}

function Signout() {
    return <button>signout</button>
}


const isAuth = true

function App() {
    return (<Layout>
        {isAuth ? (
            <>
                <Header username='kama'/>
                <Signout/>
            </>
        ) : <Login/>}
        {/*{isAuth && <Signout/>}*/}
    </Layout>)
}

const rootNode = document.getElementById('root')
ReactDOM.render(<App/>, rootNode)



