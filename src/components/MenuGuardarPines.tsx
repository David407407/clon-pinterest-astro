import React, { useState, useEffect } from 'react'
import { useTableroStore } from '@/store/tableroStore'

type Props = {
  pin: any
}

const MenuGuardarPines = (props: Props) => {
  const { tableros, setTableros } = useTableroStore(state => state)
  const [mostrarMenu, setMostrarMenu] = useState(false)
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
      const handleScroll = () => {
        const scrollBottom = window.innerHeight + window.scrollY;
        const documentHeight = document.documentElement.offsetHeight;

        // Ajusta la lógica según tus necesidades exactas
        const isBottom = scrollBottom >= documentHeight;

        setIsVisible(isBottom);
      };

      window.addEventListener('scroll', handleScroll);

      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);

  const handleSavePin = (tablero: any) => {
    if(!tablero.pines.find((objeto: any) => objeto[props.pin.id] === props.pin.imagen)) {
      const pin = {}
      pin[props.pin.id] = props.pin.imagen
      const nuevoTablero = {
        ...tablero,
        pines: [
          ...tablero.pines, pin
        ]
      }
      const modificarTusPines = {
        ...tableros[0],
        pines: [
          ...tableros[0].pines, pin
        ]
      }
      tableros[0] = modificarTusPines
      const nuevoTableros = tableros.map( (tablero: any) => tablero.nombre === nuevoTablero.nombre ? nuevoTablero : tablero)
      setTableros(nuevoTableros)
    }
  }
  return (
    <div className='relative'>
      <button className='flex' onClick={() => setMostrarMenu(!mostrarMenu)}>
        {
          tableros.find((tab: any) => tab.pines.some( (e: any) => e[props.pin.id] === props.pin.imagen)) ? (
            <p>{tableros.find((tab: any) => tab.pines.some( (e: any) => e[props.pin.id] === props.pin.imagen)).nombre === 'favorites' ? 'Perfil' : tableros.find((tab: any) => tab.pines.some( (e: any) => e[props.pin.id] === props.pin.imagen)).nombre}</p>
          ) : (
            <p>Perfil</p>
          )
        }
        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chevron-down" width="20" height="20" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M6 9l6 6l6 -6" /></svg>
      </button>
      {
        mostrarMenu && (
          <div className={`absolute grid gap-2 ${ isVisible ? 'bottom-14 -left-20' : 'top-14 -left-20'}  shadow-md w-80 rounded-lg z-50 bg-white text-black p-6 `}>
            <h4 className='text-center'>Guardar</h4>

            <div className='grid gap-2 h-40 p-2 overflow-y-auto'>
              {
                tableros.map((tablero: any) => (
                  <div key={tablero.nombre} className='w-full flex items-center gap-1 justify-between'>
                    <div className='flex items-center gap-2'>
                      {
                        tablero.pines[0] ? (
                          <div className='w-12 h-12'>
                            <img className='object-cover w-full h-full rounded-lg' src={tablero.pines[0][Object.keys(tablero.pines[0])[0]]} alt={`Portada del tablero ${tablero.nombre}`} />
                          </div>
                          
                        ) : (
                          <div className='w-12 h-12 rounded-lg bg-gray-200' />
                        )
                      }
                      <p>{tablero.nombre === 'favorites' ? 'Perfil' : tablero.nombre }</p>
                    </div>
                    
                    {
                      tablero.pines.find((objeto: any) => objeto[props.pin.id] === props.pin.imagen) ? (
                        <button className={`rounded-full text-sm px-3 py-3 flex items-center justify-between text-center bg-black transition-all duration-300 text-white active:scale-90`}>Guardado</button>
                      ) : (
                        <button onClick={() => handleSavePin(tablero)} className={`rounded-full text-sm px-2 py-3 flex items-center justify-between text-center bg-red-600 hover:bg-red-800 transition-all duration-300 text-white active:scale-90`}>Guardar</button>
                      )
                    }
                  </div>
                ))
              }
            </div>
          </div>
        )
      }
      
    </div>
  )
}

export default MenuGuardarPines