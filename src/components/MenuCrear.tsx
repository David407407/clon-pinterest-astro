import React, { useState } from 'react'
import { useTableroStore } from '@/store/tableroStore'
import Alerta from './Alerta'

type Props = {}

const MenuCrear = (props: Props) => {
    const { setTableros, tableros } = useTableroStore(state => state)
    const [mostrar, setMostrar] = useState(false)
    const [mostrarModalTablero, setMostrarModalTablero] = useState(false)
    const [mostrarModalPin, setMostrarModalPin] = useState(false)
    const [isChecked, setIsChecked] = useState(false)
    const [nombreTablero, setNombreTablero] = useState('')
    const [alerta, setAlerta] = useState({
        msg: '',
        error: false
    })
    
    const handleCrearTablero = () => {
        if(tableros.find((tablero: {nombre: string}) => tablero.nombre.toLocaleLowerCase() === nombreTablero.toLocaleLowerCase())) {
            setAlerta({msg: '!El tablero ya existe', error: true})
            return
        }
        setTableros([...tableros, {nombre: nombreTablero, pines: [], oculto: isChecked}])
        setNombreTablero('')
        setMostrarModalTablero(false)
    }
  return (
    <>
        <div className='relative'>
            <button onClick={() => setMostrar(!mostrar)} className="text-gray-800 hover:bg-gray-200 transition-colors p-2 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-plus w-6 h-6" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 5l0 14" /><path d="M5 12l14 0" /></svg>
            </button>

            {
                mostrar && (
                    <div className='absolute grid gap-2 -bottom-28 right-0 shadow-md p-4 w-36 rounded-lg z-50 bg-white text-sm font-medium'>
                        <button className='w-full hover:bg-gray-200 transition-colors rounded-lg px-2 py-1 flex items-center justify-between' >Pin</button>
                        <button className='w-full hover:bg-gray-200 transition-colors rounded-lg px-2 py-1 flex items-center justify-between' onClick={ () => {setMostrarModalTablero(true); setMostrar(false) }  } >Tablero</button>

                    </div>
                )
            }
        </div>

        {
            mostrarModalTablero && (
                <div className='fixed inset-0 overflow-y-hidden z-[80] w-full h-full bg-black/70 flex items-center'>
                    <div className='w-[30%] px-4 py-12 mx-auto bg-white rounded-xl z-[100] relative'>
                        <div className='text-gray-800 cursor-pointer hover:bg-gray-200 p-3 rounded-full absolute top-2 right-2' onClick={() => setMostrarModalTablero(false)}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-x " width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M18 6l-12 12" /><path d="M6 6l12 12" /></svg>
                        </div>
                        <h3 className='text-2xl text-center font-medium mb-12'>Crear Tablero</h3>

                        <div className='w-10/12 mx-auto mb-10'>
                            <label className='text-xs'>Nombre</label>
                            <input 
                                type="text" 
                                className=' rounded-xl w-full h-10 p-4 border-2 border-gray-200 focus:outline-4 focus:outline-blue-300'
                                placeholder='Como "Viajes" o "Recetas".'
                                value={nombreTablero}
                                onChange={(e) => setNombreTablero(e.target.value)}
                            />
                            {
                                alerta.msg.length > 0 && (
                                    <Alerta alerta={alerta} />
                                )
                            }
                        </div>
                        <div className='flex items gap-3 w-5/6 mx-auto' onClick={() => setIsChecked(!isChecked)}>
                            {
                                isChecked ? (
                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-square-check-filled" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M18.333 2c1.96 0 3.56 1.537 3.662 3.472l.005 .195v12.666c0 1.96 -1.537 3.56 -3.472 3.662l-.195 .005h-12.666a3.667 3.667 0 0 1 -3.662 -3.472l-.005 -.195v-12.666c0 -1.96 1.537 -3.56 3.472 -3.662l.195 -.005h12.666zm-2.626 7.293a1 1 0 0 0 -1.414 0l-3.293 3.292l-1.293 -1.292l-.094 -.083a1 1 0 0 0 -1.32 1.497l2 2l.094 .083a1 1 0 0 0 1.32 -.083l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32z" strokeWidth="0" fill="currentColor" /></svg>
                                ) : (
                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-square" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 3m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z" /></svg>
                                )
                            }

                            <div>
                                <p className='font-semibold text-xs'>Mantén este tablero como secreto</p>
                                <p className='text-xs'>Así solo tú y los colaboradores pueden verlo. <a className='hover:underline' href="#">Más información</a></p>
                            </div>
                            
                        </div>

                        <div className='flex justify-end mt-6'>
                            <button className={`p-3 text-sm font-medium rounded-full ${nombreTablero.length > 0 ? 'bg-red-600 text-white' : 'bg-gray-200' } `} disabled={nombreTablero.length > 0 ? false : true} onClick={handleCrearTablero}>Crear</button>
                        </div>
                    </div>
                </div>
            )
        }
        
    </>
  )
}

export default MenuCrear