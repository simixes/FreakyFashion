import '../Global/Style.css';
import '../Checkout/CostumerDetails.css';


const CostumerDetails = () => {
  return (
    <div className="costumer-details-container">
      <div>
        <h2>Kunduppgifter</h2>
      </div>
      <div className="costumer-details">
        <form>
          <div className="costumer-form-pt1">
          <div className="costumer-form-component" id='costumer-fname'>
            <label htmlFor="first-name">Förnamn</label><br></br>
            <input type="text" id="first-name" name="first-name" required />
          </div>

          <div className="costumer-form-component" id='costumer-lname'>
            <label htmlFor="last-name">Efternamn</label><br></br>
            <input type="text" id="last-name" name="last-name" required />
          </div>

          <div className="costumer-form-component" id='costumer-email'>
            <label htmlFor="email">E-post</label><br></br>
            <input type="email" id="email-form" name="email" required />
          </div>
          </div>
    

          <div className="costumer-fieldset-container">
            <fieldset className="costumer-adress-fieldset">
              <legend>Adress</legend>

              <div className='fieldset-component'>
              <label htmlFor="street">Gata</label><br></br>
              <input type="text" id="street-form" name="street" /><br></br>
              </div>

              <div className='fieldset-component'>
              <label htmlFor="zipCode">Postnummer</label><br></br>
              <input type="text" id="zip-code" name="zipCode" /><br></br>
              </div>

              <div className='fieldset-component'>
              <label htmlFor="city">Stad</label><br></br>
              <input type="text" id="city-form" name="city" /><br></br>
              </div>
            </fieldset>
          </div>

          <div className='prenumerant'>
            <input type="checkbox" id="prenumerera-checkbox" name="prenumerera" value="prenumerera"></input>
            <label htmlFor="prenumerera"> Jag vill ta emot nyhetsbrev</label>
          </div>

        </form>
      </div>
      <div className='btn-container'>
        <button id='buy-btn'>Köp</button>
      </div>
    </div>
  );
};

export default CostumerDetails;
