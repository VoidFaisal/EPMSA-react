import React, { useState, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

const AddProjectExpenses = () => {
  const navigate = useNavigate();
  const [projects, setProjects] = useState([]);
  const [values, setValues] = useState({
    projectId: "",
    head: "",
    title: "",
    description: "",
    amount: "",
    date:"",
  });

  useEffect(() => {
    const fetchProjectData = async () => {
      try {
        const response = await fetch("http://localhost:3000/projectexpenses/new");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setProjects(data);
        console.log("Fetched projects:", data);
      } catch (error) {
        console.log("Error:", error);
      }
    };

    fetchProjectData();
  }, []);

  useEffect(() => {
    console.log("Projects state updated:", projects);
  }, [projects]);

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
      const response = await fetch("http://localhost:3000/projectexpenses", {
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
      navigate("/projectexpenses");
      alert("Expense Added");
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
                htmlFor="projectId"
                className="block mb-2 text-sm font-medium text-white"
              >
                Project
              </label>
              <select
                name="projectId"
                value={values.projectId}
                onChange={handleChange}
                id="projectId"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
              >
                {projects.map((project) => (
                  <option key={project._id} value={project._id}>
                    {project.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="mb-5">
              <label
                htmlFor="head"
                className="block mb-2 text-sm font-medium text-white"
              >
                Head
              </label>
              <input
                type="text"
                id="head"
                name="head"
                value={values.head}
                onChange={handleChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                required
              />
            </div>

            <div className="mb-5">
              <label
                htmlFor="title"
                className="block mb-2 text-sm font-medium text-white"
              >
                Title
              </label>
              <input
                type="text"
                id="title"
                name="title"
                value={values.title}
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
                htmlFor="amount"
                className="block mb-2 text-sm font-medium text-white"
              >
                Amount
              </label>
              <input
                type="number"
                id="amount"
                name="amount"
                value={values.amount}
                onChange={handleChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                required
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="date"
                className="block mb-2 text-sm font-medium text-white"
              >
                Date
              </label>
              <input
                type="date"
                id="date"
                name="date"
                value={values.date}
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

export default AddProjectExpenses;
