import React from 'react'
import { render } from 'react-dom'
import { Auth0Provider } from '@auth0/auth0-react'
import App from './src/App'

const domain = process.env.REACT_APP_AUTH0_DOMAIN
const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID

render(
  <Auth0Provider
    domain={domain}
    clientId={clientId}
    redirectUri={window.location.origin}
  >
    <App />
  </Auth0Provider>,
  document.querySelector('#root')
)
