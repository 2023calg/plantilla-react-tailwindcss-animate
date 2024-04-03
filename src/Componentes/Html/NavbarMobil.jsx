import React, { useEffect } from "react"
import { useLocation, NavLink } from "react-router-dom"

export default function NavbarMovil({ children, to }) {
  
  //Custom class para el menu movil

  const CustomClass = {
    Active: "my-1 p-2 border-b-2 text-white border-violet-400 animate__animated animate__pulse animate__infinite",
    Inactive: "my-1 p-2 text-white"
  }

  const location = useLocation()
  useEffect(() => {

  }, [location.pathname])
  return (
    <li className={to === location.pathname ? CustomClass.Active : CustomClass.Inactive
    }>
      <NavLink to={to} > {children}</NavLink>
    </li >
  )
}