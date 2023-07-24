import javascriptImage from "../assets/javascript.svg";
const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-center">
        <div className="hero-title">
          <h1>javascript projects</h1>
          <p>
            Creation of html, css and javascript components for reuse and
            modularization of web pages
          </p>
        </div>
        <div className="img-container">
          <img src={javascriptImage} alt="react projects" />
        </div>
      </div>
    </section>
  );
};
export default Hero;
