import Person from "../../imagenes/Personaje.png"
import logo from '../../imagenes/Logo.png';
// esto es el hero la parte princial xd

const Principal = () => {
  return (
    <section className="mt-36">
      <div className="grid grid-cols-1 md:grid-cols-2">
        {/* text */}
        <div className="  sm:p-10 md:p-15 lg:30 xl:36 " >
          <img src={logo} alt="logo" />
          <p className="py-2 text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime repellendus unde obcaecati omnis facere. Itaque corporis distinctio qui harum sunt saepe, quaerat ipsa beatae a, in error quis perspiciatis molestiae.</p>
          <div className="flex justify-center gap-4 text-white  ">
            <a className=" bg-purple-600 py-2 px-12 rounded-3xl trans hover:bg-purple-700 transition-all duration-300 items-center cursor-pointer text-xl
            font-semibold tracking-wider" href="/">Jugar <i className="bi bi-controller text-xl ml-2 "></i></a>

            <a className=" flex items-center  " href="/">Ver video<i className="bi bi-play-fill ml-2"></i></a>
          </div>
        </div>

        {/* imagen */}
        <div >
          <img src={Person} alt="Personaje" />
        </div>
      </div>
      
    </section>
  )
}

export default Principal
