import React, {Fragment} from 'react'
import ReactDOM from 'react-dom'


function App() {
    const people = ['kama', 'dave', 'jane']

    return people.map(person => <p>{person}</p>)

}

const rootNode = document.getElementById('root')
ReactDOM.render(<App/>, rootNode)



