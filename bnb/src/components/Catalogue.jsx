const Catalogue = ({ catalogues }) => {
  return (
    <>
      {catalogues.map((catalogue) => (
        <div className="ad-container" key={catalogue.id}>
          <div className="frame-pics">
            <img src={catalogue.frames} alt="" />
          </div>
          <div className="sep">
            <p>{catalogue.first}</p>
            <p>{catalogue.second}</p>
          </div>
          <div className="sep">
            <p>{catalogue.third}</p>
            <p>{catalogue.fourth}</p>
          </div>
          <div className="stars">
            <img src={catalogue.star} alt="feedback stars" />
            <img src={catalogue.star} alt="feedback stars" />
            <img src={catalogue.star} alt="feedback stars" />
            <img src={catalogue.star} alt="feedback stars" />
            <img src={catalogue.star} alt="feedback stars" />
          </div>
        </div>
      ))}
    </>
  );
};

export default Catalogue;
