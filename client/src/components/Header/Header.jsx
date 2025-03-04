import '../Global/Style.css';
import { Link } from 'react-router-dom';


function Header() {
  return (
    <div className="header">
      <div className="header-item">
        <img
          id="freakyFashionMainLogo"
          src="/images/FreakyFashionLogoInvis.png"
          alt="Freaky Fashion Logo"
          style={{ cursor: "pointer" }}
        />
      </div>

      <div className="header-item" id="form-container">
        <form id="searchForm" action="/search" method="GET">
          <input type="text" name="q" placeholder="🛒  Sök produkt" />
        </form>
        <a id="likeIcon" href="/">
          <img src="/images/black-heart-svg.svg" alt="likeIcon" />
        </a>
        <a id="basketIcon" href="/">
          <img src="/images/shopping-bag-svg.svg" alt="basketIcon" />
        </a>
      </div>

      <nav className="header-item">
        <ul>
          <li><Link to="/">Hem</Link></li>
          <li><Link to="/nyheter">Nyheter</Link></li>
          <li><Link to="/topplistan">Topplistan</Link></li>
          <li><Link to="/rea">Rea</Link></li>
          <li><Link to="/kampanjer">Kampanjer</Link></li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
