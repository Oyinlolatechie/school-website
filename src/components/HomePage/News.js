import { useEffect } from 'react'
import useFetch from '../hooks/useFetch'
import { BsPersonFill } from 'react-icons/bs'
import NewsImg from '../../assets/images/NewsDemo.jpg'

import AOS from 'aos';
import 'aos/dist/aos.css';

const News = () => {
    const { data: news, isPending, error } = useFetch("http://localhost:5000/news", 3)

    useEffect(() => {
        AOS.init()
    }, [])

    return (<>

        {isPending && <div>Loading ...</div>}
        {error && <div>{error}</div>}

        {news && (<div className="news-section">
            <h2 className="news-headline" data-aos="slide-up">News Headines & Article</h2>

            <div className="news-wrapper"
                data-aos="slide-up"
            >
                {news.map((newsContent) => (
                    <div className="news-frame" key={newsContent.id}>
                        <div className="news-image">
                            <img
                                src={NewsImg}
                                alt='News' />
                        </div>
                        <div className="news-title">
                            <h2>{newsContent.title}</h2>
                            <p className='author'> <BsPersonFill className="author-icon" /><span>{newsContent.author}</span></p>
                            <p className='date'> <i className="fa-regular fa-clock"><span> September 26, 2022</span></i>
                            </p>
                        </div>
                    </div>
                ))}

            </div>



        </div>)}
    </>);
}

export default News;