import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper';
import { ImQuotesLeft } from 'react-icons/im'
import { AiFillLeftCircle, AiFillRightCircle } from 'react-icons/ai'
import cliente1 from '../assets/images/cliente1-cuadrado.jpg';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';

export default () => {
  return (
    <Swiper className='px-8 md:px-16'
      modules={[Navigation, Autoplay]}
      spaceBetween={50}
      slidesPerView={1}
      navigation={{
        prevEl: '.boton-prev',
        nextEl: '.boton-next',
      }}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      }}
      loop={true}
      grabCursor={true}
      breakpoints={{

        640: {
          slidesPerView: 2,
          spaceBetween: 70,
        },
      }}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <p className='hidden md:block boton-prev cursor-pointer text-5xl text-labemAmarillo hover:text-labemOscuro'>
        <AiFillLeftCircle></AiFillLeftCircle>
      </p>
      <p className='hidden md:block boton-next cursor-pointer text-5xl text-labemAmarillo hover:text-labemOscuro'>
        <AiFillRightCircle></AiFillRightCircle>
      </p>
      <SwiperSlide>
        <div className='font-Montserrat bg-white flex flex-col items-center shadow-lg rounded-xl gap-y-2 px-12 pb-16 my-10'>
          <img className='w-20 rounded-full shadow-2xl -mt-10' src={cliente1} alt="" />
          <p className='text-3xl text-labemCeleste pt-2'><ImQuotesLeft></ImQuotesLeft></p>
          <h4 className='font-semibold text-lg md:text-xl'>Melissa Mendoza</h4>
          <h5 className='text-gray-500 italic'>Estudiante </h5>
          <p className='text-sm font-light text-gray-500'>Siempre fue difícil para mí hablar en público, pero gracias a la Consultora Labem, <span className='text-gray-600 font-semibold'>¡Ahora puedo exponer en el colegio sin ningún problema!</span>, muchas gracias a todo su equipo profesional por ayudarme a superar mis miedos</p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='font-Montserrat bg-white flex flex-col items-center shadow-md rounded-xl gap-y-2 px-12 pb-16 my-10'>
          <img className='w-20 rounded-full shadow-2xl -mt-10' src={cliente1} alt="" />
          <p className='text-3xl text-labemRosa pt-2'><ImQuotesLeft></ImQuotesLeft></p>
          <h4 className='font-semibold text-lg md:text-xl'>Mikel Ramirez</h4>
          <h5 className='text-gray-500 italic'>Padre de Familia</h5>
          <p className='text-sm font-light text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, consequuntur! <span className='text-gray-600 font-semibold'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam, deleniti.</span>, Lorem ipsum dolor sit amet consectetur adipisicing elit. At, laborum?</p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='font-Montserrat bg-white flex flex-col items-center shadow-md rounded-xl gap-y-2 px-12 pb-16 my-10'>
          <img className='w-20 rounded-full shadow-2xl -mt-10' src={cliente1} alt="" />
          <p className='text-3xl text-labemCeleste pt-2'><ImQuotesLeft></ImQuotesLeft></p>
          <h4 className='font-semibold text-lg md:text-xl'>Natalia Jimenez</h4>
          <h5 className='text-gray-500 italic'>Madre de Familia</h5>
          <p className='text-sm font-light text-gray-500'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, eius ratione corrupti aspernatur earum eligendi. <span className='text-gray-600 font-semibold'>Lorem ipsum dolor sit amet.</span>, Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est recusandae dolorem distinctio, unde culpa magni?</p>
        </div></SwiperSlide>
      <SwiperSlide>
        <div className='font-Montserrat bg-white flex flex-col items-center shadow-md rounded-xl gap-y-2 px-12 pb-16 my-10'>
          <img className='w-20 rounded-full shadow-2xl -mt-10' src={cliente1} alt="" />
          <p className='text-3xl text-labemRosa pt-2'><ImQuotesLeft></ImQuotesLeft></p>
          <h4 className='font-semibold text-lg md:text-xl'>Gladis Ugaz</h4>
          <h5 className='text-gray-500 italic'>Profesora</h5>
          <p className='text-sm font-light text-gray-500'><span className='text-gray-600 font-semibold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, suscipit.</span>, Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque necessitatibus, distinctio dolorum earum enim deleniti!</p>
        </div></SwiperSlide>
      <SwiperSlide>
        <div className='font-Montserrat min-h-[325px] bg-white flex flex-col items-center shadow-md rounded-xl gap-y-2 px-12 pb-16 my-10'>
          <img className='w-20 rounded-full shadow-2xl -mt-10' src={cliente1} alt="" />
          <p className='text-3xl text-labemCeleste pt-2'><ImQuotesLeft></ImQuotesLeft></p>
          <h4 className='font-semibold text-lg md:text-xl'>Enrique Segoviano</h4>
          <h5 className='text-gray-500 italic'>Profesor</h5>
          <p className='text-sm font-light text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero a culpa perspiciatis odit tempore deleniti?<span className='text-gray-600 font-semibold'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae, earum. </span></p>
        </div></SwiperSlide>
      <SwiperSlide>
        <div className='font-Montserrat min-h-[325px] bg-white flex flex-col items-center shadow-md rounded-xl gap-y-2 px-12 pb-16 my-10'>
          <img className='w-20 rounded-full shadow-2xl -mt-10' src={cliente1} alt="" />
          <p className='text-3xl text-labemRosa pt-2'><ImQuotesLeft></ImQuotesLeft></p>
          <h4 className='font-semibold text-lg md:text-xl'>Susana Vaca</h4>
          <h5 className='text-gray-500 italic'>Psicóloga</h5>
          <p className='text-sm font-light text-gray-500'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque eveniet tempora similique nam corporis suscipit.<span className='text-gray-600 font-semibold'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut, nesciunt.</span></p>
        </div></SwiperSlide>
    </Swiper >
  );
};