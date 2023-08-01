
import Link from 'next/link'
import { MainLayout } from '../components/layouts/MainLayout'
import React from 'react'


export default function HomePage() {

  return (
    <MainLayout>
        <h1>Home -  Ofertas</h1>
        
        <h1 className="title">
          {/* Ir a <a href="/about">About</a> */}
           <Link href="/Ofertas"> Ofertas </Link>

        <h1> <p className={'description'}>
        {' '}  
        <code className={'Telcel'}>Telcel no es responsable del servicio, publicidad y contenido de la promoción. Responsable de la promoción Airmovil, S.A. de C.V. Consulta las bases en http://arv.mx/fidofertas/</code>
        </p>
        </h1>


        </h1>
        <p className={'code '}>
        <h1>BRABANTIA Bowl.</h1>
        <h2>price 12.22.22
        </h2>
        {' '}<code className={'BRAW'}>Diseñado para mantener el bowl en la posición de mezclado idónea.</code>
        </p>

        <p className={'code '}>
        <h1>PATISSE Divisor para pastel</h1>
        <h2>

        </h2>
        {' '}<code className={'BRAW'}>Elaborado en plástico color blanco; apto para cortar pasteles y tartas. </code>
        </p>

        <p className={'code'}>
        <h1>Figura Darth Vader Hasbro</h1>
        <h2>
        Juguete interactivo Galactic Action de Darth Vader a escala de 30 cm
        </h2>   
        </p>

        <p className={'code'}>
        <h1>MESA DE CENTRO DE MELAMINA</h1>

        <h2>

        </h2>   
        </p>

        <p className={'code'}>
        <h1>Sudadera adidas Essentials </h1>
        <h2>
        </h2>   
        </p>


        <p className={'code'}>
        <h1> GORRA SNAPBACK POKEMON </h1>
        <h2>
        </h2>   
        </p>


        <p className={'code'}>
        <h1>GORRA TRUCKER POKEMON</h1>
        <h2>
        </h2>   
        </p>


    </MainLayout>
  )
}


