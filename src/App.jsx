
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import FooterComponent from './components/FooterComponent'
import HeaderComponent from './components/HeaderComponent'
import ListEmployeeComp from './components/ListEmployeeComp'
import EmployeeComponent from './components/EmployeeComponent'

function App() {

  return (
    <>
      <BrowserRouter>
        <HeaderComponent/>
        <Routes>
          <Route path='/' element = { <ListEmployeeComp/> }></Route>
          <Route path='/employees' element = { <ListEmployeeComp/> }></Route>
          <Route path='/add-employee' element = { <EmployeeComponent/>}></Route>
          <Route path='/edit-employee/:id' element = { <EmployeeComponent/> }></Route>
        </Routes>
        <FooterComponent/>
      </BrowserRouter>
    </>
  )
}

export default App
