import React, { useState } from "react";
import { Outlet,Link, useNavigate } from "react-router-dom";

const AddCustomers = () => {
  const navigate = useNavigate();
    const [name,setName]=useState('')
    const [email,setEmail]=useState('')
    const [phone,setPhone]=useState('')
    const [address,setAddress]=useState('')
    const handleSubmit = async (e) => {
        e.preventDefault();
    
        const customerData = { name, email, phone, address };
    
        try {
          const response = await fetch('http://localhost:3000/customers', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(customerData),
          });
          
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          setName('');
          setEmail('');
          setPhone('');
          setAddress('');
          navigate('/customers')
    
          const data = await response.json();
          console.log('Success:', data);
          
        } catch (error) {
          console.log('Error:', error);
        }
      };
  return (
    <>
      <div className="h-screen bg-gray-900 ">
        <div className="pt-5">
<form className="max-w-sm mx-auto" onSubmit={handleSubmit}>
  <div className="mb-5">
    <label htmlFor="name" className="block mb-2 text-sm font-medium text-white dark:text-white">Name</label>
    <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  required  />
  </div>
  <div className="mb-5">
    <label htmlFor="email" className="block mb-2 text-sm font-medium text-white dark:text-white">Email</label>
    <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required placeholder="example@mail.com" />
  </div>
  <div className="mb-5">
    <label htmlFor="phone" className="block mb-2 text-sm font-medium text-white dark:text-white">Phone</label>
    <input type="text" id="password" value={phone} onChange={(e) => setPhone(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required  name="phone"/>
  </div>
  <div className="mb-5">
    <label htmlFor="Address" className="block mb-2 text-sm font-medium text-white dark:text-white">Address</label>
    <input type="text" id="password" value={address} onChange={(e) => setAddress(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required name="address"/>
  </div>
  <button type="submit" className="text-white bg-gray-900 border border-white hover:scale-105 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
            
</form>

          
          </div>
        </div>
      <Outlet />
    </>
  );
};

export default AddCustomers;
