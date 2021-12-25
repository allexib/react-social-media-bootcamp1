import React from 'react'
import ReactDOM from 'react-dom'

const year = 2022
const greeting = (
    <div>
        <h1>hi in {year}</h1>
        <p>welcome to react</p>
    </div>
)
const rootNode = document.getElementById('root')




ReactDOM.render(greeting, rootNode)



