import { AuthContextProvider } from 'contexts/AuthContext/AuthContext'
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from 'views/auth/Login/'
import Adoption from 'views/pets/Adoption/Adoption'
import App from './App'
import reportWebVitals from './reportWebVitals'
import Home from './views/home/Home/Home'
import AboutUs from './views/pets/AboutUs/AboutUs'
import Donation from './views/pets/Donation/Donation'
import Info from './views/pets/Info/Info'
import Shop from './views/pets/Shop/Shop'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthContextProvider>
        <Routes>
          <Route path="/" element={<App />}>
            <Route path="/" element={<Home />} />
            <Route path="auth/login" element={<Login />} />
            <Route path="pets/adoption" element={<Adoption />} />
            <Route path="pets/donation" element={<Donation />} />
            <Route path="pets/info" element={<Info />} />
            <Route path="pets/shop" element={<Shop />} />
            <Route path="pets/about-us" element={<AboutUs />} />
          </Route>
        </Routes>
      </AuthContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
