import React from 'react'
import ReactDOM from 'react-dom'

const greeting = <div> Hello </div>;
const isReactUser = true
const rootNode = document.getElementById('root')

function sayGreeting() {
    if (isReactUser) {
        return greeting
    } else {
        return <div>hi python</div>
    }
}

ReactDOM.render(sayGreeting(), rootNode)



