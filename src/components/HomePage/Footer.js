const Footer = () => {
    return (
        <footer>

            <div className="footer-content">
                <div className="footer-aboutUs">
                    <h2>About Us</h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged
                    </p>
                </div>

                <div class="footer-contactUs">
                    <h2>Contact Info</h2>
                    <p>
                        Primary School: 5, Adepeju Street, Teachers Quarters, Aroro Makinde, Ibadan, Oyo.
                        College : 5, Adepeju Street, Teachers Quarters, Aroro Makinde, Ibadan, Oyo.
                    </p>
                    <p>
                        Phone Number: 0810 796 5431
                    </p>
                    <p>
                        Email Addresses: divinetreasure@gamil.com
                    </p>
                </div>

                <div class="footer-socials">
                    <h2>Follow Us on Social Media</h2>
                    <i class="fa-brands fa-facebook"></i>
                    <i class="fa-brands fa-instagram"></i>
                    <i class="fa-brands fa-twitter"></i>
                </div>
            </div>
            <div class="copyright">
                <p>website designed by <s className="creditName">oyinlolatechie</s></p>
            </div>

        </footer>
    );
}

export default Footer;