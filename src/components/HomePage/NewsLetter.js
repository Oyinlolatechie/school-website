import './MainSection.css'

const NewsLetter = () => {
  return (
    <div className="newsletter">
      <h2>Subscribe to our weekly Newsletter.</h2>
      <p>Stay up to date as events unfold weekly.</p>

      <form action="" className="subscribe">
        <input type="email" placeholder='Enter your email.' />
        <button className="sub-btn">Subscribe</button>
      </form>
    </div>
  );
}

export default NewsLetter;