import React from 'react'
import Navbar from '../../components/Navbar';

export default function Containers(props : any) {
  return (
    <>
        <Navbar />
        {props.children}
    </>
  )
}
