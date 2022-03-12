import { CssBaseline } from '@mui/material'
import { Fragment } from 'react'
import { Outlet } from 'react-router-dom'

const App = () => {
  return (
    <Fragment>
      <CssBaseline />
      <Outlet />
    </Fragment>
  )
}

export default App
