import { BrowserRouter, Routes, Route } from "react-router-dom"
import { GlobalContextProvider } from "./context/GlobalContext"
import DefaultLayout from './layout/DefaultLayout'
import HomePage from './pages/HomePage'
import Film from './pages/Film'
import Admin from './pages/Admin'
function App() {


  return (
    <>
      <GlobalContextProvider>
        <BrowserRouter>
          <Routes>
            <Route element={<DefaultLayout />} >
              <Route index element={<HomePage />} />
              <Route path='/films/:filmId' element={<Film />} />
            </Route>
            <Route path='Admin' element={<Admin />} />
          </Routes>
        </BrowserRouter>
      </GlobalContextProvider>
    </>
  )
}

export default App
