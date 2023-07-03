import { dataTestimonials } from '../Data'
import SwiperTestimonials from './SwiperTestimonials'

const Testimonials = () => {
    const { Title, Logos } = dataTestimonials

    return (
        <>
            <section className='bg-zinc-100 py-20'>
                <div className='max-w-6xl mx-auto px-4'>
                    <h2 className='text-labemOscuro font-bold text-2xl md:text-4xl text-center py-4'>{Title}</h2>
                    <div className='mx-auto text-center mt-10'>
                        <SwiperTestimonials></SwiperTestimonials>
                    </div>
                    <div className='grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6'>
                        {Logos.map((logo) => (
                            <div className='flex justify-center items-center h-20 sm:h-40'>
                                <img className='w-16 sm:w-32 grayscale duration-300 hover:grayscale-0' key={logo.id} src={logo.src} alt='Logo de cliente' />
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Testimonials