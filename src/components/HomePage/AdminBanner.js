const AdminBanner = ({adminImg}) => {
    return ( 
        <>
         <div className="admission">
                <div className="admin-image">
                    <img src={adminImg}
                    alt="A male and female DTS student, walking" 
                    />
                </div>

                <div className="admin-content">
                    <h2>Apply For Admission</h2>
                    <p> We are currently enrolling for 2022/2023 Academic Session</p>
                </div>
                
                <button className="admin-btn">Apply Now</button>
            </div>
        </>
     );
}
 
export default AdminBanner;