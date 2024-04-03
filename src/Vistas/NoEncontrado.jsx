import Img from '../Assets/Images/Astronauta.png'

export default function NoEncontrado() {

  const CustomClass = {
    Container: {
      initial: "bg-black flex items-center justify-center h-screen"
    },
    Items: {
      initial: "flex flex-col w-full"
    }
  }

  return (
    <div className={Object.values(CustomClass.Container).join(" ")}>
      <div className={Object.values(CustomClass
        .Items).join(" ")}>
        <div className="w-52 mx-auto mb-10 h-72">
          <img src={Img} alt="Astronauta" className="h-full w-full" />
        </div>
        <div className="w-[50%] mx-auto text-center text-white">
          <h1 className="text-3xl md:text-5xl">Esta ruta aún no existe</h1>
        </div>
      </div >
    </div >
  )
}