import React, { useState } from 'react'

const Searchbar = () => { 
    const [mostrarLabel, setMostrarLabel] = useState(true)
    const [textoBuscar, setTextoBuscar] = useState('')
  return (
    <div className="w-full flex items-center justify-center relative">
        <input 
            name="buscar"
            type="text" 
            placeholder=" "
            className="bg-gray-300/60 rounded-3xl w-full h-10 p-4 absolute z-50 outline-0 focus:outline-4 focus:outline-blue-300"
            spellCheck='false'
            onFocus={() => setMostrarLabel(false)}
            onBlur={() => setMostrarLabel(true)}
            onChange={(e) => setTextoBuscar(e.target.value)}
        />
        {
            mostrarLabel && textoBuscar.length === 0 && (
                <label htmlFor="buscar" className="absolute w-full h-10 flex gap-1 text-sm items-center p-2 px-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-search" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" /><path d="M21 21l-6 -6" /></svg> Buscar
                </label>
            )
        }
        
    </div>
  )
}

export default Searchbar