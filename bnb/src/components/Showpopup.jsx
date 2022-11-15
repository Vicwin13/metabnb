import arrow from "../images/greaterThan.png";
import cancel from "../images/x.png";
import coin from "../images/wallet.png";
import meta from "../images/metaColour.png";

function ShowPopup({ closePopup }) {
  return (
    <aside className="popup-wallet" id="popup-wallet">
      <div className="popup">
        <div className="topside">
          <p>Connect Wallet</p>
          <img
            onClick={() => closePopup(false)}
            src={cancel}
            alt=""
            id="cancel"
          />
        </div>
        <hr />
        <div className="downside">
          <p>Choose your preferred wallet:</p>
          <div className="meta-wallet">
            <div>
              <img src={meta} alt="" />
              <p>Metamask</p>
            </div>
            <div>
              <img src={arrow} alt="" />
            </div>
          </div>
          <div className="coin-wallet">
            <div>
              <img src={coin} alt="" />
              <p>WalletConnect</p>
            </div>
            <div>
              <img src={arrow} alt="" />
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}

export default ShowPopup;
