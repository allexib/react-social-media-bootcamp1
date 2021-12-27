import React, {Fragment} from 'react'
import ReactDOM from 'react-dom'


function App() {
    const [language, setLanguage] = React.useState('python')
    const [yearsEperience, setYearsExperience] = React.useState(0)

    return (
        <div>
            <button onClick={() => setLanguage('js')}>chang lang</button>
            <div>
                <input
                    type='number'
                    onChange={event => setYearsExperience(event.target.value)}
                />
            </div>

            <p>i am learning {language}</p>
            <p>i have {yearsEperience} years of experience</p>
        </div>
    )
}


const rootNode = document.getElementById('root')
ReactDOM.render(<App/>, rootNode)



