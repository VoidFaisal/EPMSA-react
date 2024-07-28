import React, { useState } from "react";
import { useForm } from "react";
import {  Outlet,useNavigate } from "react-router-dom";
const AddHosts = () => {
    const navigate = useNavigate();
    const [values,setValues] = useState({
        name:"",
        ip:"",
        location:"",
        status:""
    })
    const handleChange=(e)=>
    {
     
        const {name, value} = e.target;
        setValues((prevValues)=>({
            ...prevValues,
            [name]:value,
        }))
    }
    const handleSubmit = async (e) =>
    {
       try{ e.preventDefault();
        const response = await fetch("http://localhost:3000/hosts",{
            method:"POST",
            headers:
            {
                "Content-Type":"application/json"
            },
            body:JSON.stringify(values)
        })
        console.log(values)
        if(!response.ok)
        {
            throw new Error("Network Response was not ok")

        }
        const data = response.json();
        console.log("success:",data)
        navigate("/hosts")
        alert("Host Added")
    }catch(error)
        {
            console.log("error:",error)
        }
    }
  return (
    <>
      <div className="min-h-screen bg-gray-900">
        <div className="pt-5">
          <form className="max-w-sm mx-auto" onSubmit={handleSubmit}>
            <div className="mb-5">
              <label
                htmlFor="name"
                className="block mb-2 text-sm font-medium text-white"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={values.name}
                onChange={handleChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                required
              />
            </div>

            <div className="mb-5">
              <label
                htmlFor="ip"
                className="block mb-2 text-sm font-medium text-white"
              >
                IP
              </label>
              <input
                type="text"
                id="ip"
                name="ip"
                value={values.ip}
                onChange={handleChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                required
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="location"
                className="block mb-2 text-sm font-medium text-white"
              >
                Location
              </label>
              <input
                type="text"
                id="location"
                name="location"
                value={values.location}
                onChange={handleChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                required
              />
            </div>
            <div className="mb-5">
                <label htmlFor="status" className="block mb-2 text-sm font-medium text-white">status</label>
              <select name="status" id="status" value={values.status} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
               >
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>

              </select>
            </div>
            <button
              type="submit"
              className="text-white bg-gray-900 border border-white hover:scale-105 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center mb-5"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default AddHosts;