import './Admission.css'
import adminImg from "../../assets/images/admin-img.png";
import Footer from "../HomePage/Footer"


const Admission = () => {
    return ( 
        <div>
           <div className="aboutus-bg">
          <div className="aboutus">
            <h2>Applying to our school</h2>
            <hr />
            <p>  The admissions process at New Hall International School consists of a sequence of steps which vary depending upon the age of the child. Below is a summary of the process
            </p>
          </div>
        </div>

        <div className="admission-wrapper">
            <div className="admin-img">
                <img src={adminImg} alt={"student in the background"} />
            </div>

            <div className="admin-main">
                <h2>Admission process</h2>
                <hr />
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec iaculis nec justo id molestie. Proin nec lorem sollicitudin, volutpat nibh in, porttitor erat. Nunc semper imperdiet ipsum, eu bibendum ligula tempus in. Fusce justo diam, rutrum eu ultrices vitae, varius eget tellus. 
                    Phasellus vel felis mi. Maecenas molestie, nisi ut efficitur volutpat, augue augue ullamcorper mauris, eu egestas lectus nibh id risus. Nam at maximus velit. Nullam et consequat justo. Praesent vestibulum erat velit, eget pharetra felis sagittis euismod. In ac faucibus ipsum, id iaculis lorem. Orci
                     varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed luctus tristique ligula. 
                    </p>
                
                <p>Sed auctor pharetra mi a laoreet. Donec lacinia, lacus non sagittis imperdiet, sem ligula luctus elit, sed porttitor risus enim vel nibh. Nullam blandit eu erat in dictum. Cras sit amet velit nulla. 
                    Sed condimentum scelerisque diam dictum dignissim. Sed molestie lacinia pharetra. 
                    Curabitur facilisis sodales nulla, et tincidunt urna fermentum vitae. Donec id quam nec purus porttitor fermentum nec id lectus. 
                    Aliquam et leo auctor, tincidunt nulla pretium, scelerisque neque. In mollis sed nunc in aliquam. </p>
            </div>
        </div>

        <Footer />
        </div>
     );
}
 
export default Admission;