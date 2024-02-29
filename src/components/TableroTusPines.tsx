import React from 'react'
import { useTableroStore } from '../store/tableroStore'

type Props = {}

const TableroTusPines = (props: Props) => {
  const { tableros } = useTableroStore(state => state)
  const primerosCuatro = tableros[0].pines.slice(-5).reverse()
  console.log(primerosCuatro[4])
  
  return tableros[0].pines.length === 0 ? (
    <div className='grid w-full gap-4 mx-auto absolute justify-center -bottom-20 p-2'>
      <h4 className='font-semibold '>Aún no guardaste ningún Pin!</h4>

      <a href="/" className='font-medium text-sm bg-gray-200 hover:bg-gray-300 transition-colors rounded-full px-4 py-3 w-fit mx-auto'>Buscar Ideas</a>
    </div>
  ) : (
    <a href="/profile/favorites" className='cursor-pointer p-2'>
      <div className='flex -space-x-20 justify-left w-full min-w-[225px] hover:brightness-90 cursor-pointer transition-all duration-300'>
          <div className={`bg-white rounded-md z-50`} >
            {
              primerosCuatro[0] ? (
                <img className={` object-cover w-28 h-36 rounded-lg border-r-2  border-white `}  src={primerosCuatro[0][Object.keys(primerosCuatro[0])[0]]} alt="" />
              ) : (
                <div className='w-28 h-36 rounded-lg border-r-2 bg-gray-200 border-white' />
              )
            }
          </div>

          <div className={`bg-white rounded-md z-40`} >
            {
              primerosCuatro[1] ? (
                <img className={` object-cover w-28 h-36 rounded-lg border-r-2  border-white `}  src={primerosCuatro[1][Object.keys(primerosCuatro[1])[0]]} alt="" />
              ) : (
                <div className='w-28 h-36 rounded-lg border-r-2 bg-gray-200 border-white' />
              )
            }
            
          </div>

          <div className={`bg-white rounded-md z-30`} >
            {
              primerosCuatro[2] ? (
                <img className={` object-cover w-28 h-36 rounded-lg border-r-2  border-white `}  src={primerosCuatro[2][Object.keys(primerosCuatro[2])[0]]} alt="" />
              ) : (
                <div className='w-28 h-36 rounded-lg border-r-2 bg-gray-200 border-white' />
              )
            }
          </div>

          <div className={`bg-white rounded-md z-20`} >
            {
              primerosCuatro[3] ? (
                <img className={` object-cover w-28 h-36 rounded-lg border-r-2  border-white `}  src={primerosCuatro[3][Object.keys(primerosCuatro[3])[0]]} alt="" />
              ) : (
                <div className='w-28 h-36 rounded-lg border-r-2 bg-gray-200 border-white' />
              )
            }
          </div>

          <div className={`bg-white rounded-md z-10`} >
            {
              primerosCuatro[4] ? (
                <img className={` object-cover w-28 h-36 rounded-lg border-r-2  border-white `}  src={primerosCuatro[4][Object.keys(primerosCuatro[4])[0]]} alt="" />
              ) : (
                <div className='w-28 h-36 rounded-lg border-r-2 bg-gray-200 border-white' />
              )
            }  
          </div>
      </div>
      
      <div className='px-2'>
        <h4 className='text-lg font-medium py-1 '>Todos los Pines</h4>
        <p className='text-xs'>{tableros[0].pines.length} Pines </p>
      </div>
    </a>
  )
}

export default TableroTusPines