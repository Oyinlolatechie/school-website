import parentImage from '../../assets/images/Mr.Jeremy.jpg'


const Testimonial = () => {
    return ( 
        <div className="testimonial">
            <h2>What Our Parents Say</h2>

        <div class="testimonial-content">
            <q>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...</q>
            <img src={parentImage} alt="" />
            <p>Mr.Lagbaja.O</p>
        </div> 
        </div>
     );
}
 
export default Testimonial;