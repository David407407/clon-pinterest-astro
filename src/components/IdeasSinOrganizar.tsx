import React from 'react'
import { useTableroStore } from '@/store/tableroStore'
import Pin from './Pin'

type Props = {}

const IdeasSinOrganizar = (props: Props) => {
    const { favorites } = useTableroStore(state => state)

  return (
    <div className='columns-2 md:columns-3 lg:columns-5 xl:columns-8 gap-4 w-10/12 mx-auto border-t-2 mt-28 pt-12'>
			{
        favorites.map( (img: any) => (
            <Pin key={Object.keys(img)[0]} id={Object.keys(img)[0]} imagen={img[Object.keys(img)[0]]} abajo={false} /> 
        ))
      }
    </div>
  )
}

export default IdeasSinOrganizar