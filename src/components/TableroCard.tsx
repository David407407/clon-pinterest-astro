import React from 'react'

type Props = {
  imagenes: [ 
    img: any
  ],
  nombre: string
}

const TableroCard = (props: Props) => {
  const { imagenes, nombre } = props
  const imagenesPortada = imagenes.slice(-3).reverse()
  return (
    <a className='grid p-2 hover:brightness-90 transition-all duration-300 cursor-pointer' href={`/profile/${nombre}`}>
      <div className='grid grid-cols-3 grid-rows-2 gap-px w-[225px] h-36 '>
          {
            imagenesPortada.length === 0 ? (
              <div className={` rounded-md col-start-3 col-end-4 first-of-type:col-start-1 first-of-type:col-end-3 first-of-type:row-start-1 first-of-type:row-end-3`}>
                <div className='w-full h-full rounded-lg pl-1 bg-gray-200'/>
              </div>
            ) : (
              imagenesPortada.map((img: any) => (
                <div className={` rounded-md col-start-3 col-end-4 first-of-type:col-start-1 first-of-type:col-end-3 first-of-type:row-start-1 first-of-type:row-end-3`} key={Object.keys(img)[0]}>
                  <img className={` object-cover w-full h-full rounded-lg pl-1 `}  src={img[Object.keys(img)[0]]} alt="" />
                </div>
              ))
            )
          }
          
      </div>

      <div className='px-2'>
        <h4 className='text-lg font-medium pb-1 '>{nombre}</h4>
        <p className='text-xs'>{imagenes.length} Pines </p>
      </div>
    </a>
    
  )
}

export default TableroCard