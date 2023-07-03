import React from 'react'

const Contact = () => {
    return (
        <section className='bg-zinc-50 py-20'>
            <div className='max-w-6xl mx-auto px-4'>
                <div className='bg-labemCeleste w-full rounded-md'>
                    <h2 className='text-labemOscuro font-bold text-2xl md:text-4xl py-4 text-center md:text-left'>¿Trabajamos juntos?</h2>
                    <p className='text-white text-center md:text-left leading-tight'>Puedes rellenar este formulario o <br></br>escribirnos directamente a: hola@labem.com</p>
                    <form action="">
                        <div className='grid grid-cols-6 gap-4'>
                            <input className='col-span-3 md:col-span-2' type="text" name='user_name' placeholder='Nombre' required></input>
                            <input className='col-span-3 md:col-span-2' type="text" name='user_empresa' placeholder='Empresa'></input>
                            <input className='col-span-3 md:col-span-2' type="email" name='user_email' placeholder='Email'></input>
                            <input className='col-span-3 md:col-span-3' type="text" name='user_telefono' placeholder='Teléfono'></input>
                            <select className='col-span-6 md:col-span-3'>
                                <option value=''>¿Quién eres?</option>
                                <option value='emprendedor'>emprendedor</option>
                                <option value=''>empresario</option>
                                <option value=''>profesional</option>
                            </select>
                        </div>
                        <p>Estoy interesado en:</p>
                        <div className='grid grid-cols-6'>
                            <label htmlFor="cbox1" className='text-white pl-1 col-span-3 md:col-span-2'><input type="checkbox" id='cbox1' value='primero' />Charla Psicológica</label>
                            <label htmlFor="cbox2" className='text-white pl-1 col-span-3 md:col-span-2'><input type="checkbox" id='cbox2' value='segundo' />Curso Incompany</label>
                            <label htmlFor="cbox3" className='text-white pl-1 col-span-3 md:col-span-2'><input type="checkbox" id='cbox3' value='tercero' />Taller Psicológico</label>
                            <label htmlFor="cbox4" className='text-white pl-1 col-span-3 md:col-span-2'><input type="checkbox" id='cbox4' value='cuarto' />Taller Psicológico</label>
                            <label htmlFor="cbox5" className='text-white pl-1 col-span-3 md:col-span-2'><input type="checkbox" id='cbox5' value='quinto' />Taller Psicológico</label>
                            <label htmlFor="cbox6" className='text-white pl-1 col-span-3 md:col-span-2'><input type="checkbox" id='cbox6' value='sexto' />Otro</label>
                        </div>
                        <input className='w-full' type="text" name='user_adicional' placeholder='¿Deseas contarnos algo más?'></input>
                        <label htmlFor="cbox7" className='text-white pl-1'><input type="checkbox" id='cbox7' value='septimo' />He leído y acepto los <span>Términos y Condiciones</span></label>
                    </form>
                </div>
            </div>
        </section >
    )
}

export default Contact