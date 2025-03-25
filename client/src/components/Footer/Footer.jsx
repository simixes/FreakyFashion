import { useState } from "react";
import { Link } from "react-router-dom";
import '../Global/Style.css';

function Footer() {

  const sections = [
    { id: "One", title: "Shopping", items: ["Vinterjackor", "Byxor", "Tröjor", "Skjortor"] },
    { id: "Two", title: "Mina sidor", items: ["Inställningar", "Inloggning och säkerhet", "Betalningsalternativ", "Dina adresser", "Dina beställningar"] },
    { id: "Three", title: "Kundtjänst", items: ["Kontakta oss", "Skicka ett meddelande"] }
  ];
  
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="footer">
      <div id="information-panel">
        <div className="footer-icons">
          <div className="site-icons">
            <img
              src="/images/truck-fill-svgrepo-com.svg"
              alt=""
            />
            <p>Gratis frakt & returer</p>
          </div>
          <div className="site-icons">
            <img
              src="/images/airplane-svgrepo-com.svg"
              alt=""
            />
            <p>Expressfrakt</p>
          </div>
          <div className="site-icons">
            <img
              src="/images/shield-check-svgrepo-com.svg"
              alt=""
            />
            <p>Säkra betalningar</p>
          </div>
          <div className="site-icons">
            <img
              src="/images/new-3-svgrepo-com.svg"
              alt=""
            />
            <p>Nyheter varje dag</p>
          </div>
        </div>
      </div>

      <div className="accordion" id="accordionExample">
        {sections.map((section, index) => (
          <div className="accordion-item" key={section.id}>
            <h2 className="accordion-header" id={`heading${section.id}`}>
              <button
                className={`accordion-button ${activeIndex === index ? "" : "collapsed"}`}
                type="button"
                onClick={() => toggleAccordion(index)}  
                aria-expanded={activeIndex === index ? "true" : "false"}
                aria-controls={`collapse${section.id}`}
              >
                {section.title} {/* Dynamisk titel */}
              </button>
            </h2>
            <div
              id={`collapse${section.id}`}
              className={`accordion-collapse collapse ${activeIndex === index ? "show" : ""}`}
              aria-labelledby={`heading${section.id}`}
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <ul>
                  {section.items.map((item, itemIndex) => (
                    <li key={itemIndex}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Footer efter 639px */}
      <div className="footer640px">
        <div className="footer-item" id="shopping-part">
          <ul>
            <li>
              <h2>Shopping</h2>
            </li>
            <li>Vinterjackor</li>
            <li>Byxor</li>
            <li>Tröjor</li>
            <li>Skjortor</li>
          </ul>
        </div>
        <div className="footer-item" id="my-account">
          <ul>
            <li>
              <h2>Mina Sidor</h2>
            </li>
            <li>Inställningar</li>
            <li>
              <Link to="/admin/products">
              Inloggning
              </Link>
           </li>
            <li>Betalningsalternativ</li>
            <li>Dina adresser</li>
            <li>Dina beställningar</li>
          </ul>
        </div>
        <div className="footer-item" id="services">
          <ul>
            <li>
              <h2>Kundtjänst</h2>
            </li>
            <li>Kontakta oss</li>
            <li>Skicka ett meddelande</li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="copyright">
        <p>&copy; 2024 Freaky Fashion. All Rights Reserved.</p>
      </div>
    </div>
  );
}

export default Footer;

  




