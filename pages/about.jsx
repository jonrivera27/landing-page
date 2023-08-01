import Link from 'next/link'

import { DarkLayout } from '../components/layouts/DarkLayout'
import { MainLayout } from '../components/layouts/MainLayout'
import React from 'react'


export default function AboutPage() {
  return (
    <>
        <h1>About Page</h1>
        
        <h1 className={'title'}>
          Ir a <Link href="/">ClubOfertas</Link>
        </h1>
       

        <p className={'description'}>
          {' '}
          <code className={'Telcel'}>Telcel no es responsable del servicio, publicidad y contenido de la promoción. Responsable de la promoción Airmovil, S.A. de C.V. Consulta las bases en http://arv.mx/fidofertas/</code>
        </p>

        <p className={'description'}>
          {' '}Elaborado en plástico color blanco; apto para cortar pasteles y tartas.
          <code className={'code'}>/</code></p>




    </>
  )
}


AboutPage.getLayout = function getLayout( page ) {
  return (
    <MainLayout>
      <DarkLayout>
       { page }
      </DarkLayout>
    </MainLayout>
  )
}