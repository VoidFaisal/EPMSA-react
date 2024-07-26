import React from "react"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Customers from "./components/customers/Customers"
import AddCustomers from "./components/customers/AddCustomers"
import EditCustomers from "./components/customers/EditCustomers"
import DeleteCustomers from "./components/customers/DeleteCustomers"
import ListProjects from "./components/projects/ListProjects"
import AddProjects from "./components/projects/AddProjects"
import EditProjects from "./components/projects/EditProjects"
import DeleteProjects from "./components/projects/DeleteProjects"
import { createBrowserRouter,createRoutesFromElements,Route,RouterProvider } from "react-router-dom"
function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Navbar/>}>
        <Route index element={<Hero/>}/>
        <Route path="/customers" element={<Customers/>}/>
        <Route path="/customers/new" element={<AddCustomers/>}/>
        <Route path="/customers/edit/:id" element={<EditCustomers/>}/>
        <Route path="/customers/delete/:id" element={<DeleteCustomers/>}/>
        <Route path="/projects" element={<ListProjects/>}/>
        <Route path="/projects/new" element={<AddProjects/>}/>
        <Route path="/projects/edit/:id" element={<EditProjects/>}/>
        <Route path="/projects/delete/:id" element={<DeleteProjects/>}/>
        </Route>
    )
  )

  return (
  //  <>
  //  <Navbar/>
  //  <Customers/>
  //  </>
    <RouterProvider router = {router}/>
       )
}

export default App
