import React from 'react'
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

const rootNode = document.getElementById('root')

const isAuth = true


ReactDOM.render(
    <Layout>
        {isAuth ? <Header username='kama'/> : <Login/>}
        {isAuth && <Signout/>}
    </Layout>,
    rootNode
)



