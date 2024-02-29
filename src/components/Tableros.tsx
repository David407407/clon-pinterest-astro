import React from 'react'
import { useTableroStore } from '@/store/tableroStore'
import TableroTusPines from './TableroTusPines'
import TableroCard from './TableroCard'

type Props = {}

const Tableros = (props: Props) => {
  const { tableros } = useTableroStore(state => state)
  const ignorarPerfil = tableros.slice(1)
  return (
    <div className="flex flex-wrap w-[95%] mx-auto my-6 relative">
        <TableroTusPines />

        {
          ignorarPerfil.map( (tablero: any, i: number) => (
            <TableroCard key={i} imagenes={tablero.pines} nombre={tablero.nombre}/>
          ))
        }
        
    </div>
  )
}

export default Tableros