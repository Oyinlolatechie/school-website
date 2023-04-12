import useFetch from "../hooks/useFetch";
import NewsImage from "../../assets/images/few-students-standing.jpeg"
import Footer from "../HomePage/Footer";
import "./NewsPage.css";
import { Link } from 'react-router-dom'


const NewsPage = () => {
    const { data: News, isPending, error } = useFetch('http://localhost:5000/news')


    return (
        <>
            {isPending && <div>Loading ...</div>}
            {error && <div>{error}</div>}

            {News && <div>
                {News && (<div className="News-section">
                    <div className="News-bg">
                        <div className="News-header">
                            <h2>News & Articles</h2>
                            <hr />
                            {/* <p>  The admissions process at New Hall International School consists of a sequence of steps which vary depending upon the age of the child. Below is a summary of the process
            </p> */}
                        </div>
                    </div>


                    {News.map((New) => (<div className="news-wrapper" key={New.id}>

                        <div className="news-img">
                            <div className="tag">News</div>
                            <img src={NewsImage} alt={"students"} />
                        </div>

                        <div className="news-content">
                            <Link to={`/News/${New.id}`}>
                                <h2>{New.headline}</h2>
                            </Link>
                            <p> {New.description}</p>
                            <Link to={`/News/${New.id}`}>Read more...</Link>
                            <p> <i className="fa-regular fa-clock"></i> September 26, 2022</p>
                        </div>

                    </div>
                    ))}

                </div>)}

                <Footer />
            </div>}
        </>
    );
}

export default NewsPage;