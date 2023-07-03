import React from 'react'
import videoBackground from '../assets/video/video-labem.mp4'

const HeroSection = () => {
    return (
        //VideoBackground
        <>
            <div className='h-screen relative'>
                <video video className='w-full h-full object-cover' autoPlay loop muted src={videoBackground} type="video/mp4" ></video >
                <div className='absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 text-white flex flex-col items-center w-full max-w-6xl text-center'>
                    <h1 className='font-bold text-4xl md:text-5xl sombraTitle px-4'>Habilidades para una Vida Feliz y Exitosa</h1>
                    <h2 className='font-bold text-lg md:text-2xl sombraSubTitle px-4 pt-4'>Consultora LABEM, especialistas en Habilidades Blandas</h2>
                </div>
            </div >
        </>
    )
}

export default HeroSection