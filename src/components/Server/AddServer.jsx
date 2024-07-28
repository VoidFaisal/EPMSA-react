import React, { useState, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

const AddServer = () => {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    name: "",
    ipAddress: "",
    location: "",
    status: "",
    uptime: "",
    type: "",
    lastMaintenanceDate: "",
  });

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
      const response = await fetch("http://localhost:3000/servers", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });
console.log(values);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      console.log("Success:", data);
      navigate("/servers");
      alert("Server Added");
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
                IpAddress
              </label>
              <input
                type="text"
                id="ipAddress"
                name="ipAddress"
                value={values.ipAddress}
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
                type="Text"
                id="location"
                name="location"
                value={values.location}
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
                htmlFor="uptime"
                className="block mb-2 text-sm font-medium text-white"
              >
                Uptime
              </label>
              <input
                type="number"
                id="uptime"
                name="uptime"
                value={values.uptime}
                onChange={handleChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                required
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="type"
                className="block mb-2 text-sm font-medium text-white"
              >
                Type
              </label>
              <input
                type="text"
                id="type"
                name="type"
                value={values.type}
                onChange={handleChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                required
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="lastMaintenanceDate"
                className="block mb-2 text-sm font-medium text-white"
              >
                Last Maintenance Date
              </label>
              <input
                type="date"
                id="lastMaintenanceDate"
                name="lastMaintenanceDate"
                value={values.lastMaintenanceDate}
                onChange={handleChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                required
              />
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

export default AddServer;
