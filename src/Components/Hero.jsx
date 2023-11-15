import Button from "./Button";
import "./style.css";

function Hero() {
  return (
    <div className="hero-Containaire">
      <div className="hero-Description" >
        <h1>Retail & Transit Packaging</h1>
        <Button />
      </div>
      <div className="hero-Img">
        <img src="imgs/hero/hero.png" alt="" width={700}  />
      </div>
    </div>
  );
}

export default Hero;
