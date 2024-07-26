import React from 'react'
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
const DeleteCustomers = () => {
    const {id} = useParams();
    const navigate = useNavigate();
    useEffect(() => {
        const DeleteById = async () => {
          try {
            const getResponse = await fetch(`http://localhost:3000/customers/delete/${id}`, {
                method:'DELETE',
                
            });
            if (!getResponse.ok) {
              throw new Error('Network response was not ok');
            }
            navigate('/customers');
          } catch (error) {
            console.log('Error:', error);
          }
        };
        DeleteById();
      }, [id]);
    
  return (
  <></>
  )
}

export default DeleteCustomers
