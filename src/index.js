import React, {Fragment} from 'react'
import ReactDOM from 'react-dom'


function App() {
    const [developer, setDeveloper] = React.useState({
        name: '',
        language: 'python',
        yearsExperience: 0,
        isEmployed: false

    })

    // const [language, setLanguage] = React.useState('python')
    // const [yearsExperience, setYearsExperience] = React.useState(0)
    React.useEffect(() => {
        document.title = developer.name
        console.log('runs')
    }, [developer.name])

    function handleChangeName(event) {
        setDeveloper({
            ...developer,
            name: event.target.value
        })
    }

    function handleChangeLanguage() {
        setDeveloper({
            language: 'js',
            yearsExperience: 0
        })
    }

    function handleChangeYearsExperience(event) {
        setDeveloper({
            ...developer,
            yearsExperience: event.target.value
        })
    }

    function handleToggleEmployment() {
        setDeveloper(prevState => ({
            ...prevState,
            isEmployed: !prevState.isEmployed
        }))
    }

    return (
        <div>
            <button onClick={handleToggleEmployment}>Toggle Employment Status</button>
            <button onClick={handleChangeLanguage}
            >chang lang
            </button>
            <div>
                <input type='number' onChange={handleChangeYearsExperience}/>
            </div>
            <div>
                <input type='text' onChange={handleChangeName} placeholder='change name'/>
            </div>

            <p>i am learning {developer.language}</p>
            <p>i have {developer.yearsExperience} years of experience</p>
            <p>Employment status: {developer.isEmployed ? 'Employed' : 'Unemployed'}</p>
        </div>
    )
}


const rootNode = document.getElementById('root')
ReactDOM.render(<App/>, rootNode)



