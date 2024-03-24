import React from 'react'

import { BrowserRouter , Routes , Route } from 'react-router-dom'
import App from '../App'
import Main from '../components/Main/Main'

export default function Router() {
  return (
    <div>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<App />}>
                    <Route index element={<Main />}/>
                </Route>
            </Routes>
        </BrowserRouter>
    </div>
  )
}
