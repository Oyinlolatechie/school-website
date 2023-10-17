import { Link } from "react-router-dom";

const AdminBanner = ({ adminImg }) => {
    return (


        <>
            <div className="admission">
                <div className="admin-image">
                    {/* <img src={adminImg}
                        alt="A male and female DTS student, walking"
                    /> */}
                </div>

                <div className="admin-content">
                    <h2>Apply For Admission</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio, corporis deleniti iste possimus commodi necessitatibus asperiores saepe laudantium quaerat dolor porro unde reprehenderit quasi, accusamus id maxime soluta sit libero?</p>
                </div>

                <Link to="/Admission" className="link-btn"><button className="admin-btn">Apply Now</button></Link>
            </div>
        </>
    );
}

export default AdminBanner;