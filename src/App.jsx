import React from "react"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Customers from "./components/customers/Customers"
import AddCustomers from "./components/customers/AddCustomers"
import EditCustomers from "./components/customers/EditCustomers"
import { createBrowserRouter,createRoutesFromElements,Route,RouterProvider } from "react-router-dom"
function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Navbar/>}>
        <Route index element={<Hero/>}/>
        <Route path="/customers" element={<Customers/>}/>
        <Route path="/customers/new" element={<AddCustomers/>}/>
        <Route path="/customers/Edit/:id" element={<EditCustomers/>}/>
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
