import logoTesti1 from './assets/images/cliente-logo-1.png'
import logoTesti2 from './assets/images/cliente-logo-2.png'
import logoTesti3 from './assets/images/cliente-logo-3.png'
import logoTesti4 from './assets/images/cliente-logo-4.png'
import logoTesti5 from './assets/images/cliente-logo-5.png'
import logoTesti6 from './assets/images/cliente-logo-6.png'
import logoTesti7 from './assets/images/cliente-logo-7.png'
import logoTesti8 from './assets/images/cliente-logo-8.png'
import logoTesti9 from './assets/images/cliente-logo-9.webp'
import logoTesti10 from './assets/images/cliente-logo-10.png'
import logoTesti11 from './assets/images/cliente-logo-11.webp'
import logoTesti12 from './assets/images/cliente-logo-12.png'
import logoTesti13 from './assets/images/cliente-logo-13.png'
import logoTesti14 from './assets/images/cliente-logo-14.png'
import logoTesti15 from './assets/images/cliente-logo-15.png'
import logoTesti16 from './assets/images/cliente-logo-16.png'
import logoTesti17 from './assets/images/cliente-logo-17.gif'
import logoTesti18 from './assets/images/cliente-logo-18.png'
import iconoCursos from './assets/images/cursos.svg'
import iconoTerapia from './assets/images/terapia.svg'
import iconoTalleres from './assets/images/talleres.svg'
import { BsFacebook, BsInstagram, BsYoutube, BsSpotify } from 'react-icons/bs'



//SERVICES
export const dataServices = {
    Title: "Nuestros Servicios",
    Cards: [
        {
            id: 1,
            icono: iconoCursos,
            titulo: "cursos",
            descripcion: "En nuestra <span class='font-bold'>Academia de Habilidades Blandas</span> te ayudamos a desarrollar habilidades, tales como: Oratoria, Inteligencia Emocional, entre otros."
        },
        {
            id: 2,
            icono: iconoTerapia,
            titulo: "terapia",
            descripcion: "Somos psicólogos con enfoque Cognitivo-Conductual y <span class='font-bold'>atendemos a niños, adolescentes y adultos.</span> Las citas son virtuales o presenciales."
        },
        {
            id: 1,
            icono: iconoTalleres,
            titulo: "talleres",
            descripcion: "<span class='font-bold'>Venimos capacitando desde el 2016</span> a docentes, padres y alumnos de diferentes colegios; así como a personal de empresas y municipios."
        }
    ]
}

//TESTIMONIALS
export const dataTestimonials = {
    Title: 'Más de 200 clientes satisfechos',
    Logos: [
        {
            id: 1,
            src: logoTesti1,
        },
        {
            id: 2,
            src: logoTesti2,
        },
        {
            id: 3,
            src: logoTesti3,
        },
        {
            id: 4,
            src: logoTesti4,
        },
        {
            id: 5,
            src: logoTesti5,
        },
        {
            id: 6,
            src: logoTesti6,
        },
        {
            id: 7,
            src: logoTesti7,
        },
        {
            id: 8,
            src: logoTesti8,
        },
        {
            id: 9,
            src: logoTesti9,
        },
        {
            id: 10,
            src: logoTesti10,
        },
        {
            id: 11,
            src: logoTesti11,
        },
        {
            id: 12,
            src: logoTesti12,
        },
        {
            id: 13,
            src: logoTesti13,
        },
        {
            id: 14,
            src: logoTesti14,
        },
        {
            id: 15,
            src: logoTesti15,
        },
        {
            id: 16,
            src: logoTesti16,
        },
        {
            id: 17,
            src: logoTesti17,
        },
        {
            id: 18,
            src: logoTesti18,
        },
    ]
};

//FOOTER

export const dataSocialIcons = {
    socialIcons: [
        {
            id: 1,
            icono: <BsFacebook size={'1.5rem'}></BsFacebook>,
        },
        {
            id: 2,
            icono: <BsInstagram size={'1.5rem'}></BsInstagram>,
        },
        {
            id: 3,
            icono: <BsYoutube size={'1.5rem'}></BsYoutube>,
        },
        {
            id: 4,
            icono: <BsSpotify size={'1.5rem'}></BsSpotify>,
        },
    ]
}

