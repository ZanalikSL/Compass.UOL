import { useState } from 'react'
import { Routes, Route } from 'react-router'
import { RequireAuth } from './auth/require-auth'
import { RequireAuthHome } from './auth/require-auth-home'
import { AuthProvider } from './context/auth-provider'
import { UserContext } from './context/user'
import Error401 from './pages/401/401'
import Error404 from './pages/404/404'
import Home from './pages/home/home'
import Login from './pages/login/login'
import Search from './pages/search/search'
import UserPage from './pages/user-page/user-page'

import './styles/global.scss'

const App = () => {
  const [usersRepos, setUsersRepos] = useState()
  const value: any = { usersRepos, setUsersRepos }

  return (
    <UserContext.Provider value={value}>
      <AuthProvider>
        <Routes>
          <Route
            path="/"
            element={
              <RequireAuthHome>
                <Home />
              </RequireAuthHome>
            }
          ></Route>
          <Route
            path="/search"
            element={
              <RequireAuth>
                <Search />
              </RequireAuth>
            }
          ></Route>
          <Route
            path="/user"
            element={
              <RequireAuth>
                <UserPage />
              </RequireAuth>
            }
          ></Route>
          {/* <Route path="/search" element={<Search />} />
        <Route path="/user" element={<UserPage />} /> */}
          <Route path="/login" element={<Login />} />
          <Route path="/401" element={<Error401 />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </AuthProvider>
    </UserContext.Provider>
  )
}
export default App

{
  /* <Route path="/" element={<Home />}> */
}
