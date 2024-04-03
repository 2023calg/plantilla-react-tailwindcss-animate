import React, { useState } from "react"
import NavbarMovil from "./NavbarMobil.jsx"

import Log from "../../Assets/Images/calg-log.jpg"

export default function Navbar({ children }) {


  //Manejo del menu desplegable Movil
  const [mobilMenu, setMobilMenu] = useState(false)
  const [animationMenu, setAnimationMenu] = useState(true)


  function toggleMenu() {
    setMobilMenu(!mobilMenu);
    setAnimationMenu(true);
  }

  function toggleClose() {
    setAnimationMenu(false);
    setTimeout(() => {
      setMobilMenu(false);
    }, 500);
  }

  //Configure comodamente sus CustomClass objetos Tailwindcss para una rapida sustitucion de clases,ajuste a sus necedades

  const CustomClasss = {
    Nav: {
      initial: "p-3 w-screen h-30 bg-slate-800 text-white border-b-2 border-gray-800",
      xs: "",
      md: "",
      lg: "",
      xl: "",
      xl2: ""
    },
    NavContainer: {
      initial: "w-full flex items-center h-full",
      xs: "",
      md: "",
      lg: "",
      xl: "",
      xl2: ""
    },
    BrandImg: {
      initial: "w-[20%] flex justify-center h-full",
      md: "md:w-[10%]"
    },
    BrandMsg: {
      initial: "invisible hidden md:visible md:block w-[20%] h-full flex items-center justify-center text-center"
    },
    NavContainerMovil: {
      initial: "w-[80%] md:invisible md:hidden flex h-full justify-center items-center text-center"
    },
    BrandMsgMovil: {
      initial: "w-[60%] px-3"
    },
    ToggleContainer: {
      initial: "w-[40%] flex justify-end items-center"
    },
    Container: {
      initial: "invisible hidden overflow-hidden overflow-scroll",
      md: "md:visible md:block md:w-[70%]"
    },
    MobilMenu: {
      container: "h-screen w-[50vw] flex flex-row z-10 fixed inset-y-0 right-0 animate__animated bg-gray-800",
    }

  }


  return (
    <nav className={Object.values(CustomClasss.Nav).join(" ")} >
      <div className={Object.values(CustomClasss.NavContainer).join(" ")}>

        {/*Menú movil,Animacion con Animate.css opcional*/}

        {
          mobilMenu &&
          <div className={`${CustomClasss.MobilMenu.container} ${animationMenu ? "animate__fadeInRight" :
            "animate__fadeOutRight"}`}>
            
            {/* Tambien puede usar las clases directamente si le parece más comodo*/}

            <div className="absolute top-0 right-0 p-3 animate__animated animate__infinite
            animate__tada z-50">
              <button onClick={() => toggleClose()}>
                <i className="bi bi-x text-3xl"></i>
              </button>
            </div>

            <ul className="p-3 w-[100%]">
              <NavbarMovil to="/">
                Inicio
              </NavbarMovil>
              <NavbarMovil to="/ruta_1">
                Ruta 1
              </NavbarMovil>
              <NavbarMovil to="/ruta_2">
                Ruta 2
              </NavbarMovil>
              <NavbarMovil to="/ruta_3">
                Ruta 3
              </NavbarMovil>
              <NavbarMovil to="/ruta_4">
                Ruta 4
              </NavbarMovil>
              <NavbarMovil to="/ruta_5">
                Ruta 5
              </NavbarMovil>
              {/*Ajusta las rutas del Navbar movil*/}
            </ul>
          </div>
        }


        {/*Logo del Nav*/}
        <div className={Object.values(CustomClasss.BrandImg).join(" ")}>
          <img src={Log} alt="log" className="h-full w-full rounded" />
        </div>

        {/*Navbrand,por encima de Md resolucion*/}
        <div className={Object.values(CustomClasss.BrandMsg).join(" ")}>
          Diseño responsivo Pc
        </div>

        {/*Items md*/}
        <div className={Object.values(CustomClasss.Container).join(" ")}>
          <ul className="flex">
            {children}
          </ul>
        </div>


        {/*Contenedor movil*/}
        <div className={Object.values(CustomClasss.NavContainerMovil).join(" ")}>

          <div className={Object.values(CustomClasss.BrandMsgMovil).join(" ")}>
            Diseño responsivo Movil
          </div>

          <div className={Object.values(CustomClasss.ToggleContainer).join(" ")}>

            <button className="bg-blue-500 rounded py-2 px-4 border border-white"
              onClick={() => {
                toggleMenu()
              }}  >
              <i className="bi bi-list text-2xl"></i>
            </button>
          </div>
        </div>
      </div>
    </nav >
  )
}