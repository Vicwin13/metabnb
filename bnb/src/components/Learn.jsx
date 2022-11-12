import image from "../images/group.png";

function Learn() {
  return (
    <>
      <section className="learn">
        <div className="learn-text">
          <h1>Metabnb NFTs</h1>
          <p>
            Discover our NFT gift cards collection. Loyal customers gets amazing
            gift cards which are tracked as NFTs. Those NFTs give our customers
            access to loads of our exclusive services
          </p>

          <button>Learn more</button>
        </div>
        <div>
          <img src={image} alt="" />
        </div>
      </section>
    </>
  );
}

export default Learn;
