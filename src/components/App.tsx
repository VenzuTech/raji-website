import { Route, Routes } from 'react-router-dom';

import Home from './Home';

function App() {
  return (
    <>
      <h1 className="text-center text-6xl py-5">
        Hello world!
      </h1>
      <Routes>
        <Route path="/" Component={Home} />
      </Routes>
    </>
  )
}

export default App
