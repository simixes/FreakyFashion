import '../Global/Style.css';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Header({ onSearch }) {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`/search?q=${searchTerm}`); // Navigera till sökresultat-sidan
    onSearch(searchTerm); // Skicka söktermen till föräldrakomponenten (om det behövs)
  };

  return (
    <div className="header">
      <div className="header-item">
        <img
          id="freakyFashionMainLogo"
          src="/images/FreakyFashionLogoInvis.png"
          alt="Freaky Fashion Logo"
          style={{ cursor: "pointer" }}
          onClick={() => navigate("/")}
        />
      </div>

      <div className="header-item" id="form-container">
        <form id="searchForm" onSubmit={handleSearch}>
          <input
            type="text"
            name="q"
            placeholder="🛒  Sök produkt"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </form>
        <Link id="likeIcon" to="/">
          <img src="/images/black-heart-svg.svg" alt="likeIcon" />
        </Link>
        <Link id="basketIcon" to="/basket">
          <img src="/images/shopping-bag-svg.svg" alt="basketIcon" />
        </Link>
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
