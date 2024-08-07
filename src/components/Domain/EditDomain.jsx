import React, { useEffect, useState } from "react";
import { useForm } from "react";
import {  Outlet,useNavigate, useParams } from "react-router-dom";
const EditDomains = () => {
    const {id} = useParams()
    const navigate = useNavigate();
    const [values,setValues] = useState({
        name:"",
        description:"",
        status:""
    })
    useEffect(()=>{
const fetchdata = async () =>
{
    try {
        const response = await fetch(`http://localhost:3000/domains/edit/${id}`);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        console.log(data)
        setValues(data);
        
      } catch (error) {
        console.error("Error fetching domain data:", error);
      }
}
fetchdata();
    }
    ,[])
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
        const response = await fetch(`http://localhost:3000/domains/edit/${id}`,{
            method:"PUT",
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
        navigate("/domains")
        alert("Domain Updated")
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
                htmlFor="ipAddress"
                className="block mb-2 text-sm font-medium text-white"
              >
                description
              </label>
              <input
                type="text"
                id="description"
                name="description"
                value={values.description}
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

export default EditDomains;
