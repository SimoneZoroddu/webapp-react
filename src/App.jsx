import { BrowserRouter, Routes, Route } from "react-router-dom"
import DefaultLayout from './layout/DefaultLayout'
import HomePage from './pages/HomePage'
import Film from './pages/Film'


function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout/>} >
            <Route index element={<HomePage/>} />
            <Route path='/films/:filmId' element={<Film/>}  />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
