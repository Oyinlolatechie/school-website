import { useParams, useNavigate } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import Footer from "../HomePage/Footer";
import './NewsPage.css';
import axios from "axios";


const NewsContent = () => {
    const { id } = useParams();
    const { data: Post, isPending, error } = useFetch(`https://divine-treasue-school.onrender.com/api/v1/posts/${id}`)
    const navigate = useNavigate()

    const monthNames = {
        '01': "January",
        "02": "February",
        "03": "March",
        "04": "April",
        "05": "May",
        "06": "June",
        "07": "July",
        "08": "August",
        "09": "September",
        "10": "October",
        "11": "November",
        "12": "December"
    }


    const handleClick = () => {
        axios.delete(`https://divine-treasue-school.onrender.com/api/v1/posts/${id}`)
            .then(() => {
                navigate('/News', { replace: true })
            })
            .catch((error) => {
                console.error('An error occurred while deleting the post:', error);
            })
    }
    return (<>
        <div className="news-bg">
            <div className="news-header">
                <h2>News & Articles</h2>
                <hr />
            </div>
        </div>

        {isPending && <div>Loading ...</div>}
        {error && <div>{error}</div>}

        {Post && <article>
            <div className="news-headline-wrapper">
                <div className="line-vertical"></div>
                <div className="news-calendar">
                    <div className="line-horizontal"></div>
                    <div className="news-date">
                        <span className="news-day">{Post.createdAt.split('-')[2].split('T')[0]}</span>
                        <span className="news-month">{monthNames[Post.createdAt.split('-')[1]]}</span>
                    </div>
                </div>


                <div className="news-head">
                    <h2>{Post.headline}</h2>

                    <div className="post-meta">
                        <p className="post-tag">{Post.tag.toUpperCase()}</p>
                    </div>
                </div>
            </div>

            <div className="news-article">
                <div className="center-text">
                    {Post.body.split('\n').map((paragraph, index) => (<p key={index}>
                        {paragraph}
                    </p>))}
                </div>

                <button className="post-btn" onClick={handleClick}>Remove Post</button>
            </div>

            <Footer />
        </article>}
    </>);
}

export default NewsContent;