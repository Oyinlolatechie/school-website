import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import Footer from "../HomePage/Footer";
import './NewsPage.css'


const NewsContent = () => {
    const { id } = useParams();
    const { data: News, isPending, error } = useFetch(`http://localhost:5000/news/${id}`)


    return (<>


        <div className="News-bg">
            <div className="News-header">
                <h2>News & Articles</h2>
                <hr />
            </div>
        </div>

        {isPending && <div>Loading ...</div>}
        {error && <div>{error}</div>}

        {News && <article>
            <div className="news-headline-wrapper">
                <div className="line-vertical"></div>
                <div className="news-calendar">
                    <div className="line-horizontal"></div>
                    <div className="news-date">
                        <span className="news-day">12</span>
                        <span className="news-month">December</span>
                    </div>
                </div>


                <div className="news-head">
                    <h2>{News.headline}</h2>

                    <div>
                        <button>NEWS</button>
                        <p>Leave a comment</p>
                    </div>
                </div>
            </div>

            <div className="news-article">
                {News.content.split('\n').map((paragraph, index) => (<p key={index}>
                    {paragraph}
                </p>))}
            </div>

            <Footer />
        </article>}
    </>);
}

export default NewsContent;