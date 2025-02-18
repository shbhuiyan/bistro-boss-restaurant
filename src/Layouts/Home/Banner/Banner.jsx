import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import banner1 from '../../../assets/home/01.jpg'
import banner2 from '../../../assets/home/02.jpg'
import banner3 from '../../../assets/home/03.png'
import banner4 from '../../../assets/home/04.jpg'
import banner5 from '../../../assets/home/05.png'
import banner6 from '../../../assets/home/06.png'
import "./Banner.css"

const Banner = () => {
    return (
        <Carousel autoPlay={true} infiniteLoop={true} className='lg:-my-16'>
                <div>
                    <img className='max-h-[700px]' src={banner1} />
                </div>
                <div>
                    <img className='max-h-[700px]' src={banner2} />
                </div>
                <div>
                    <img className='max-h-[700px]' src={banner3} />
                </div>
                <div>
                    <img className='max-h-[700px]' src={banner4} />
                </div>
                <div>
                    <img className='max-h-[700px]' src={banner5} />
                </div>
                <div>
                    <img className='max-h-[700px]' src={banner6} />
                </div>
            </Carousel>
    );
};

export default Banner;