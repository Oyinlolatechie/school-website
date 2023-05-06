import "./AboutUs.css"
// import properietorImg from "../../assets/images/properietor.png"
// import rocketImg from "../../assets/images/rocket.png"
import Footer from "../../components/HomePage/Footer"

const AboutUsPage = () => {
  return (
    <div className="aboutus-bg">
      <div className="aboutus">
        <h2>About our school</h2>
        <p> Divine Tresure College offers a wide range of learning experiences utilizing 21st century learning and teaching approaches.
        </p>
      </div>


      <main>
        <div className="speech-wrapper">
          <div className="speech-img">

          </div>

          <div className="speech-content">
            <h2 className="speech-title"> Director’s Speech
            </h2>

            <hr />
            <p className="speech">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
              If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.
              All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable.
              The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.
            </p>
          </div>
        </div>

        <div className="vision-section">
          <div className="our-vision">
            <h2>Our vision</h2>
            <hr />
            <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classNameical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classNameical literature, discovered the undoubtable source.
              Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
              The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
            </p>
          </div>

          <div className="vision-image">

          </div>
        </div>
      </main>


      <Footer />
    </div>
  );
}

export default AboutUsPage;