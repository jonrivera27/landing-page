
import Link from 'next/link'
import { MainLayout } from '../../components/layouts/MainLayout'
import React from 'react'


export default function HomePage() {

  return (
    <MainLayout>
        <h1> Page</h1>
        
        <h1 className="title">
          {/* Ir a <a href="/about">About</a> */}
          Ir a <Link href="/">Home</Link>
        </h1>

        <p className={'description'}>
           ir Ofertas {' '}
          <code className={'code'}></code>
        </p>
    </MainLayout>
  )
}
