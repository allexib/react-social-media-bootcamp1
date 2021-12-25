import React from 'react'
import ReactDOM from 'react-dom'

const Header = () => {
    return <h1>hi react</h1>
}


// class Header extends React.Component{
//     render(){
//         return<h1>hi react</h1>
//     }
// }

const rootNode = document.getElementById('root')


ReactDOM.render(<Header/>, rootNode)



