import '../Global/Style.css';
import '../Checkout/CostumerDetails.css';


const CostumerDetails = () => {
  return (
    <div className="costumer-details-container">
      <div>
        <h2>Kunduppgifter</h2>
      </div>
      <div className="costumer-details-container">
        <form>
          <div className="costumer-fname">
            <label htmlFor="first-name">Förnamn</label>
            <input type="text" id="first-name" name="first-name" required />
          </div>

          <div className="costumer-lname">
            <label htmlFor="last-name">Efternamn</label>
            <input type="text" id="last-name" name="last-name" required />
          </div>

          <div className="costumer-email">
            <label htmlFor="email">E-post</label>
            <input type="email" id="email-form" name="email" required />
          </div>

          <div className="costumer-fieldset-container">
            <fieldset className="costumer-adress-fieldset">
              <legend>Adress</legend>
              <label htmlFor="street">Gata</label>
              <input type="text" id="street-form" name="street" />

              <label htmlFor="zipCode">Postnummer</label>
              <input type="text" id="zip-code" name="zipCode" />

              <label htmlFor="city">Stad</label>
              <input type="text" id="city-form" name="city" />
            </fieldset>
          </div>

          <div>
            <input type="checkbox" id="prenumerera-checkbox" name="prenumerera" value="Bike"></input>
            <label for="prenumerera"> Jag vill ta emot nyhetsbrev</label>
          </div>

        </form>
      </div>
      <div>
        <button>Köp</button>
      </div>
    </div>
  );
};

export default CostumerDetails;
