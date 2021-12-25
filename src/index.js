import React from 'react'
import ReactDOM from 'react-dom'

function Header(props) {
    return <h1>hi react {props.username}</h1>
}


const rootNode = document.getElementById('root')


ReactDOM.render(
    <div>
        <Header username='kama' />

    </div>,
    rootNode
)



