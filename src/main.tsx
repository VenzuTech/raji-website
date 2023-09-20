import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter } from 'react-router-dom'

import { AuthProvider, AuthProviderProps } from 'react-oidc-context'
import App from './components/App.tsx'
import './index.css'

const oidcConfig: AuthProviderProps = {
  authority: `${import.meta.env.VITE_KEYCLOAK_URL}/realms/${import.meta.env.VITE_KEYCLOAK_REALM}`,
  client_id: import.meta.env.VITE_KEYCLOAK_CLIENT,
  redirect_uri: `${window.location.protocol}//${window.location.host}`,
  post_logout_redirect_uri: `${window.location.protocol}//${window.location.host}`
};

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HashRouter>
      <AuthProvider {...oidcConfig}>
        <App />
      </AuthProvider>        
    </HashRouter>
  </React.StrictMode>,
)
