import React, { useEffect, useState } from "react";
import { Outlet,Link } from "react-router-dom";
import { FaTrashAlt } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import "../style.css";
import {formatDate} from "../../helper/Helper";
import {DeleteHelper} from "../../helper/DeleteHelper";
const ListProjects = () => {
        const   [data,setData] = useState([]);
        const [fetchData,setFetchData] = useState(false);
  useEffect(()=>
  {
    const handleTableData = async()=>
    {
      try {
       
        const response  = await fetch("http://localhost:3000/projects")
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

  },[fetchData]);
  const handleDelete = async (projectId) => {
    const response = await DeleteHelper({ view: "projects", choice: "delete", id: projectId, });
    console.log(response)
    if(response.msg=="deleted")
    {
      setFetchData((prev)=>!prev);
    }
  };
  return (
    <>
      <div className="w-full min-h-screen flex justify-center bg-gray-900 ">
        <div className="w-max h-full">
          <h1 className="text-center py-3 text-white">Projects</h1>
          {data.length>0 ? (<table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 table table-auto">
            <thead className="text-xs text-white uppercase bg-gray-600 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="lg:px-6 lg:py-3">
                  Project Name
                </th>
                <th scope="col" className="lg:px-6 lg:py-3">
                  Employee ID
                </th>
                <th scope="col" className="lg:px-6 lg:py-3">
                  Description
                </th>
                <th scope="col" className="lg:px-6 lg:py-3">
                  Status
                </th>
                <th scope="col" className="lg:px-6 lg:py-3">
                  Start Date
                </th>
                <th scope="col" className="lg:px-6 lg:py-3">
                  End Date
                </th>
                <th scope="col" className="lg:px-6 lg:py-3">
                  Customer Name
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
                  {data.name?data.name:""}
                </th>
                <td className="lg:px-6 lg:py-3">{data.employeeId?data.employeeId:""}</td>
                <td className="lg:px-6 lg:py-3">{data.description?data.description:""}</td>
                <td className="lg:px-6 lg:py-3">{data.status?data.status:""}</td>
                <td className="lg:px-6 lg:py-3">{formatDate(data.startDate)?formatDate(data.startDate):""}</td>
                <td className="lg:px-6 lg:py-3">{formatDate(data.endDate)?formatDate(data.endDate):""}</td>
                <td className="lg:px-6 lg:py-3">{data.customerId.name?data.customerId.name:""}</td>
                <td className="lg:px-6 lg:py-3 "><Link to={`edit/${data._id}`}><FaEdit className="cursor-pointer inline-block mr-4 lg:text-normal text-blue-600 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-150 duration-300"/></Link><Link onClick={()=>handleDelete(data._id)}><FaTrashAlt className="cursor-pointer inline-block lg:text-normal text-red-600 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-150 duration-300"/></Link></td>
              </tr>)}
              
            </tbody>
          </table>
          ):("")}
          <div className="flex justify-center my-6 ">
      <Link
        to="/projects/new"
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

export default ListProjects;
