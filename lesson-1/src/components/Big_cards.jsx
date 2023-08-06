import Big_card from "../assets/images/big_cards.png";

const Big_cards = () => {
  return (
    <div className="container">
      <div className="wrapper">
        <div className="cards">
          <div className="big_card">
            <img src={Big_card} alt="" className="big_card_img" />
            <div className="card__title">Photography</div>
            <div className="card__info">
              Helmut Lang celebrates taxi drivers worldwide in latest campaign
            </div>
            <div className="card__by">By Alessandra Ortiz</div>
          </div>
          <div className="big_card">
            <img src={Big_card} alt="" className="big_card_img" />
            <div className="card__title">Photography</div>
            <div className="card__info">
              Helmut Lang celebrates taxi drivers worldwide in latest campaign
            </div>
            <div className="card__by">By Alessandra Ortiz</div>
          </div>
          <div className="big_card">
            <img src={Big_card} alt="" className="big_card_img" />
            <div className="card__title">Photography</div>
            <div className="card__info">
              Helmut Lang celebrates taxi drivers worldwide in latest campaign
            </div>
            <div className="card__by">By Alessandra Ortiz</div>
          </div>
          <div className="big_card">
            <img src={Big_card} alt="" className="big_card_img" />
            <div className="card__title">Photography</div>
            <div className="card__info">
              Helmut Lang celebrates taxi drivers worldwide in latest campaign
            </div>
            <div className="card__by">By Alessandra Ortiz</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Big_cards;
