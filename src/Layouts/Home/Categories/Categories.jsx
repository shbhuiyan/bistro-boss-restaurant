import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import './categories.css'
import category1 from '../../../assets/home/slide1.jpg'
import category2 from '../../../assets/home/slide2.jpg'
import category3 from '../../../assets/home/slide3.jpg'
import category4 from '../../../assets/home/slide4.jpg'
import category5 from '../../../assets/home/slide5.jpg'
import SectionsTitle from '../../../Components/SectionTitle/SectionsTitle';

const Categories = () => {
    return (
        <>
        <SectionsTitle subHeading="From 11:00am to 10:00pm" heading="ORDER ONLINE" />
      <Swiper
        slidesPerView={4}
        spaceBetween={20}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide> <img src={category1} alt="" /> <p className='lg:ml-24 font-cinzel lg:-mt-16 text-orange-500 mb-20 lg:text-3xl font-bold'>Salads</p> </SwiperSlide>
        <SwiperSlide> <img src={category3} alt="" /> <p className='lg:ml-24 font-cinzel lg:-mt-16 text-orange-500 mb-20 lg:text-3xl font-bold'>Soups</p> </SwiperSlide>
        <SwiperSlide> <img src={category2} alt="" /> <p className='lg:ml-24 font-cinzel lg:-mt-16 text-orange-500 mb-20 lg:text-3xl font-bold'>Pizzas</p> </SwiperSlide>
        <SwiperSlide> <img src={category4} alt="" /> <p className='lg:ml-24 font-cinzel lg:-mt-16 text-orange-500 mb-20 lg:text-3xl font-bold'>Desserts</p> </SwiperSlide>
        <SwiperSlide> <img src={category5} alt="" /> <p className='lg:ml-24 font-cinzel lg:-mt-16 text-orange-500 mb-20 lg:text-3xl font-bold'>Drinks</p> </SwiperSlide>
      </Swiper>
    </>
    );
};

export default Categories;