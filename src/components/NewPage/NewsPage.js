import useFetch from "../hooks/useFetch";
import NewsImage from "../../assets/images/few-students-standing.jpeg"
import Footer from "../HomePage/Footer";
import "./NewsPage.css";
import { Link } from 'react-router-dom'


const NewsPage = () => {
    const { data: Posts, isPending, error } = useFetch('https://divine-treasue-school.onrender.com/api/v1/posts')

    return (
        <>
            {isPending && <div>Loading ...</div>}
            {error && <div>{error}</div>}

            {Posts && <div>
                {Posts && (<div className="news-section">
                    <div className="news-bg">
                        <div className="news-header">
                            <h2>News & Articles</h2>
                            <hr />
                            {/* <p>  The admissions process at New Hall International School consists of a sequence of steps which vary depending upon the age of the child. Below is a summary of the process
            </p> */}
                        </div>
                    </div>

                    <div className="news-wrap">
                        {Posts.map((Post) => (

                            <div className="news-wrapper" key={Post._id}>

                                <div className="news-framer">
                                    <div className="news-img">
                                        <div className="tag">News</div>
                                        <img src={NewsImage} alt={"students"} />
                                    </div>

                                    <div className="news-content">
                                        <div>
                                            <Link to={`/News/${Post._id}`}>
                                                <h2>{Post.headline}</h2>
                                            </Link>

                                            <p className="news-desc"> {Post.description}</p>
                                        </div>

                                        <div className="news-meta_wrap">
                                            <div className="news-meta">
                                                <i className="fa-regular fa-calendar date-icon" ></i> <p>{Post.createdAt.split('T')[0]}</p>
                                            </div>

                                            <div>
                                                <Link to={`/News/${Post._id}`}> <button className="post-btn">Read more</button> </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        ))}
                        <Link to={'/news/create'}><button className="post-btn">Add a Post</button></Link>

                    </div>
                </div>)}



                <Footer />
            </div >}
        </>
    );
}

export default NewsPage;