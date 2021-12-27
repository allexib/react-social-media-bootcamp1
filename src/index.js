import React, {Fragment} from 'react'
import ReactDOM from 'react-dom'


function App() {
    const [developer, setDeveloper] = React.useState({
        language:'python',
        yearsExperience:0

    })

    // const [language, setLanguage] = React.useState('python')
    // const [yearsExperience, setYearsExperience] = React.useState(0)

    return (
        <div>
            <button onClick={() => setDeveloper({
                language:'js',
                yearsExperience:0
            })}>chang lang</button>
            <div>
                <input
                    type='number'
                    onChange={event => setDeveloper({
                        ...developer,
                        yearsExperience:event.target.value
                    })}
                />
            </div>

            <p>i am learning {developer.language}</p>
            <p>i have {developer.yearsExperience} years of experience</p>
        </div>
    )
}


const rootNode = document.getElementById('root')
ReactDOM.render(<App/>, rootNode)



