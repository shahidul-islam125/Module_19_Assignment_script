import "../assets/css/HeroStyle.css";
import heroImg from "../assets/img/hero-img.png";

const HeroSection = () => {
  return (
    <>
      <main>
        <div className="container">
          <div className="row">
            <div className="col-md-6 d-flex align-items-center">
              <div className="hero-text">
                <h1>Increase Your Customers Loyalty and Satisfaction</h1>
                <p>
                  We help businesses like yours earn more customers, standout
                  from competitors, make more money
                </p>
                <button>Get Started</button>
              </div>
            </div>
            <div className="col-md-6">
              <div>
                <img className="hero-img" src={heroImg} alt="Image" />
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default HeroSection;
