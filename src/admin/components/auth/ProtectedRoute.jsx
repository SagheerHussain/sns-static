import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = () => {

    const isToken = sessionStorage.getItem("token");

  return (
    <>
      {
        isToken ? <Outlet></Outlet> : <Navigate to={`/login`}></Navigate>
      }
    </>
  )
}

export default ProtectedRoute
