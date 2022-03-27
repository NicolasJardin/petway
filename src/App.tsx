import { CssBaseline } from '@mui/material'
import { Fragment } from 'react'
import { Outlet } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'

const App = () => {
  return (
    <Fragment>
      <CssBaseline />
      <Toaster />
      <Outlet />
    </Fragment>
  )
}

export default App
