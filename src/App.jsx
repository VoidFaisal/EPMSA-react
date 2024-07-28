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
import ListTasks from "./components/Tasks/ListTasks"
import AddTasks from "./components/Tasks/AddTasks"
import EditTasks from "./components/Tasks/EditTasks"
import ListEmployee from "./components/Employee/ListEmployee"
import AddEmployee from "./components/Employee/AddEmployee"
import ListServers from "./components/Server/ListServers"
import AddServers from "./components/Server/AddServer"
import ListDomain from "./components/Domain/ListDomain"
import AddDomain from "./components/Domain/AddDomains"
import ListHosts from "./components/host/ListHosts"
import AddHosts from "./components/host/AddHosts"
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
        <Route path="/tasks" element={<ListTasks/>}/>
        <Route path="/tasks/new" element={<AddTasks/>}/>
        <Route path="/tasks/edit/:id" element={<EditTasks/>}/>
        <Route path="/employees" element={<ListEmployee/>}/>
        <Route path="/employees/new" element={<AddEmployee/>}/>
        <Route path="/servers" element={<ListServers/>}/>
        <Route path="/servers/new" element={<AddServers/>}/>
        <Route path="/domains/" element={<ListDomain/>}/>
        <Route path="/domains/new" element={<AddDomain/>}/>
        <Route path="/hosts" element={<ListHosts/>}/>
        <Route path="/hosts/new" element={<AddHosts/>}/>
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
