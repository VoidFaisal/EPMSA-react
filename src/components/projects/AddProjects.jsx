import React, { useState, useEffect } from "react";
import { Outlet, Link, useNavigate } from "react-router-dom";

const AddProjects = () => {
  const navigate = useNavigate();
  const [customers, setCustomers] = useState([]);
  const [values, setValues] = useState({
    name: "",
    employeeId: "",
    description: "",
    status: "",
    startDate: "",
    endDate: "",
    customerId: "",
  });

  useEffect(() => {
    const fetchCustomerData = async () => {
      try {
        const response = await fetch("http://localhost:3000/customers");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setCustomers(data);
      } catch (error) {
        console.error("Error fetching customer data:", error);
      }
    };

    fetchCustomerData();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3000/projects", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      console.log("Success:", data);
      navigate("/projects");
    } catch (error) {
      console.log("Error:", error);
    }
  };

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
                Project Name
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
                htmlFor="employeeId"
                className="block mb-2 text-sm font-medium text-white"
              >
                Employee ID
              </label>
              <input
                type="text"
                id="employeeId"
                name="employeeId"
                value={values.employeeId}
                onChange={handleChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                required
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="description"
                className="block mb-2 text-sm font-medium text-white"
              >
                Description
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
              <label
                htmlFor="status"
                className="block mb-2 text-sm font-medium text-white"
              >
                Status
              </label>
              <input
                type="text"
                id="status"
                name="status"
                value={values.status}
                onChange={handleChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                required
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="startDate"
                className="block mb-2 text-sm font-medium text-white"
              >
                Start Date
              </label>
              <input
                type="date"
                id="startDate"
                name="startDate"
                value={values.startDate}
                onChange={handleChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                required
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="endDate"
                className="block mb-2 text-sm font-medium text-white"
              >
                End Date
              </label>
              <input
                type="date"
                id="endDate"
                name="endDate"
                value={values.endDate}
                onChange={handleChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                required
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="customerId"
                className="block mb-2 text-sm font-medium text-white"
              >
                Customer
              </label>
              <select
                id="customerId"
                name="customerId"
                value={values.customerId}
                onChange={handleChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                required
              >
                <option value="" disabled>Select a customer</option>
                {customers.map((customer) => (
                  <option key={customer._id} value={customer._id}>
                    {customer.name}
                  </option>
                ))}
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

export default AddProjects;
