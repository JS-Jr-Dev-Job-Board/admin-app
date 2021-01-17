import React from 'react'
import { render } from 'react-dom'
import './styles.scss'

function App(props){
    return (
        <div>
            <h1>welcome to the central nervous system</h1>
        </div>
    )
}

render(
    <App />, 
    document.querySelector('#root')
)