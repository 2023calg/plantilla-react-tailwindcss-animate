export default function Footer() {
  return (
    <footer className="w-screen grid grid-cols-1 bg-slate-800 md:text-3xl">
      <div>
        <div className="text-center text-white font-extrabold p-2 md:p-5">
         <em> C.A.L.G ~ Desarrollador Full - Stack </em>
        </div>
        <div className="p-1 md:p-3">
          <ul className="text-white flex justify-evenly flex-wrap">
            <li className="mx-2 my-2">
              <i className="bi bi-whatsapp text-green-400"></i>
            </li>
            <li className="mx-2 my-2">
              <i className="bi bi-facebook text-blue-400"></i>
            </li>
            <li className="mx-2 my-2">
              <i className="bi bi-twitter text-blue-400"></i>
            </li>
            <li className="mx-2 my-2">
              <i className="bi bi-youtube text-red-400"></i>
            </li>
            <li className="mx-2 my-2">
              <i className="bi bi-instagram text-purple-400"></i>
            </li>
            <li className="mx-2 my-2">
              <i className="bi bi-telegram text-blue-400"></i>
            </li>
            <li className="mx-2 my-2">
              <i className="bi bi-github text-white"></i>
            </li>
            <li className="mx-2 my-2">
              <i className="bi bi-envelope text-white"></i>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}








