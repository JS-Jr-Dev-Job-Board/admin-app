import React from 'react'
import './styles.scss'
import LoginBtn from './components/OaComp/LoginBtn'
import LogoutBtn from './components/OaComp/LogoutBtn'
import EndpointPage from './components/EndpointPage/EndpointPage';
import './styles.scss'

const App = () => {

    return (
        <>
            <h1>welcome to the central nervous system</h1>
            <LoginBtn />
            <LogoutBtn />
            <EndpointPage/>
        </>
    )
}

export default App
