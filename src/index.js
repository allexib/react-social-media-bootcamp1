import React, {Fragment} from 'react'
import ReactDOM from 'react-dom'


function App() {
     const [language,setLanguage] = React.useState('python')

    return (
        <div>
            <button onClick={()=>setLanguage('js')}>chang lang</button>
            <p>i am learning {language}</p>
        </div>
    )
}


const rootNode = document.getElementById('root')
ReactDOM.render(<App/>, rootNode)



