import { dataServices } from "../Data"

const Services = () => {
    const { Title, Cards } = dataServices

    return (
        <section className='bg-zinc-50 py-20'>
            <div className='max-w-6xl mx-auto px-4'>
                <h2 className='font-bold text-2xl md:text-4xl text-center py-4 text-labemOscuro'>{Title}</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-16 mt-8">
                    {Cards.map((cards) => (
                        <div key={cards.id} className='max-w-sm p-8 flex flex-col justify-between items-center gap-5 bg-white shadow-2xl duration-150 hover:shadow-none hover:bg-zinc-100'>
                            <img className="w-36" src={cards.icono} alt="" />
                            <h3 className="font-Montserrat uppercase text-lg md:text-xl font-bold">{cards.titulo}</h3>
                            <p className="font-Montserrat font-light text-slate-700" dangerouslySetInnerHTML={{ __html: cards.descripcion }} />
                            {/* <button className="bg-labemRosa text-white font-bold rounded-md py-1 w-4/5 group hover:brightness-105">Conoce más</button> */}
                            <a href="#_" class="w-4/5 py-1 relative rounded-xl group overflow-hidden font-bold outline outline-labemRosa text-labemRosa inline-block text-center">
                                <span class="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-labemRosa group-hover:h-full opacity-90"></span>
                                <span class="relative group-hover:text-white">Conoce más</span>
                            </a>
                        </div>
                    ))}
                </div>
            </div>

        </section>
    )
}

export default Services