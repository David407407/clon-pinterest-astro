import React, { useState } from 'react'

type Props = {
    url: string
}

const Menu = (props: Props) => {
    const [mostrar, setMostrar] = useState(false)
    const urls = [
        {
            url: '/',
            name: 'Inicio'
        },
        {
            url: '/today',
            name: 'Explorar'
        },
        {
            url: '/create',
            name: 'Crear'
        }
    ]
    const urlActual = urls.find( item => item.url === props.url) 

  return (
    <div className={`min-w-20 flex justify-center relative cursor-pointer`}>
        
        <div className={`flex text-sm py-2 px-3 rounded-full font-bold items-center md:hidden gap-1 ${mostrar ? 'text-white bg-black' : 'text-black hover:bg-gray-200' }`} onClick={() => setMostrar(!mostrar)}>
            {urlActual?.name === undefined ? 'Inicio': urlActual?.name} 
            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chevron-down" width="20" height="20" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M6 9l6 6l6 -6" /></svg>
        </div>

        <div className='md:flex justify-between hidden space-x-2'>
            {
                urls.map((item, index) => (
                    <a key={index} className={`w-16 text-center font-medium rounded-full text-sm px-3 py-3 flex items-center justify-center ${urlActual?.url === item.url && 'bg-black text-white'}`} href={item.url}>{item.name}</a>
                ) )
            }
        </div>

        {
            mostrar && (
                <div className='opciones md:hidden absolute grid gap-2 -bottom-36 shadow-md p-4 w-44 rounded-lg z-50 bg-white'>
                    {
                        urls.map((item, index) => (
                            <a key={index} className='w-full hover:bg-gray-200 rounded-lg px-2 py-1 flex items-center justify-between' href={item.url}>{item.name} { 
                                item.url === urlActual?.url && (<svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-point-filled" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 7a5 5 0 1 1 -4.995 5.217l-.005 -.217l.005 -.217a5 5 0 0 1 4.995 -4.783z" strokeWidth="0" fill="currentColor" /></svg>)
                            }</a>
                        ) )
                    }
                </div>
            )
        } 
        
    </div>
  )
}

export default Menu