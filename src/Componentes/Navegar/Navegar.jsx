// esto es Navbar => menus y esas cosas
import logo from '../../imagenes/logo.png';
import { useState } from 'react';

const enlace_nav= [
    {
        id : 1,
        nombre : "Inicio",
        link : "/"
    },
    {
        id : 2,
        nombre : "Servicios",
        link : "/"
    },
    {
        id : 3,
        nombre : "Contacto",
        link : "/"
    }
        
    ]
    const enlace_frk = [
    {
        id : 1,
        nombre : "React",
        link : "/",
        icono:"bi bi-alexa"
    },
    {
        id : 2,
        nombre : "Tailwind",
        link : "/",
        icono : "bi bi-bootstrap-fill"
    }
    ]
const Navegar = () => {

    const [menu_mobil , setMenu_mobil] = useState(false);

    const menu_clik = () => {
        setMenu_mobil(!menu_mobil)
    }

  return (
    <nav className='fixed top-0 left-0 bg-purple-800 w-full bg-opacity-25 backdrop-blur-md'  >
        <div className='flex justify-between items-center sm:px-12 sm:py-6 px-4 py-3'>

            <div >
                <img src={logo} alt="logo supestamente" className='w-[100px]' /></div>
            {
                <button onClick={menu_clik} 
                className='md:hidden text-white '>
                	<svg className='w-6 h-6 '
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'>
                        { menu_mobil? ( <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M6 18L18 6M6 6l12 12'
                        />) : ( 
                            <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth={2}
                            d='M4 6h16M4 12h16M4 18h16 '
                            />
                        ) }
                    </svg>       
                </button>
            }

            <div className='hidden md:block'>
                <ul className='flex sm:space-x-8 space-x-4 '>
                    {
                        enlace_nav.map(({id , nombre, link}) => (
                            <li key={id} >
                                <a className='text-white sm:text-lg txt-sm sm:tracking-widest tracking-wide   hover:text-indigo-300 transition-transform hover:scale-110 transform inline-block duration-300'
                                 href={link}>{nombre}</a>
                            </li>
                        )

                        )
                    }
                </ul>
            </div>

            <div className='hidden md:block'>
                <ul className='text-white flex'>
                    {
                        enlace_frk.map(({id ,link,icono})=>(
                            <li key={id}>
                                <a target='__blank'
                                rel='noopener noreferrer' 
                                href={link}>
                                    <li className= { `${icono} px-2  transition-all duration-300 hover:scale-150  hover:text-indigo-200 `} ></li>
                                    </a>
                            </li>
                        )

                        )
                    }
                </ul>
    
            </div>
            {/* menu mobil  */}
        </div>
            <div className={`md:hidden absolute w-full  bg-purple-700 ${menu_mobil? ("opacity-100 visible transition-all duration-400") 
            : ("opacity-0 invisible transition-all translate-y-full  duration-500")} `}>
            <ul className='flex flex-col px-4 py-2'>
                    {
                        enlace_nav.map(({id , nombre, link}) => (
                            <li key={id} className='py-2 text-center'>
                                <a className='text-white transition-all duration-300 hover:scale-110 inline-block transform hover:text-rose-200 '
                                 href={link}>{nombre}</a>
                            </li>
                        )

                        )
                    }
                </ul>
                <ul className='flex flex-row border-t-2 justify-center py-4'>
                    {
                        enlace_frk.map(({id ,link,icono})=>(
                            <li key={id} className=' text-center px-2'>
                                <a target='__blank'
                                className='inline-block'
                                rel='noopener noreferrer' 
                                href={link}>
                                    <li className= { `${icono} text-white text-xl transition-all duration-300 hover:text-rose-200 hover:scale-125`} ></li>
                                    </a>
                            </li>
                        )

                        )
                    }
                </ul>
            </div>
    </nav>
  )
}

export default Navegar
