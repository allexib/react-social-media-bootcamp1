import React from 'react'
import ReactDOM from 'react-dom'

function Header(props) {
    if (true) {
        return <h1>hi react {props.username}</h1>
    }else {
        return <h1>hi guest</h1>
    }

}

function Layout(props) {
    return <div style={{background:'gold'}}>
        {props.children}
    </div>
}

const rootNode = document.getElementById('root')


ReactDOM.render(
    <Layout>
        <Header username='kama' />

    </Layout>,
    rootNode
)



