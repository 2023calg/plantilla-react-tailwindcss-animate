import React, { useEffect } from "react"
import { useLocation, NavLink } from "react-router-dom"

export default function NavbarItem({ children, to }) {

  //Configure su custom class para el NavLink activo,md resolucion

  const CustomClass = {
    initial: "whitespace-nowrap mx-2",
    Active: "animate__animated animate__pulse animate__infinite border-b-2 border-violet-400",
    Inactive: ""
  }

  const location = useLocation()
  useEffect(() => {
  }, [location.pathname])

  return (
    <li className={`${CustomClass.initial} ${to === location.pathname ? CustomClass.Active : CustomClass.Inactive
      }`}>
      <NavLink to={to}>{children}</NavLink>
    </li >
  )
}