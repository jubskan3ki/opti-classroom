import React from 'react'
import { useRouter } from 'next/router'

export default function Alert() {

  const router = useRouter()

  return (
    <h1>test {router.query.slug}</h1>
  )
}
