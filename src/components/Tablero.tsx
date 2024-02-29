import { useTableroStore } from '@/store/tableroStore'
import React, { useEffect, useState } from 'react'
import Pin from './Pin'

type Props = {
    tablero: string
}

const Tablero = (props: Props) => {
  const { tableros } = useTableroStore(state => state)
  const [pines, setPines] = useState([])
    useEffect(() => {
      const tableroActual = tableros.find( (tablero: any) => tablero.nombre === props.tablero ).pines 
      setPines(tableroActual)
    }, [])

  return (
    <div className='columns-2 md:columns-3 lg:columns-5 xl:columns-8 column-width gap-4 xl:w-[90%] md:w-[85%] w-[60%] mx-auto'>
			{
        pines.length === 0 ? (
          <div className='grid w-full gap-4 mx-auto absolute justify-center p-2'>
            <h4 className='font-semibold '>Aún no guardaste ningún Pin!</h4>
            <a href="/" className='font-medium text-sm bg-gray-200 hover:bg-gray-300 transition-colors rounded-full px-4 py-3 w-fit mx-auto'>Buscar Ideas</a>
          </div>
        ) : pines.length <= 8 ? pines.map( img => (
            <Pin key={Object.keys(img)[0]} id={Object.keys(img)[0]} imagen={img[Object.keys(img)[0]]} abajo={true} /> 
        )) : pines.map( img => (
          <Pin key={Object.keys(img)[0]} id={Object.keys(img)[0]} imagen={img[Object.keys(img)[0]]} abajo={false} /> 
        ))
      }
    </div>
  )
}

export default Tablero