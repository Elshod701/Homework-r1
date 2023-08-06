import logo from "../assets/images/logo.svg";
const Header = () => {
  return (
    <>
      <header>
        <div className="container-header">
          <nav className="nav">
            <a className="logo" href="#">
              <img src={logo} alt="" />
            </a>
            <ul className="nav__list">
              <li className="item">
                <a href="#" className="link">
                  Home
                </a>
              </li>
              <li className="item">
                <a href="#" className="link">
                  Latest
                </a>
              </li>
              <li className="item">
                <a href="#" className="link">
                  About
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
