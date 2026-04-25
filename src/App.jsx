import { BrowserRouter, Routes, Route } from "react-router-dom"
import DefaultLayout from './layout/DefaultLayout'
import HomePage from './pages/HomePage'
import Film from './pages/Film'
import { GlobalContextProvider } from "./context/GlobalContext"

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
          </Routes>
        </BrowserRouter>
      </GlobalContextProvider>
    </>
  )
}

export default App
