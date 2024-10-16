import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Login } from './Component/Login'
import { Signup } from './page/Signup'
import HomePage from './page/HomePage'
import Dashboard from './page/Dashboard'
import { CandidatePage } from './Component/CandidatePage'
import { CandidateDetails } from './page/CandidateDetails'
import { ElectionResults } from './page/ElectionResults'

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/signup',
    element: <Signup />
  },
  {
    path: '/dashboard',
    element: <Dashboard />
  },
  {
    path: '/candidates',
    element: <CandidatePage />
  },
  {
    path: '/candidates/:id',
    element: <CandidateDetails />
  },
  {
    path: '/electionResults',
    element: <ElectionResults />
  }
])

function App() {
  return <RouterProvider router={router} />
}

export default App
