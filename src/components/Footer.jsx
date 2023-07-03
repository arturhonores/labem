import React from 'react'
import { dataSocialIcons } from '../Data'
import logoLabem from '../assets/images/logoLabem.svg'

const Footer = () => {
    const { socialIcons } = dataSocialIcons
    return (
        <>
            <section className='bg-labemOscuro py-20'>
                <footer className='max-w-6xl mx-auto px-4'>
                    <div className='grid items-center grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 text-white text-center'>
                        <div className='sm:col-span-2 lg:col-span-1 mx-auto lg:mx-0'><img className='w-32' src={logoLabem} alt="" /></div>
                        <div className='sm:col-span-1 lg:col-span-1'>Dirección y teléfono</div>
                        <div className='sm:col-span-1 lg:col-span-1'>mapa del sitio</div>
                        <div className='sm:col-span-2 lg:col-span-1 flex justify-center lg:justify-end gap-4'>
                            {socialIcons.map((socialIcons) => (
                                <div key={socialIcons.id} className='w-11 h-11 rounded-full bg-labemAmarillo flex justify-center items-center text-slate-50'>{socialIcons.icono}</div>
                            ))}
                        </div>
                    </div>
                </footer>
            </section>
            <section className='bg-labemCeleste py-4'>
                <footer className='max-w-6xl mx-auto px-4'>
                    <div className='flex flex-col justify-center items-center text-white md:flex-row md:justify-between gap-2'>
                        <div className='flex flex-col sm:flex-row gap-2 sm:gap-4 font-semibold'>
                            <p>Términos y Condiciones</p>
                            <p>Libro de Reclamaciones</p>
                        </div>
                        <p className='font-semibold'>Copyright LABEM Perú-2023</p>
                    </div>
                </footer>
            </section>
        </>
    )
}

export default Footer