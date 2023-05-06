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
                    <p>We are one of the foremost British international schools in Lagos and Nigeria; we provide a well-rounded education that enables our students to develop vital life skills and excel academically. Here is a summary of our admission procedure.</p>
                </div>

                <button className="admin-btn">Apply Now</button>
            </div>
        </>
    );
}

export default AdminBanner;