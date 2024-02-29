import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Pin from './Pin.tsx';

type Props = {
}

const Contenedor = (props: Props) => {
    const [ imagenes, setImagenes ] = useState([])
    'grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-8'
    useEffect(() => {
      const cargarImagenes = async () => {
        const res = await axios.get(`/api/get-images`)
        const data = res.data
        setImagenes(data)
      }
      cargarImagenes()
    }, [])
    
    
  return (
    <div className='columns-2 md:columns-3 lg:columns-5 xl:columns-8 gap-4 '>
			{
        imagenes.map( img => (
            <Pin key={Object.keys(img)[0]} id={Object.keys(img)[0]} imagen={img[Object.keys(img)[0]]} abajo={false} /> 
        ))
      }
    </div>
  )
}

export default Contenedor