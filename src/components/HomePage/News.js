import { useEffect } from 'react'
import useFetch from '../hooks/useFetch'
import { BsPersonFill } from 'react-icons/bs'
import NewsImg from '../../assets/images/NewsDemo.jpg'

import AOS from 'aos';
import 'aos/dist/aos.css';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";

const News = () => {
    const { data: news, isPending, error } = useFetch("http://localhost:5000/news", 5)

    useEffect(() => {
        AOS.init()
    }, [])


    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (<>

        {isPending && <div>Loading ...</div>}
        {error && <div>{error}</div>}

        {news && (<div className="news-section">
            <h2 className="news-headline" data-aos="slide-up">News Headines & Article</h2>

            <div className="news-wrap">
                <Slider {...settings} >
                    {news.map((newsContent) => (
                        <div className="news-frame" key={newsContent.id}>
                            <div className="news-image">
                                <img
                                    src={NewsImg}
                                    alt='News' />
                            </div>
                            <div className="news-title">
                                <h2>{newsContent.headline}</h2>
                                <div className='news-icons'>
                                    <p className='author'> <BsPersonFill className="author-icon" /><span>{newsContent.author}</span></p>
                                    <p className='date'> <i className="fa-regular fa-clock"><span> September 26, 2022</span></i>
                                    </p>

                                </div>
                            </div>
                        </div>


                    ))}

                </Slider>

            </div>



        </div>)}
    </>);
}

export default News;