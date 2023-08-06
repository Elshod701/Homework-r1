import logo from "../assets/images/darklogo.svg";
const Footer = () => {
  return (
    <div className="footer-container">
      <div className="top-footer">
        <img src={logo} alt="" />
        <p className="reserved">© 2018 Noiceland™, all rights reserved</p>
      </div>
      <div className="bottom-footer">
        <p className="bf_title">Categories</p>
        <div className="categories">
          <ul className="list">
            <div>
              <li className="item">Animation</li>
              <li className="item">Interactive Design</li>
            </div>
            <div>
              {" "}
              <li className="item">Architecture</li>
              <li className="item">Miscellaneous</li>
            </div>
            <div>
              <li className="item">Graphic Design</li>
              <li className="item">Photography</li>
            </div>
            <div>
              <li className="item">Illustration</li>
              <li className="item">Product Design</li>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Footer;
