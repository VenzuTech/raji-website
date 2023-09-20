import { useAuth } from "react-oidc-context";
import { Route, Routes } from 'react-router-dom';

import React from "react";
import Home from './Home';

function App() {
  React.useEffect(() => {
    console.log(`App is running in '${import.meta.env.MODE}' mode`)
  }, []);

  const auth = useAuth();
  if (import.meta.env.MODE == 'development') {
    console.log(auth);
  }
  
  React.useEffect(() => {
    return auth.events.addUserLoaded(() => {
      window.history.replaceState(
        {},
        document.title,
        window.location.pathname
      );
  });
  }, [auth.events, auth.signinSilent]);

  if (auth.isLoading) {
    return <div>Loading...</div>;
  }

  if (auth.error) {
    return <div>Oops... {auth.error.message} (check browser console!)</div>;
  }

  if (!auth.isAuthenticated) {
    auth.signinRedirect();
  } else {
    return (
      <>
        <h1 className="text-center text-6xl py-5">
          Hello {auth.user?.profile?.name} {}
        </h1>
        <div className="gap-5">
            <button onClick={() => auth.signoutRedirect()}>Logout</button>
          </div>
          <Routes>
            <Route path="/" Component={Home} />
          </Routes>
      </>
    )
  }
}

export default App
