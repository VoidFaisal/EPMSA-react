import React, { useEffect, useState } from "react";
import { Outlet,Link } from "react-router-dom";
import { FaTrashAlt } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import "../style.css";

const Customers = () => {
        const   [data,setData] = useState([]);
  useEffect(()=>
  {
    const handleTableData = async()=>
    {
      try {
       
        const response  = await fetch("http://localhost:3000/customers")
      if(!response.ok)
      {
        throw new Error('Network response was not ok');
      }
       const data = await response.json();
       console.log(data);
       setData(data);
      } catch (error) {
        console.log('Error:', error);
      }
      
    }
    handleTableData();
  },[]);
  return (
    <>
      <div className="w-full min-h-screen flex justify-center bg-gray-900 ">
        <div className="w-max h-full">
          <h1 className="text-center py-3 text-white">Customers</h1>
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-white uppercase bg-gray-600 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="lg:px-6 lg:py-3">
                  Name
                </th>
                <th scope="col" className="lg:px-6 lg:py-3">
                  Email
                </th>
                <th scope="col" className="lg:px-6 lg:py-3">
                  Phone
                </th>
                <th scope="col" className="lg:px-6 lg:py-3">
                  Address
                </th>
                <th scope="col" className="lg:px-6 lg:py-3">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {data.map((data)=><tr key={data._id} className="bg-gray-900 border-b dark:bg-gray-800 dark:border-gray-700 text-white">
                <th
                  scope="row"
                  className="lg:px-6 lg:py-4 lg:font-medium text-white lg:whitespace-nowrap dark:text-white apple capitalize"
                >
                  {data.name}
                </th>
                <td className="lg:px-6 lg:py-3">{data.email}</td>
                <td className="lg:px-6 lg:py-3">{data.phone}</td>
                <td className="lg:px-6 lg:py-3">{data.address}</td>
                <td className="lg:px-6 lg:py-3"><Link to={`Edit/${data._id}`}><FaEdit className="cursor-pointer inline-block mx-3 lg:text-lg "/></Link><Link><FaTrashAlt className="cursor-pointer inline-block lg:text-lg"/></Link></td>
              </tr>)}
              
            </tbody>
          </table>
          <div className="flex justify-center my-6 ">
      <Link
        to="/customers/new"
        className="text-white  hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-600 focus:outline-white dark:focus:ring-white cursor-pointer border border-gray-200"
      >
        Add New
      </Link>
    </div>        
        </div>
      
      </div>
      <Outlet />
    </>
  );
};

export default Customers;
