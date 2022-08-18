import React, { useEffect } from 'react'
import { usePerson } from '../Hooks/usePerson'

export const Planetas = () => {

    const { getAllPerson } = usePerson();
    useEffect(() => {
      getAllPerson();
      console.log(getAllPerson());
    }, [])
  
    return (
      <div>Planetas</div>
    )
  }
  