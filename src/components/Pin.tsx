import React, { useState } from 'react'
import { useTableroStore } from '@/store/tableroStore'
import MenuGuardarPines from './MenuGuardarPines'

type Props = {
  imagen: string,
  id: string,
  abajo: boolean
}

const Pin = (props: Props) => {
  const { favorites, setFavorites } = useTableroStore(state => state)
  const pin = {}
  pin[props.id] = props.imagen

  const handleSave = () => {
    
    if(!favorites.find((objeto: any) => objeto[props.id] === props.imagen)) {
      setFavorites([...favorites, pin])
    }
  }

  return (
    <div className={`w-full mb-10 cursor-zoom-in relative rounded-xl`}>
        <img className='rounded-xl' src={props.imagen} alt="Imagen" />

        <div className='absolute opacity-0 hover:opacity-100 w-full h-full top-0 left-0 hover:bg-black/50 transition-all duration-300 rounded-xl text-white text-sm font-medium'>
          <div className='absolute w-full top-4 flex justify-evenly items-center'>
            <MenuGuardarPines pin={props} />

            {
              favorites.find((objeto: any) => objeto[props.id] === props.imagen) ? (
                <button className={`rounded-full text-sm px-3 py-3 flex items-center justify-between text-center bg-black transition-all duration-300 text-white active:scale-90`}>Guardado</button>
              ) : (
                <button onClick={handleSave} className={`rounded-full text-sm px-3 py-3 flex items-center justify-between text-center bg-red-600 hover:bg-red-800 transition-all duration-300 text-white active:scale-90`}>Guardar</button>
              )
            }
            
          </div>

          <div className='absolute bottom-2 right-2 flex gap-2'>
            <button className='bg-gray-200/80 hover:bg-white transition-colors w-8 h-8 rounded-full'>
              <svg className='w-4 mx-auto' xmlns="http://www.w3.org/2000/svg" height="16" width="14" viewBox="0 0 448 512"><path d="M8 256a56 56 0 1 1 112 0A56 56 0 1 1 8 256zm160 0a56 56 0 1 1 112 0 56 56 0 1 1 -112 0zm216-56a56 56 0 1 1 0 112 56 56 0 1 1 0-112z"/></svg>
            </button>

            <button className='bg-gray-200/80 hover:bg-white transition-colors w-8 h-8 rounded-full'>
              <svg className='w-4 mx-auto' xmlns="http://www.w3.org/2000/svg" height="16" width="14" viewBox="0 0 448 512"><path d="M246.6 9.4c-12.5-12.5-32.8-12.5-45.3 0l-128 128c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 109.3V320c0 17.7 14.3 32 32 32s32-14.3 32-32V109.3l73.4 73.4c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-128-128zM64 352c0-17.7-14.3-32-32-32s-32 14.3-32 32v64c0 53 43 96 96 96H352c53 0 96-43 96-96V352c0-17.7-14.3-32-32-32s-32 14.3-32 32v64c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V352z"/></svg>
            </button>
          </div>
          
        </div>
    </div>
  )
}

export default Pin