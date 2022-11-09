import React from 'react'
import { useContext } from 'react';
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../../context/context';

function AdminPanel() {
    const navigate = useNavigate();
    const user = useContext(AuthContext);

    useEffect(() => {
        if(!user.isAdmin){
            navigate("/");
        }
    }, [])
  return (
    <div>AdminPanel</div>
  )
}

export default AdminPanel