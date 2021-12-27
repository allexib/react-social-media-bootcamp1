import React, {Fragment} from 'react'
import ReactDOM from 'react-dom'


function App() {
    const inputState = React.useState('')
    const inputValue =inputState[0]
    const setInputValue=inputState[1]

    function handleInputChange(event) {
        setInputValue  (event.target.value)
        // console.log(value)
    }

    return (
        <div id='app'>
            <input onChange={handleInputChange}/>
            <p>{inputValue}</p>
        </div>
    )
}


const rootNode = document.getElementById('root')
ReactDOM.render(<App/>, rootNode)



