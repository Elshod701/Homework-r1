import hero from "../assets/images/hero.png";

const Hero = () => {
  return (
    <div className="container-hero">
      <div className="wrapper">
        <div className="left">
          <img src={hero} alt="" />
        </div>
        <div className="right">
          <div className="title">Illustration</div>
          <div className="desc">
            Japan House opens in mountainside to foster peak creativity.
          </div>
          <div className="info">
            Enim omittam qui id, ex quo atqui dictas complectitur. Nec ad timeam
            accusata, hinc justo falli id eum, ferri novum molestie eos cu.
          </div>
          <div className="author">By Reta Torphy</div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
