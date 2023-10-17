
// import AboutImage from '../../assets/images/few-students-standing.jpeg'
// import 'aos/dist/aos.css';
import { Link } from "react-router-dom";


const AboutUs = () => {


    return (
        <div className="about-us">
            <div className="aboutUs-content">
                <h2>About Divine Treasure School</h2>

                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>

                <span><Link to="/About-us" className="link">Learn more</Link></span>
            </div>

            <div className="aboutUs-image">

            </div>

        </div>
    );
}

export default AboutUs;